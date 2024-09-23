import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faLock, faKey } from '@fortawesome/free-solid-svg-icons';

const FileEncryptor = () => {
    const [file, setFile] = useState(null);
    const [aesKey, setAesKey] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleEncryptAndStore = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:5000/encrypt_and_store', formData);
            setAesKey(response.data.key);
            alert('File encrypted and stored successfully!');
        } catch (error) {
            console.error('Error encrypting and storing file', error);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: '#e9ecef' }}>
            <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <h3 className="text-center mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
                    <FontAwesomeIcon icon={faLock} className="me-2" />
                    File Encryptor
                </h3>
                <div className="form-group mb-3">
                    <label className="form-label">Choose a file to encrypt:</label>
                    <div className="input-group">
                        <span className="input-group-text bg-primary text-white">
                            <FontAwesomeIcon icon={faFileUpload} />
                        </span>
                        <input 
                            type="file" 
                            className="form-control" 
                            onChange={handleFileChange} 
                        />
                    </div>
                </div>
                <button
                    className="btn btn-primary w-100"
                    onClick={handleEncryptAndStore}
                    style={{ transition: 'background-color 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#0069d9'}
                >
                    <FontAwesomeIcon icon={faLock} className="me-2" />
                    Encrypt and Store
                </button>
                {aesKey && (
                    <div className="alert alert-success mt-4 text-center">
                        <FontAwesomeIcon icon={faKey} className="me-2" />
                        AES Key: <strong>{aesKey}</strong>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileEncryptor;
