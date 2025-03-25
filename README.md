# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Node.js version used during development - v22.14.0

## Instructions for starting application after creating a new project in dev mode
1. clone project using
   ```git clone https://github.com/laponovsemen/Traffic_Devils_frontend_testtask.git .```
2. place ```.env``` file in the project root
3. run `pnpm install` in the root directory of the project to install all necessary dependencies
4. run `pnpm run start` - for running application in dev mode

## Instructions for starting application after creating a new project in production mode
1. clone project using
   ```git clone https://github.com/laponovsemen/Traffic_Devils_frontend_testtask.git .```
2. place ```.env``` file in the project root
3. run `pnpm install` in the root directory of the project to install all necessary dependencies
4. run `pnpm run build` - for building production build of application
5. run `pnpm install -g serve` - for installation static server
6. run `serve -s build` - for installation static server

## Important! you need to provide in env's correct urls of Client and Backend due to CORS. host of running Frontend and CLIENT_URL env must be the same, for example: http://localhost:3000

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
