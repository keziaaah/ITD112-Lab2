import React, { useState } from 'react';
import '../index.css'; // Import your CSS

const NatDataList = ({ natData, onEdit, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items per page

    // If the natData is not empty, extract the headers from the first object
    const headers = natData.length > 0 ? Object.keys(natData[0]) : [];

    // Paginate data
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = natData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(natData.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">NAT Data List</h2>

            {natData.length === 0 ? (
                <p className="text-center">No data available</p>
            ) : (
                <>
                    <div className="table-container">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    {headers.map((header, index) => (
                                        <th key={index} className="table-header">{header}</th>
                                    ))}
                                    <th className="table-header">Actions</th> {/* Actions column */}
                                </tr>
                            </thead>
                            <tbody>
                                {currentData.map((data, index) => (
                                    <tr key={index}>
                                        {headers.map((header, idx) => (
                                            <td key={idx}>{data[header]}</td>
                                        ))}
                                        <td>
                                            <button
                                                className="btn btn-warning btn-sm"
                                                onClick={() => onEdit(data, index)} // Edit button
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-danger btn-sm ms-2"
                                                onClick={() => onDelete(index)} // Delete button
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="pagination-container">
                        <button
                            className="btn btn-secondary"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Prev
                        </button>
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                className={`btn btn-secondary mx-1 ${currentPage === index + 1 ? 'active' : ''}`}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            className="btn btn-secondary"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default NatDataList;
