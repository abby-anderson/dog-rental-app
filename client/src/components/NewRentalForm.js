import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function NewRentalForm ({currentUser}) {
    const history = useHistory();
    const params = useParams();
    const [selectedDog,setSelectedDog] = useState(null);
    
    const [newRentalFormData, setNewRentalFormData] = useState({
        dog_id: parseInt(params.id),
        user_id: currentUser ? currentUser.id : null,
        start_date: "",
        end_date: "",
        status: "Pending"
    })
    
    useEffect(()=>{
        fetch(`/api/dogs/${params.id}`)
        .then(response => response.json())
        .then(data => {
            setSelectedDog(data)
        })
    }, [params.id])
    
    
    function handleChange (event) {
        setNewRentalFormData({
            ...newRentalFormData, [event.target.name]: event.target.value
        })
    }
    
    function handleSubmit (event) {
        event.preventDefault();
        
        // fetch POST rentals#create
        fetch('/api/rentals', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRentalFormData)
        })
        .then(response => {
            if (response.ok) {
                response.json().then(data => {
                    history.push(`/dogs_for_rent/${params.id}`)
                })
            }
        })
    }

    if (!selectedDog) {
        return <h3>Loading...</h3>
    }

    return (
        <form onSubmit={handleSubmit} className="new-rental-form">
            <label>You're requesting {selectedDog.name}</label> <br />

            <label>Start Date:</label>
            <input type='date' name="start_date" value={newRentalFormData.start_date} onChange={handleChange}/> <br />

            <label>End Date:</label>
            <input type='date' name="end_date" value={newRentalFormData.end_date} onChange={handleChange}/> <br />
            
            <input type='submit' />
        </form>
    )
}

export default NewRentalForm;