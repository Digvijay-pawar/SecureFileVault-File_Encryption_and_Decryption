# File Encryption and Decryption App

This project is a simple React application that allows users to encrypt and decrypt files securely. It uses AES encryption and communicates with a backend server to perform the encryption and decryption processes.

## Features

- **File Encryption**: Upload a file and receive an encrypted version with an AES key.
- **File Decryption**: Provide the encrypted filename and AES key to decrypt and download the original file.
- **User-Friendly UI**: Modern and responsive interface using Bootstrap and FontAwesome.

## Technologies Used

- **Frontend**: React, Bootstrap, FontAwesome
- **Backend**: Node.js (Express)
- **Database**: MongoDB (if applicable for storage)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB (if you're using a database).
- A running backend server that handles encryption and decryption requests.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/file-encryption-decryption-app.git

2. Navigate to the project directory:
    
    ```bash
    cd file-encryption-decryption-app

3. Navigate to Backend

    ```bash
    cd backend
    pip install -r requirements.txt
    python app.py

4. Navigate to Frontend

    ```bash
    cd frontend
    npm install
    npm run dev