import React from 'react';
import {NavLink} from 'react-router-dom';

const linkStyles = {
    padding: "10px 15px 10px 15px",
    margin: "10px 10px 10px 10px",
    textDecoration: "none",
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: "0px 17px 0px 17px",
};

function NavBar({currentUser, setCurrentUser}) {

    function handleLogout () {
        // fetch DELETE session#destroy
        fetch('/api/logout', {
            method: "DELETE"
        })
        .then(response => {
            if (response.ok){
                setCurrentUser(null);
            }
        })
    }


    return (
        <div className="nav-bar">
            <h1>(❍ᴥ❍ʋ)</h1>

            <NavLink
            to='/'
            exact
            style={linkStyles}
            className="nav-bar-route"
            activeStyle={{
                cursor: 'pointer',
                hover: {
                    color: '#FF0000'
                }
            }}
            >Home</NavLink>


           {!currentUser ? 
           <>

            <NavLink
            to='/login'
            exact
            style={linkStyles}
            className="nav-bar-route"
            activeStyle={{
                cursor: 'pointer'
            }}
            >Login</NavLink>

            <NavLink
            to='/signup'
            exact
            style={linkStyles}
            className="nav-bar-route"
            activeStyle={{
                cursor: 'pointer'
            }}
            >Sign Up</NavLink>

            </>
            :
            <>

            <NavLink
            to='/dogs_for_rent'
            exact
            style={linkStyles}
            className="nav-bar-route"
            activeStyle={{
                cursor: 'pointer'
            }}
            >Rent a Dog</NavLink>

            <NavLink
            to='/userprofile'
            exact
            style={linkStyles}
            className="nav-bar-route"
            activeStyle={{
                cursor: 'pointer'
            }}
            >Profile</NavLink>

            <NavLink to='/'
            exact
            style={linkStyles}
            className="nav-bar-route"
            activeStyle={{
                cursor: 'pointer'
            }}
            onClick={handleLogout}
            >Log Out</NavLink>

            <div className="welcome-name">
                <h2>Welcome, {currentUser.username}!</h2>
            </div>

            </>
            }
        
        </div>          
    )
}

export default NavBar
