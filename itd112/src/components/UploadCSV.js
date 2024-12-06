// src/components/UploadCSV.js
import React, { useState } from 'react';
import Papa from 'papaparse';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import '../index.css'; // Corrected path assuming index.css is in the src folder


// UploadCSV component - uploads CSV file and saves data to Firebase
const UploadCSV = ({ onCsvUpload }) => {
    const [csvData, setCsvData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'text/csv') {
            setError(''); // Clear previous errors
            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: (result) => {
                    setCsvData(result.data);
                },
            });
        } else {
            setError('Please upload a valid CSV file.');
        }
    };

    const handleUploadToFirebase = async () => {
        if (csvData.length === 0) {
            setError('No data to upload.');
            return;
        }
        setIsLoading(true);
        setSuccess('');
        setError('');
        try {
            for (const row of csvData) {
                await addDoc(collection(db, 'natData'), row);
            }
            setSuccess('CSV data uploaded successfully!');
            setCsvData([]); // Clear data after upload
            onCsvUpload(csvData); // Send data to parent component
        } catch (error) {
            console.error('Error uploading CSV data:', error);
            setError('Error uploading data to Firebase. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Upload CSV</h2>
            <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="form-control mb-3"
            />
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            {csvData.length > 0 && (
                <>
                    <h4>CSV Preview (First 5 Rows)</h4>
                    <table className="table table-sm table-bordered mb-3">
                        <thead>
                            <tr>
                                {Object.keys(csvData[0]).map((key) => (
                                    <th key={key}>{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {csvData.slice(0, 5).map((row, index) => (
                                <tr key={index}>
                                    {Object.values(row).map((value, i) => (
                                        <td key={i}>{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button
                        className="btn btn-primary"
                        onClick={handleUploadToFirebase}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Uploading...' : 'Upload to Firebase'}
                    </button>
                </>
            )}
        </div>
    );
};

export default UploadCSV;
