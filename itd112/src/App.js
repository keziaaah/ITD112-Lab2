import React, { useState } from 'react';
import AddNatData from './components/AddNatData';
import NatDataList from './components/NatDataList';
import UploadCSV from './components/UploadCSV';
import AgeVsNATChart from './components/AgeVsNATChart';  // Import the Age vs NAT chart
import './index.css'; // Import your CSS

// App component - main app that integrates AddNatData, NatDataList, and UploadCSV
const App = () => {
    const [natData, setNatData] = useState([]); // State to store NAT data

    // Function to add new data
    const addData = (data) => {
        setNatData((prevData) => [...prevData, data]);
    };

    // Function to edit existing data
    const editData = (updatedData, index) => {
        setNatData((prevData) => prevData.map((item, i) => i === index ? updatedData : item));
    };

    // Function to delete data
    const deleteData = (index) => {
        setNatData((prevData) => prevData.filter((_, i) => i !== index));
    };

    // Handle CSV upload
    const handleCsvUpload = (csvData) => {
        setNatData(csvData); // Set the parsed CSV data into the state
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center">NAT CRUD Application</h1>

            {/* Form and Upload CSV in the same row */}
            <div className="row mt-4">
                <div className="col-md-6">
                    <AddNatData onAdd={addData} />
                </div>
                <div className="col-md-6">
                    <UploadCSV onCsvUpload={handleCsvUpload} />
                </div>
            </div>

            {/* Display the list of added data below the forms */}
            <div className="row mt-4">
                <div className="col-md-12">
                    <NatDataList 
                        natData={natData} 
                        onEdit={editData} 
                        onDelete={deleteData} 
                    />
                </div>
            </div>

            {/* Display the Age vs NAT chart */}
            <div className="row mt-4">
                <div className="col-md-12">
                    <AgeVsNATChart data={natData} /> {/* Pass the natData to the chart */}
                </div>
            </div>
        </div>
    );
};

export default App;
