import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faKey, faDownload } from '@fortawesome/free-solid-svg-icons';

const FileDecryptor = () => {
    const [filename, setFilename] = useState('');
    const [aesKey, setAesKey] = useState('');

    const handleRetrieveAndDecrypt = async () => {
        const formData = new FormData();
        formData.append('filename', filename);  // Name of the encrypted file
        formData.append('key', aesKey);  // AES key for decryption

        try {
            const response = await axios.post('http://localhost:5000/get_and_decrypt', formData, { responseType: 'blob' });
            
            // Create a link to download the decrypted file
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename.replace('.enc', ''));  // Set download filename
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error retrieving and decrypting file', error);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: '#f0f2f5' }}>
            <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <h3 className="text-center mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>File Decryptor</h3>
                <div className="form-group mb-3">
                    <div className="input-group">
                        <span className="input-group-text bg-primary text-white">
                            <FontAwesomeIcon icon={faFile} />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter encrypted filename"
                            value={filename}
                            onChange={(e) => setFilename(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group mb-4">
                    <div className="input-group">
                        <span className="input-group-text bg-primary text-white">
                            <FontAwesomeIcon icon={faKey} />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter AES key"
                            value={aesKey}
                            onChange={(e) => setAesKey(e.target.value)}
                        />
                    </div>
                </div>
                <button 
                    className="btn btn-primary w-100"
                    onClick={handleRetrieveAndDecrypt}
                    style={{ transition: 'background-color 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#0069d9'}
                >
                    <FontAwesomeIcon icon={faDownload} className="me-2" />
                    Retrieve and Decrypt
                </button>
            </div>
        </div>
    );
};

export default FileDecryptor;
