import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

function Signup({setCurrentUser}) {
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        location: "",
        phone_number: "",
        username: "",
        password: "",
        password_confirmation: "",
        image_url: ""
    });

    function handleChange (event) {
        setFormData({
            ...formData, [event.target.name]: event.target.value,
        })
    }

    function handleSubmit (event) {
        event.preventDefault();

        fetch('/api/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                response.json().then(data => {
                    console.log('data response after fetch post!', data)
                    setCurrentUser(data)
                    history.push('/dogs_for_rent')
                })
            } else {
                response.json().then(errors => {
                    setErrors(errors.errors)
                })
            }
        })
    }

    return (
        <div>
            <form className="signupForm" onSubmit={handleSubmit}>
                
                <label>Image URL</label>
                <input type="text" name="image_url" onChange={handleChange} value={formData.image_url} /> <br/>

                <label>First Name</label>
                <input type="text" name="first_name" onChange={handleChange} value={formData.first_name} /> <br/>

                <label>Last Name</label>
                <input type="text" name="last_name" onChange={handleChange} value={formData.last_name} /> <br/>

                <label>Location (City, State, Zip)</label>
                <input type="text" name="location" onChange={handleChange} value={formData.location} /> <br/>

                <label>Phone Number</label>
                <input type="text" name="phone_number" onChange={handleChange} value={formData.phone_number} /> <br/>

                <label>Username</label>
                <input type="text" name="username" onChange={handleChange} value={formData.username} /> <br/>

                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} value={formData.password} /> <br/>

                <label>Please type your password again</label>
                <input type="password" name="password_confirmation" onChange={handleChange} value={formData.password_confirmation} /> <br/>

                <input type="submit"/>
            </form>

            {errors.length > 0 ?
                errors.map(error => {
                    return (
                        <div>
                            <Wrapper>
                                <Alert>!</Alert>
                                <Message>
                                    {error}
                                </Message>
                            </Wrapper>
                        </div>
                    );
                })
                : null
            }
        </div> 
    )
}

const Wrapper = styled.div`
    color: red;
    background-color: mistyrose;
    border-radius: 6px;
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 8px;
    margin: 8px 0;
    justify-content: center;
`;

const Alert = styled.div`
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    font-weight: bold;
    display: grid;
    place-content: center;
`;

const Message = styled.p`
    margin: 0;
`;

export default Signup;
