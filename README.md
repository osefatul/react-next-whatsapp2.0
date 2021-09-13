# WhatsApp clone:

I built this clone using Javasript, react, next, redux, firestor-firebase, authentication-firebase, storage-firebase...

- We used nextJs. we will introduce and explore nextJs at the same time.
- Pages directory - is for the rout pages. dont create any component file there. 
- components directory will be here for components files.


- we will be using styled and Material UI components for css styling.
	* npm install --save styled-components
	* npm install @material-ui/icons


## Create Sidebar
* the chat for every person is a complete component we have to define inside the Sidebar.
* the chat will starts working based on the email address you are giving to it.
* we used email validator to validate the email if it is in correct form.  npm install email-validator
* we used react-firebase-hooks in order to have access to auth, sotorage and firestore.
* for loading better-react-spinkit is used




* Once the user sign in for the first time, I want to capture them and their details. thats where we will use useEffect

### creating chat room in a sidebar
* get the user from the authentication of the firestore and then get an email of the current user from it.
* while creating a chat make sure, the email is valid and input email is not equal to the current login user.
* and also check if the chat already exists.
#### Utility function
* we will use a utility function for recipient emails. it will pass an array of emails and array of those who logged in
#### Using Route
* In Next.js we can use useRoute() hook for a new stack of page or a new router. we use this router in order to open a new page for a new chat
* Inside the pages each file represents a route. we used chat directory to use wildcard for the ids.[id].js






















	
