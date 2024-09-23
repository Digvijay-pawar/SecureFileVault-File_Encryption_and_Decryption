import React from 'react';
import FileEncryptor from './FileEncryptor';
import FileDecryptor from './FileDecryptor';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
    return (
        <div className="container my-5">
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <a className="navbar-brand" href="/">File Encryption System</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>

            <div className="row">
                {/* Encryption Section */}
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h3 className="card-title">Encrypt and Store File</h3>
                            <p className="card-text">Upload a file and store it in an encrypted format.</p>
                            <FileEncryptor />
                        </div>
                    </div>
                </div>

                {/* Decryption Section */}
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h3 className="card-title">Retrieve and Decrypt File</h3>
                            <p className="card-text">Retrieve a stored encrypted file and decrypt it using the AES key.</p>
                            <FileDecryptor />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
