# Restaurant Advisor

This project is the final project for our intro to databases course. It's a React/MongoDB/Node web application that lists restaurants, reviews, and allows an authenticated user to order items.

## Dependencies

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You'll need to have a version of [Node](https://nodejs.org/en/) >= 6.0 to run the project locally.

## Installation

To get started, you'll only need to run a couple of commands.

Just run the following commands from the top-most part of the project directory:

`npm install`
`npm start`

Then you should be all ready to go!

## Structure

The folder structure ...

```
├── client
    └── node_modules
    └── public
        └── index.html
    └── src
        └── components
            └── ...  <- All the UI components for the application, written in React
        └── test
            └── ...  <- Tests for various utilities we've written
        └── styles
            └── ...  <- Basic css stlying for the application (most styling is written in-line with the react components)
        └── index.js <- The entry point for the client side code
        └── registerServiceWorker.js
    └── .gitignore
    └── package.json
├── server
    └── bin
        └── www <- Sets the top-level server configuration for the express app
    └── db
        └── ... <- Contains the js files for db schema, configuration, connections, etc.
    └── app.js <- Entry point for the server-side code (e.g. sets up API endpoints)
    └── package.json

├── README.md
```

## Testing

`npm run test`