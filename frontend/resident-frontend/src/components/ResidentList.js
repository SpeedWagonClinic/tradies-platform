import React, { useState, useEffect } from 'react';

function ResidentList({ onEdit, onDelete, residents }) {
    return (
        <div className="mt-4">
            <h2 className="text-center">Residents List</h2>
            <ul className="list-group">
                {residents.map(resident => (
                    <li key={resident.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{resident.name} - {resident.email} - {resident.address}</span>
                        <div>
                            <button className="btn btn-sm btn-outline-primary me-2" onClick={() => onEdit(resident)}>Edit</button>
                            <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(resident.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ResidentList;
