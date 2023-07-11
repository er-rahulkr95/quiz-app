<h1 align="center" id="title">Quiz App - Backend</h1>


<p align="center"><img src="https://socialify.git.ci/er-rahulkr95/quiz-app/image?language=1&logo=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F720%2F0*11eDqY4zA04y2_n6.jpg&name=1&owner=1&pattern=Solid&theme=Light" alt="quiz-app" width="640" height="320" /></p>

# Quiz App - Backend

A simple Quiz Application API's which will allow users to register, log in. Admin can create Create, Edit and Delete a quiz alongwith its questions, share the published quiz link, and view the reports/ result of all the users who attempted the quiz. Particpants can attempts the quiz and view their score card for the quiz's they have attempted.

## <h2>🚀 Demo</h2>

**Backend Deployed Link**

[https://quiz-app-five-teal.vercel.app/](https://quiz-app-five-teal.vercel.app)

## Tech Stack

### Backend Built With
Technologies/Framework/Library used in building the backend of the project:
- Node.js
- Mongoose
- Express
- bcrypt
- jsonwebtoken
- passport + passport-jwt
- joi
- validator
- cors
- dotenv
- winston
- http-status
- helmet
- morgan


### DataBase Used
- MongoDB

## Technical Requirements

- **Backend**: The objective is to create a restful API for a quiz app. For authentication, you can use any third party like autho or cognito if needed.

    - A user (creator)should be able to log in and create multiple quizzes. Questions in the quiz are multiple choice questions with one or more correct answers. User should be able to share the quiz with other.

    - Others (participants)can take the quiz, using the link shared by the creator and will be awarded score based on the results. The creator should be able to view the list of participants and their scores.


- **Database**: Use MongoDB to store user information, quiz's, reports.

- **API**: Develop RESTful APIs to interact between the frontend and the backend.

- **Version Control**: Use Git for version control. Regularly commit your changes with
meaningful commit messages.


## Features

### Backend Features

- Created a public and protected RESTful APIs to interact between the frontend and the backend.

- Capable of handling user authentication and performing CRUD operations for users, quiz's, questions and report/result.

- Users can register for an account using their full name, email address and password. Users can log in using their e-mail.

- User can register using only unique email otherwise error message will appear indicating user is already registered.

- Custom validation using JOI to verify field should not be empty or should not contain only white spaces with no character whenever a record is submitted.

- Used MongoDB to store user information, quiz's created, questions and report/result..

- Used Mongoose query to retrieve information.

- Used bcrypt to hash the password before saving in the data base.

- Used jsonwebtoken and passport for protected routes for handling user authentication.

- Cors for cross origin access of Restful APIs.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Run Locally

Clone the project

```bash
  git clone https://github.com/er-rahulkr95/quiz-app
```

Go to the project directories in different terminals

For Backend 

```bash
  cd backend
```

Install dependencies 

```bash
  npm install
```

Start the server

```bash
  npm run start
```

It will runs the app in the development mode.
Backend will start on http://localhost:3000 to view it in your browser.

# Feedback

If you have any feedback, please reach out to  er.rahulkr95@gmail.com

# License

ISC