import json

import uvicorn
from fastapi import FastAPI
from model import SentimentModel
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
model = SentimentModel()
from fastapi import Response
from fastapi import Body

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
    query: str
    link: str


@app.post('/predict')

def predict(item: str= Body()):
    query = item.split("||")[0]
    section = item.split("||")[1]
    print("data: ", query, ", Section: ", section)
    embedding = model.get_embeddings(query)
    elastic_result = model.elasticSearch(embedding.numpy())
    print(elastic_result)
    print()
    return elastic_result
    #return elastic_result



# def predict(item: Item):
#     print("jdjljsd")
#     print("data", item)
#     embedding = model.get_embeddings(item.query)
#     elastic_result = model.elasticSearch(embedding.numpy())
#     #print(embedding)
#     print(elastic_result)
#     print()
#     return {
#         'embeddings_done' : elastic_result.body['hits']['hits']
#     }

if __name__ == '__main__':
    uvicorn.run(app, host='localhost', port=8004)