# rööms
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

<a href="https://rooms-3226fb27d847.herokuapp.com/login">rööms</a> is a real-time chat application crafted with Node.js, Express, MySQL, and utilizes socket.io to manage the live communication between users and Heroku's server. Users can create individual login credentials which is associated with a personalized profile. The platform allows users to seamlessly join or create chat rooms using unique randomized codes. Share the your rooms' code with friends and begin conversing!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Future Development](#future-development)
- [How To Contribute](#how-to-contribute)
- [Creators](#creators)
- [Credits](#credits)
- [License](#license)

## Installation

No installation necessary!

## Usage

![Login/Sign Up Screenshot]()
<br>

#### Account Creation and Homepage
Begin by creating an account. Upon logging in, users are redirected to the homepage with the option to either **Create a Room** or **Join a Room**. On the left-hand side, a hamburger menu provides access to room lists, user profiles, and a logout button.
<br>
![Homepage Screenshot]()

#### Creating a Room
Select **Create a Room** from the homepage to navigate to the /create-room page. Here, enter a room name and click **Create Room**. After creation, users are redirected to the room page, displaying the room name with it's corresponding code. Messages can be entered in the text box, and as participants join, their names are announced in the chat box. 
<br>
![Create Room Screenshot]()
<br>
![Room Example Screenshot]()

#### Joining a Room
Select **Join a Room** on the homepage to access the /join-room page. Whether this a room you've created or a friend has shared a room code with you, just enter the code and click **Join Room**.
<br>
![Join Room Screenshot]()

#### User Profile
The profile page displays the logged-in user's name and email. To make changes, click the "Update Profile" button.
<br>
![Profile Example Screenshot]()

**Mobile View**
<br>
![Homepage Mobile View Screenshot]()
<br>
![Room Example Mobile View Screenshot]()

## Features

- Secure user data and profile management
- Unique room codes for each chat room
- Hamburger menu for easy navigation

insert demo video

## Future Development:

**Potential Features - Coming Soon**
- Room time limits
- Forgot password/user link
- Integration of Giphy
- Tic-tac-toe mini-game within chat rooms
- Different colored text bubble options
- Option to generate a randomized room name (modifiable by admin)
- Enhanced profile page with photos and status/bio
- User status indicators

## How to Contribute 

If you are to come across any problems while using <a href="">rööms</a>, feel free to open a new issue or submit a pull request through this repository. Your feedback and contributions are welcomed.

Please don't hesitate to reach out regarding any concerns, propose improvements, or share suggestions. The rööms team looks forward to collaborating with you to enhance our application.

## Creators

- **Dakota Blanchard** <a href="https://github.com/dakotablanchard">GitHub Portfolio</a>
- **Remi Goddu** <a href="https://github.com/rgoddu">GitHub Portfolio</a>
- **Samantha Rose** <a href="https://github.com/samanthashleyrose">GitHub Portfolio</a>
- **Will Gillespie** <a href="https://github.com/CharlesWGillespie">GitHub Portfolio</a>

### Front-end Development
Sam and Will collaborated on the creation of the handlebars files and corresponding CSS files. With an understanding of the needed functionality for the site, they were able to structure the handlebars appropriately to ensure smooth communication between front-end and back-end systems.

### Back-end Functionality
Dakota and Remi utilized their strong knowledge of JavaScript, Node.js, and MySQL to write the necessary routes for the platform, ensuring proper functionality aligned with user intentions.

### Summary
All this to say, by dividing into front-end and back-end teams we effectively managed our time, balancing design development and functionality. This approach facilitated seamless communication between front-end and back-end systems, contributing to the success of our project.

## Credits

#### Knowledge Assitance From:
<li>Lee Warrick <a href="https://leewarrick.com/">Personal Portfolio</a></li>
<li>Mia Ciasullo <a href="https://github.com/miacias">GitHub Portfolio</a></li>

#### Technologies Used:
<li><a href="https://chat.openai.com/">ChatGPT</a></li>
<li><a href="https://nodejs.org/en/">Node.js</a></li>
<li><a href="https://www.mysql.com/">MySQL</a></li>
<li><a href="https://heroku.com">Heroku</a></li>
<li><a href="https://insomnia.rest/download">Insomnia</a></li>
<li><a href="https://sequelize.org/">Sequelize</a></li>
<li><a href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap">Google Fonts</a></li>
<li><a href="https://www.npmjs.com/package/bcrypt">NPM - bcrypt</a></li>
<li><a href="https://www.npmjs.com/package/express">NPM - express</a></li>

#### Documentation Used:
<li><a href="https://socket.io/docs/v4/">Socket.io</a></li>
<li><a href="https://excalidraw.com/#room=36ba08fdaadfa2fb3590,SoUZJdBk8L88Ld1oL3mAlg">Excalidraw</a></li>
<li><a href="https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit#slide=id.p">Presentation Template</a></li>

#### View our presentation here:
<li><a href="https://docs.google.com/presentation/d/1hDj0UxF-PeC_Pmg_7C7_-xHefFZZGJbCHlQ6SRxgUUs/edit#slide=id.p">rööms Google Slides Presentation</a></li>

## License

This project is licensed under the <a href="https://opensource.org/licenses/MIT">MIT LICENSE</a> - see the [LICENSE](./LICENSE) file for details.