import flask
import json
from werkzeug.utils import secure_filename
import jsonify

from flask import Flask, jsonify

app = Flask(__name__)

data = json.load(open('data.json'))
customers = [data]

@app.route('/json/<int:cust_id>', methods=['GET'])
def get_cust(cust_id):
    cust = [cust for cust in customers if cust['id'] == cust_id]
    if len(cust) == 0:
        abort(404)
    return jsonify ({'cust': cust[0]})


@app.route('/put_json/', methods=['POST'])
def create_task():
    if not request.json or not 'title' in request.json:
        abort(400)
    task = {
        'id': tasks[-1]['id'] + 1,
        'movements': request.json['movements'],
        'searches': request.json['searches'],
        'input devices': request.json['input devices'],
        'app usage': request.json['app usage']
    }
    tasks.append(task)
    database.insert_into()
    return jsonify({'task': task}), 201


@app.errorhandler(404)
def not_found(error):
    return flask.make_response(jsonify({'error': 'Not found'}), 404)

if __name__ == '__main__':
    app.run(debug=True)(debug = True)