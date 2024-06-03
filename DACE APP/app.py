from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login.html')
def login():
    return render_template('login.html')

@app.route('/map')
def map():
    return render_template('map.html')

@app.route('/profile.html')
def profile():
    return render_template('profile.html')

@app.route('/welcome.html')
def welcome():
    return render_template('welcome.html')

@app.route('/register', methods=['POST'])
def register():
    name = request.form.get('name')
    phone = request.form.get('phone')
    otp = request.form.get('otp')
    password = request.form.get('password')
    print(f"Name: {name}, Phone: {phone}, OTP: {otp}, Password: {password}")
    return redirect(url_for('login'))

@app.route('/perform_login', methods=['POST'])
def perform_login():
    phone = request.form.get('phone')
    password = request.form.get('password')
    print(f"Phone: {phone}, Password: {password}")
    # Add your authentication logic here
    # For now, we assume the login is always successful
    return redirect(url_for('welcome'))
@app.route('/save_location', methods=['POST'])
def save_location():
    data = request.json
    lat = data.get('lat')
    lng = data.get('lng')
    # Save lat and lng to the database or perform other actions
    print(f"Saved location: {lat}, {lng}")
    return jsonify({'status': 'success'})
if __name__ == '__main__':
    app.run(debug=True)
