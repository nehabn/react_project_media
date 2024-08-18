# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



**Options for Data Fetching in Redux Toolkit**

1. Async Thunk Functions : use this to handle users
2. Redux Toolkit Query : use this to handle albums and photos

**Do not make requests in reducers**
1. reducers should always be 100% synchronous
2. reducers should onlu operate on their arguments - no outside variables.

**Adding state for data loading**
1. Showing a loading msg while we are making the request
2. When we get our data, hide the loading msg, show list of users
3. if an error occurs suring request, show an error msg.

- 3 pieces of state
1. isLoading: boolean
2. data: Array of objects
3. error: null || error object

Async Thunk diagram
- automaticallu dispatches actios during data loading.
- action type : *Pending* wich means we are in the process of fetching data.
- redux store does its work

after the request is successful
- async gives another action type: *fulfilled* which means fetched data successfully.
- then flow into all the reducers and specify the data update.

if the request fails
- action type: *rejected* means that an error occured during the request.

steps to create a async thunk function
1. create a new file for your thunk. name it after the purpose of the request
2. create the thunk. give it a base type that describes the purpose of the request
3. in the thunk, make the request, return the data that you want to use in the reducer
4. in the slice, add extra reducers, watching for action types made by the thunk
5. export the thunk from the store/index.js fle
6. when a user does something, dispatch, the thunk function to run it.

**only to be used during development stage to test out the loadin process**
instead of changing the throttle to slow 3G in the inspection tab we can give some pause in our data fetching process.