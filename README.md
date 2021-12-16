# Rent-a-Pup
This website invites dogless dog-lovers like myself to rent a dog for a hike or other excursion, and allows dog-owners to post their dogs for rent. Users are required to sign up and/or log in, where they can start posting their own dogs or renting other dogs, and giving all the dogs upvotes or downvotes. Users may also delete their own dogs from the website when they want to stop renting.

## Architecture
This project was built with a React.js frontend, a Ruby on Rails API, and a PostgreSQL database. It was designed and developed through an exciting collaborative process between myself, Sean Li, and Gabriel George, with whom I studied during my time at Flatiron School. 

## Set up
Start by cloning this repository and navigating to the project folder. 

After cloning, run these commands:
1. `bundle install` - to install backend dependencies
2. `npm install --prefix client` - to install frontend dependencies without cd-ing into the client folder
3. `rails db:create` - we must include this step because of Postgres
4. `rails s` - to start backend server
5. `npm start --prefix client` - to start frontend server without cd-ing into client folder

## Demo
To watch the brief 2-minute demo of this project, please follow this link to my Youtube video:
https://youtu.be/S90PUey9jEU

### Final note
Finally, I want to note that this is a work in progress! I will continue adding and improving features as I level up my skills. Feel free to share any comments or suggestions with me!
