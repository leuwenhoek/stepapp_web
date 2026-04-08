from flask import Flask, render_template, jsonify, send_from_directory
import json
import os

app = Flask(__name__)
IMAGE_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'images')

def get_apk_data():
    try:
        with open('APK.json', 'r') as f:
            return json.load(f)
    except Exception as e:
        return {"apk_link": "#", "version": "unknown", "error": str(e)}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/download')
def download():
    apk_data = get_apk_data()
    return render_template('download.html', apk=apk_data)

@app.route('/docs')
def docs():
    return render_template('docs.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/images/<filename>')
def get_image(filename):
    return send_from_directory(IMAGE_FOLDER, filename)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
