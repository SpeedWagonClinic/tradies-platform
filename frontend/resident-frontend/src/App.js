import React, { useState, useEffect } from 'react';
import ResidentList from './components/ResidentList';
import ResidentForm from './components/ResidentForm';

function App() {
    const [selectedResident, setSelectedResident] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [residents, setResidents] = useState([]);

    useEffect(() => {
        refreshResidents();
    }, []);

    const refreshResidents = () => {
        fetch('http://localhost:8080/api/residents')
            .then(response => response.json())
            .then(data => setResidents(data))
            .catch(error => console.error('Error fetching residents:', error));
    };

    const handleAddNew = () => {
        setSelectedResident(null);
        setShowForm(true);
    };

    const handleEdit = (resident) => {
        setSelectedResident(resident);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/api/residents/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            refreshResidents();
        })
        .catch(error => console.error('Error deleting resident:', error));
    };

    const handleFormClose = () => {
        setShowForm(false);
        setSelectedResident(null);
    };

    const handleFormSubmit = () => {
        setShowForm(false);
        setSelectedResident(null);
        refreshResidents(); 
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Resident Management System</h1>
            <div className="text-center mb-3">
                <button className="btn btn-primary" onClick={handleAddNew}>
                    Add New Resident
                </button>
            </div>
            <ResidentList residents={residents} onEdit={handleEdit} onDelete={handleDelete} />
            {showForm && (
                <ResidentForm
                    resident={selectedResident}
                    onClose={handleFormClose}
                    onSubmit={handleFormSubmit} 
                />
            )}
        </div>
    );
}

export default App;
