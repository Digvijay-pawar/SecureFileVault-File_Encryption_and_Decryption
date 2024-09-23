from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
import os

def encrypt_file(file_path, key):
    iv = os.urandom(16)
    cipher = Cipher(algorithms.AES(key), modes.CFB(iv))
    encryptor = cipher.encryptor()

    with open(file_path, 'rb') as f:
        plaintext = f.read()

    ciphertext = encryptor.update(plaintext) + encryptor.finalize()
    encrypted_file_path = file_path + ".enc"

    with open(encrypted_file_path, 'wb') as f:
        f.write(iv + ciphertext)

    return encrypted_file_path

def decrypt_file(encrypted_file_path, key):
    with open(encrypted_file_path, 'rb') as f:
        iv = f.read(16)
        ciphertext = f.read()

    cipher = Cipher(algorithms.AES(key), modes.CFB(iv))
    decryptor = cipher.decryptor()

    decrypted_data = decryptor.update(ciphertext) + decryptor.finalize()
    decrypted_file_path = encrypted_file_path.replace(".enc", "_decrypted")

    with open(decrypted_file_path, 'wb') as f:
        f.write(decrypted_data)

    return decrypted_file_path
