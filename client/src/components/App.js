import DogCardContainer from './DogCardContainer';
import { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import UserProfile from "./UserProfile";
import DogDetail from './DogDetail';
import NewRentalForm from './NewRentalForm';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // auto login
  useEffect(() => {
    fetch('/api/me')
    .then(response => {
      if(response.ok) {
        response.json().then(user => setCurrentUser(user))
      }
    })
  }, [])

  return (
    <div>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/dogs_for_rent">
            <DogCardContainer currentUser={currentUser} />
          </Route>

          <Route exact path="/login">
            <Login setCurrentUser={setCurrentUser} />
          </Route>

          <Route exact path="/signup">
            <Signup setCurrentUser={setCurrentUser} />
          </Route>

          <Route exact path="/userprofile">
            <UserProfile currentUser={currentUser} />
          </Route>

          <Route exact path="/dogs_for_rent/:id">
            <DogDetail currentUser={currentUser} />
          </Route>

          <Route exact path="/dogs_for_rent/:id/rentals/new">
            <NewRentalForm currentUser={currentUser} />
          </Route>
          
      </Switch>
    </div>

  );
}

export default App;
