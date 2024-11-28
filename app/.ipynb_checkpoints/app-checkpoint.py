from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = 'admin'  # Asegúrate de cambiar esto por una clave segura en producción

# Datos simulados de usuarios
usuarios = {
    "admin@t.com": "admin",
    "user@t.com": "user"
}

# Ruta de inicio (home)
@app.route('/')
def home():
    return render_template('index.html')

# Ruta de login
@app.route('/login', methods=['POST'])
def login():
    email = request.form.get('email')
    password = request.form.get('pswd')

    # Validar credenciales
    if email in usuarios and usuarios[email] == password:
        session['user'] = email  # Guardar el usuario en la sesión
        return redirect(url_for('mainHub'))
    else:
        return "Credenciales incorrectas. Intenta nuevamente."

# Ruta de logout
@app.route('/logout')
def logout():
    session.pop('user', None)  # Eliminar al usuario de la sesión
    return redirect(url_for('home'))  # Redirige al login después de cerrar sesión

# Ruta principal para la hub de usuario
@app.route('/mainHub', methods=['GET', 'POST'])
def mainHub():
    # Verificar si el usuario está autenticado
    if 'user' not in session:
        return redirect(url_for('home'))  # Redirigir al login si no está autenticado
    return render_template('mainHub.html')  # Mostrar la página principal

# Otras rutas de la aplicación
@app.route('/analisis', methods=['GET'])
def analisis():
    return render_template('analisisMinuta.html')

@app.route('/docExtra', methods=['GET'])
def docExtra():
    return render_template('editMinuta.html')

@app.route('/realTime', methods=['GET'])
def realTime():
    return render_template('realTimeMinuta.html')

@app.route('/upload', methods=['GET'])
def upload():
    return render_template('uploadMinuta.html')

@app.route('/resultados', methods=['GET'])
def resultados():
    return render_template('resultadosMinuta.html')

@app.route('/historial', methods=['GET'])
def historial():
    return render_template('historialMinutas.html')

@app.route('/help', methods=['GET'])
def help():
    return render_template('helpMinuta.html')

@app.route('/configMinuta', methods=['GET'])
def configMinuta():
    return render_template('configMinuta.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
