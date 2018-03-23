import flask
import json
from werkzeug.utils import secure_filename
import jsonify
from flask import Flask, jsonify
app = Flask(__name__, static_url_path='')

data = json.load(open('data.json'))
customers = [data]

@app.route('/get_json', methods=['GET'])
def get_data():
    return jsonify (customers)

@app.route('/get_json_file/<path:path>')
def send_js(path):
    return send_from_directory('/', path)

@app.route('/post_json_file', methods=['POST'])
def post_json(path):
    print ('posted')

if __name__ == "__main__":
    app.run()
def get(path):
    return send_from_directory('js', path)

if __name__ == "__main__":
    app.run()

    
@app.errorhandler(404)
def not_found(error):
    return flask.make_response(jsonify({'error': 'Not found'}), 404)

if __name__ == '__main__':
    app.run(debug=True)(debug = True)