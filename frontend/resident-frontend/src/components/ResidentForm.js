import React, { useState, useEffect } from 'react';

function ResidentForm({ resident, onClose, onSubmit }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        if (resident) {
            setName(resident.name);
            setEmail(resident.email);
            setAddress(resident.address);
        }
    }, [resident]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedResident = { name, email, address };

        const requestOptions = {
            method: resident ? 'PUT' : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedResident),
        };

        const url = resident
            ? `http://localhost:8080/api/residents/${resident.id}`
            : 'http://localhost:8080/api/residents';

        try {
            const response = await fetch(url, requestOptions);

            if (!response.ok) {
                throw new Error(`Failed to save resident: ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Resident saved:', data);

            setName('');
            setEmail('');
            setAddress('');
            onSubmit(); 
            onClose();  
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to save resident. Please try again.');
        }
    };

    return (
        <div className="card mt-4">
            <div className="card-body">
                <h2 className="card-title">{resident ? 'Edit Resident' : 'Add New Resident'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            className="form-control"
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="form-control"
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address:</label>
                        <input 
                            type="text" 
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)} 
                            className="form-control"
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-success me-2">
                        {resident ? 'Update Resident' : 'Add Resident'}
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default ResidentForm;
