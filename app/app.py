from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/mainHub', methods=['GET'])
def mainHub():
    try:
        return render_template('mainHub.html')
    except Exception as e:
        return f"Ocurrió un error al intentar cargar la plantilla: {str(e)}"

@app.route('/analisis', methods=['GET'])
def analisis():
    try:
        return render_template('analisisMinuta.html')
    except Exception as e:
        return f"Ocurrió un error al intentar cargar la plantilla: {str(e)}"


@app.route('/docExtra', methods=['GET'])
def docExtra():
    try:
        return render_template('editMinuta.html')
    except Exception as e:
        return f"Ocurrió un error al intentar cargar la plantilla: {str(e)}"

@app.route('/realTime', methods=['GET'])
def realTime():
    try:
        return render_template('realTimeMinuta.html')
    except Exception as e:
        return f"Ocurrió un error al intentar cargar la plantilla: {str(e)}"

@app.route('/upload', methods=['GET'])
def upload():
    try:
        return render_template('uploadMinuta.html')
    except Exception as e:
        return f"Ocurrió un error al intentar cargar la plantilla: {str(e)}"

@app.route('/resultados', methods=['GET'])
def resultados():
    try:
        return render_template('resultadosMinuta.html')
    except Exception as e:
        return f"Ocurrió un error al intentar cargar la plantilla: {str(e)}"

@app.route('/historial', methods=['GET'])
def historial():
    try:
        return render_template('historialMinutas.html')
    except Exception as e:
        return f"Ocurrió un error al intentar cargar la plantilla: {str(e)}"

@app.route('/help', methods=['GET'])
def help():
    try:
        return render_template('helpMinuta.html')
    except Exception as e:
        return f"Ocurrió un error al intentar cargar la plantilla: {str(e)}"

@app.route('/configMinuta', methods=['GET'])
def configMinuta():
    try:
        return render_template('configMinuta.html')
    except Exception as e:
        return f"Ocurrió un error al intentar cargar la plantilla: {str(e)}"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
