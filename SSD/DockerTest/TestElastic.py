from elasticsearch import Elasticsearch
from elasticsearch import helpers
from tqdm.notebook import tqdm
import os
import json
import pandas as pd
import time
import numpy as np
from tqdm.auto import tqdm
from elasticsearch import Elasticsearch
from elasticsearch.helpers import streaming_bulk

from transformers import AutoTokenizer, TFAutoModel


model_ckpt = "sentence-transformers/all-MiniLM-L12-v2"
tokenizer = AutoTokenizer.from_pretrained(model_ckpt)

model = TFAutoModel.from_pretrained(model_ckpt, from_pt=True)


def cls_pooling(model_output):
    return model_output.last_hidden_state[:, 0]

import torch
def get_embeddings(text_list):
    encoded_input = tokenizer(text_list, padding=True, truncation=True, return_tensors="tf")
    encoded_input = {k: v for k, v in encoded_input.items()}
    with torch.no_grad():
        model_output = model(**encoded_input)
    # return cls_pooling(model_output)
    # return  mean_pooling(model_output, encoded_input["attention_mask"])
    return cls_pooling(model_output)

def create_index(client):
    client.indices.create(
        index="ssd-search",
        body={
            "settings": {"number_of_shards": 1},
            "mappings": {
                "dynamic": "true",
                "_source": {
                    "enabled": "true"
                },
                "properties": {
                    "id": {
                        "type": "keyword",
                        "index":"false"
                    },
                    "abstract": {
                        "type": "text",
                        "fields": {
                            "keyword": {
                                "type": "keyword",
                                "index":"false"
                            }
                        }
                    },
                    "vector": {
                        "type": "dense_vector",
                        "dims": 384
                    }
                }
            }
        },
        ignore=400,
    )

def generate_actions(dataset):
    def convert(item):
        item = item.strip()  # remove spaces at the end
        item = item[1:-1]    # remove `[ ]`
        item = np.fromstring(item, sep=' ')  # convert string to `numpy.array`
        return item

    dataset['vector'] = dataset['embeddings'].apply(convert)

    for index, row in dataset.iterrows():
        doc = {
            "id": index,
            "abstract": row.get("abstract", 0),
            "vector": row.get("vector", 0),
        }
        yield doc


def main():
    print("Loading dataset...")
    dataset = pd.read_csv("D:\\arxiv dump\\Embeddings/Test-1.csv")
    number_of_docs = len(dataset) + 1

    client = Elasticsearch(['https://localhost:9200'], http_auth=('elastic', 'P_YhQNcMjc36xSELpgzJ'), verify_certs=False)
    print("Creating an index...")
    create_index(client)

    print("Indexing documents...")
    progress = tqdm(unit="docs", total=number_of_docs)
    successes = 0
    for ok, action in streaming_bulk(
            client=client, index="ssd-search", actions=generate_actions(dataset),
    ):
        progress.update(1)
        successes += ok
    print("Indexed %d/%d documents" % (successes, number_of_docs))

def check_results():
    client = Elasticsearch(['https://localhost:9200'], http_auth=('elastic', 'P_YhQNcMjc36xSELpgzJ'), verify_certs=False)
    question = "Polymer Quantum Mechanics and its Continuum Limit A rather non-standard quantum representation of the canonicale"
    question_embedding = get_embeddings([question]).numpy()

    script_query = {
        "script_score": {
            "query": {"match_all": {}},
            "script": {
                "source": "cosineSimilarity(params.query_vector, 'vector' ) + 1.0",
                "params": {"query_vector": question_embedding[0]}
            }
        }
    }


    client.search(
        index="ssd-search",
        body={
            "size": 3,
            "query": script_query,
            "_source": {"includes": ["id", "abstract"]}
        }
    )

if __name__ == "__main__":
    main()
