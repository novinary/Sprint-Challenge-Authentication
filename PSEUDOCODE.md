## Step 1
- Answer self-study questions - done

## Step 2
- Create helper functions + register function inside /config/routes.js - done

## Step 3
Create middleware for authentication using json web tokens + work on login function - done 

## mvp
## implement a React client:
- use create-react-app client to generate a application to server as the client for the Web API. - done
- cd into client folder and run yarn add axios and yarn add react-router-dom - done
- inside the React application add client-side routes and components for login and showing the list of jokes stored in the database. - done
- the /login route should provide a form to gather username and password for the user and make a POST request to the /api/login route on the API. Upon successful login, persist the returned token to the browser's local storage and redirect the user to the /jokes route. - done
- the /jokes route should read the token from local storage and make a GET request to the /api/jokes route on the API attaching the token as the value of the Authorization header. - done
- provide a button to sign out that will remove the token from local storage. - done
- the /register route should provide a form to gather username, password and department for the user and make a POST request to the /api/register route on the API. If the user is created successfully, take the returned token, save it to the browser's local storage and redirect the user to the /users route, where they should see the list of users. - done

## Style the react app - use reactstrap