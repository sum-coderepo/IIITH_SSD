from flask import Flask, jsonify, request

app = Flask(__name__)

model = SentimentModel()

@app.route('/incomes')
def get_incomes():
    return jsonify(incomes)


@app.route('/incomes', methods=['POST'])
def add_income():
    incomes.append(request.get_json())
    return '', 204

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=106)