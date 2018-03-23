from flask import Flask, request, Response, send_from_directory
import jsonify
import os.path
# set the project root directory as the static folder, you can set others.
app = Flask(__name__)



@app.route('/a', methods=['GET'])   
def send_html():
    content = open('static-frontend/index.html')
    return Response(content, mimetype="text/html")

@app.route('/b/<path:path>')
def static_proxy(path):
  return app.send_static_file(path)




@app.route('/<path:filename>', methods=['GET', 'POST'])
def index(filename):
    filename = filename or 'index.html'
    if request.method == 'GET':
        return send_from_directory('/Users/daanlock/Desktop/mbiti/mbition_team/static-frontend/', filename)

    return jsonify(request.data)
   

    

if __name__ == '__main__':
    app.run(debug=True)(debug = True)