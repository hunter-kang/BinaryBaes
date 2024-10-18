# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Contribution Workflow
Here's a quick guide on how to get started.

Either make a new branch or a fork of this repository. main is a protected branch, so you cannot push to it.
Follow the instructions in "Development Setup" above. If you're on a fork, replace the URL with the fork's URL; if you're on a different branch, check it out using git checkout -b {branch_name}. 

a. For branch naming, you can generally use {component}_{change} to keep track of which branch corresponds to which ticket! For example for implenting a slideshow, I would use slideshow_addingSlides. 

b. For commit messages, it does not need to be detailed- a short, general description of changes made works!
Beep boop away!

Before you push, make sure your app runs with npm start.

Once you're ready, stage and commit your changes with git commit -am {commit_message}.

Push your changes with git push --set-upstream origin {branch_name} to push your branch to the repository, then make a pull request with your changes

# Frontend 

npm start in terminal to see and test frontend

# Backend

npm run dev in terminal to see and test backend. You'll need to do localhost:*insert Port number*

Note: make sure that you add config.js from messages

# Frontend available scripts

In the frontend folder, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Backend available scripts

### `npm run start`
This script runs the index.js file using Node.js. When you execute npm run start, Node.js directly starts the application by loading and executing index.js, which is usually the main entry point of the application.

Use case: Typically used to start the application in a production environment.

### `npm run dev`

This script runs the index.js file using nodemon, a tool that automatically restarts the Node.js application whenever file changes in the directory are detected.

Use case: Commonly used during development, as it saves time by avoiding the need to manually restart the server every time code is modified.
