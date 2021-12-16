import React from 'react';
import {NavLink} from 'react-router-dom';

function DogCard({dog, updateDogVotes}) {

    function handleUpvoteChange (event) {

        if (event.target.name === "downvote-btn") {
            // take the dog.upvotes number
            dog.upvotes --
            // subtract one
            // save in new variable
        } else if (event.target.name === "upvote-btn") {
            // take the dog.upvotes number
            // add one
            // save in new variable
            dog.upvotes ++
        }
        
        // fetch outside the conditional -- we're giving it the upvote # that we just updated
        fetch(`/api/dogs/${dog.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({upvotes: dog.upvotes})
        })
        .then(response => {
            if (response.ok) {
                response.json().then(data => {
                    updateDogVotes(data)
                })
            }
        })
    }
    
    return (
        <div className="card" > 
            <img src={dog.image} alt={dog.name} />
            <h2>{dog.name}</h2>
            <NavLink to={`/dogs_for_rent/${dog.id}`}>Rent me!</NavLink> <br />
            <div>
                <button name="downvote-btn" onClick={handleUpvoteChange}>🦴 (-)</button>
                <button name="upvote-btn" onClick={handleUpvoteChange}>🍖 (+)</button>
                <p>{dog.upvotes} upvotes! 🐾 </p>           
            </div>
        </div>
    )
}

export default DogCard;
