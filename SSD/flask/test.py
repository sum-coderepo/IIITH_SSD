import requests
import json
# url to make a post request to
url='http://localhost:8004/predict'
post_user ={
    "query": "Deep learning Attention model",
    "link": "fjljdsljsfjjsf"
}
# making post request
response = requests.post(url, data=json.dumps(post_user))
print(f'Content of Request:{response.content} ')
print(f'URL : {response.url}')

## output  ##