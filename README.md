# NC Interview Challenge

This project was built with vite

## Libraries used

- Redux: To keep the state if the application synced with the data in the server, all the members information is stored in the state. About the authentication it was built using the context API. Thanks to redux Thunk we are able to dispatch actions asynchronously to interact with the server and then update the store.

- vite: To build the application, also it was used to set some of the environment variables.

-jwt-decode: The servers sends back useful information such as the name that can be reused in the client, so it was used to decode the incoming token (casually the name in the token is the same as the username, but this is not always the case).

-react-idle-timer: To detect if the user is idle or not, also set a timer to get when the users gets inactive for more than 2 minutes.

## Running the client

In order to build the project you must go to the root of the client project and run

```bash
yarn vite
```

This will deploy the app in the localhost port 3000

## About the project

So basically what we desire is a system to register members in a database, which has some basic information (name, lastName, etc), in order to do this, we need an authentication token that comes from a node server. To get the token a login page was created to simulate an user login, this will send the information of a login form (which has validations to ensure the username and password are required). Once the user is authenticated, the token is stored in the local storage and the authentication context, which exposes the token and some useful functions such as the login and logout methods through its provider, all the logic related to the auth context is in a separate folder inside app/auth. Also a custom hook is exposed from this auth service so it is easier to access the authentication information wherever in the app.\\

In order to create the validation for the forms, a form hook was created from scratch (Of course another approach would be to handle al forms using third party libraries such as formik or react forms). All the code related to this hooks is found in the app/hooks/useForm folder. This implements some basic validations for an specific interface that an input should implement (and actually this logic was abstracted into a custom Input called TextBox), this validations include requiredField, minLength and valid SSN, the validation for each field can be defined ath the moment of the form declaration. This Form is used both in the New Members Form and in the Authentication Form. \\

Another point that the project includes is the use of Redux to keep some sort of state (This can be achieved as well using the context api, but for simplicity I decided to go with ReduxToolkit). The redux state keeps the members information in the store, the is synced with the information from the server, so once we are logged and we moved to the members page, the information is loaded through a useEffect hook that loads the info at the mount time, also an idle timer is set to update the store after 2 min an user goes idle. The store also has a post method with thunk that keeps the store Up to date when creating new members in the db.\\

Regarding to the routing of the project a simple way of protected routes was set, so you can go to home and members page only when you're logged in, otherwise you'll be redirected to the login page, and the login page is accessible only when you are not logged in, otherwise you'll be redirected to home.
