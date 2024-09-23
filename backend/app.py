import os
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from encryption import encrypt_file, decrypt_file

app = Flask(__name__)
CORS(app)

# Ensure 'uploads' directory exists
if not os.path.exists('uploads'):
    os.makedirs('uploads')

# Encrypt and store the file on the server
@app.route('/encrypt_and_store', methods=['POST'])
def encrypt_and_store():
    file = request.files['file']
    file_path = os.path.join("uploads", file.filename)
    
    # Save the uploaded file
    file.save(file_path)

    # Generate AES key
    key = os.urandom(32)  # AES-256 key

    # Encrypt the file and store the encrypted file
    encrypted_file_path = encrypt_file(file_path, key)

    # Optionally, delete the original file after encryption
    os.remove(file_path)

    return jsonify({"encrypted_file": encrypted_file_path, "key": key.hex()})

# Retrieve and decrypt the file with the AES key
@app.route('/get_and_decrypt', methods=['POST'])
def get_and_decrypt():
    encrypted_filename = request.form['filename']  # Encrypted filename to decrypt
    aes_key = bytes.fromhex(request.form['key'])  # AES key input by the user

    encrypted_file_path = os.path.join("uploads", encrypted_filename)

    if not os.path.exists(encrypted_file_path):
        return jsonify({"error": "File not found!"}), 404

    # Decrypt the file
    decrypted_file_path = decrypt_file(encrypted_file_path, aes_key)

    # Send the decrypted file back to the user
    return send_file(decrypted_file_path)

if __name__ == '__main__':
    app.run(debug=True)
