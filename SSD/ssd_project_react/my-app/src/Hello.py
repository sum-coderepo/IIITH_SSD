import sys
import json
import ast

data_to_pass_back = "Send this to node process"
input = ast.literal_eval(sys.argv[1])
output = input
output['data_returned']= data_to_pass_back
print(json.dumps(output))
sys.stdout.flush()