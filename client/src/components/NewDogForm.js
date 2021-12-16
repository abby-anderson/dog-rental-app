import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewDogForm ({currentUser}) {
    const history = useHistory();
    const [newDogFormData, setNewDogFormData] = useState({
        name: '',
        age: '',
        breed: '',
        size: '',
        color: '',
        image: '',
        gender: '',
        likes: '',
        owner_id: currentUser ? currentUser.id : null,
        location: '',
        upvotes: 0
    });

    function handleChange(event) {
        let value = event.target.value;

        if (event.target.name === 'age') {
            value = parseInt(value);
        }

        setNewDogFormData({
            ...newDogFormData,
            [event.target.name]: value
        });
    }

    function handleSubmit (event) {
        event.preventDefault();

        fetch('/api/dogs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDogFormData)
        })
        .then(response => {
            if (response.ok) {
                response.json().then(data => {
                    history.push(`/dogs_for_rent/${data.id}`)
                })
            }
        })
    }

    return (
        <div className="new-dog-form">
            <form onSubmit={handleSubmit} >
                <label>Name</label>
                <input type="text" name="name" value={newDogFormData.name} onChange={handleChange} /> <br />

                <label>Age</label>
                <input type="text" name="age" value={newDogFormData.age} onChange={handleChange} /> <br />

                <label>Breed</label>
                <input type="text" name="breed" value={newDogFormData.breed} onChange={handleChange} /> <br />
                
                <label>Size</label>
                <input type="text" name="size" value={newDogFormData.size} onChange={handleChange} /> <br />
                
                <label>Color</label>
                <input type="text" name="color" value={newDogFormData.color} onChange={handleChange} /> <br />
                
                <label>Image</label>
                <input type="url" name="image" value={newDogFormData.image} onChange={handleChange} /> <br />

                <label>Gender</label>
                <input type="text" name="gender" value={newDogFormData.gender} onChange={handleChange} /> <br />
                
                <label>Likes</label>
                <input type="text" name="likes" value={newDogFormData.likes} onChange={handleChange} placeholder="E.g. going on walks, playing at the dog park, etc" /> <br />
                
                <label>Location</label>
                <input type="text" name="location" value={newDogFormData.location} onChange={handleChange} /> <br />

                <input type="submit" value="Add your dog!" />
            </form>
        </div>
    )
}

export default NewDogForm;