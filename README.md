# WhatsApp clone:

### Intro
I built this clone to apply my MERN stack and firebase knowledge, We also used server-side rendering concept in this project. Feel free to explore. 

### Details 
We used nextJs. we will introduce and explore nextJs at the same time.
Pages directory - is for the rout pages. dont create any component file there. 
components directory will be here for components files.


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
* Get the user from the authentication of the firestore and then get an email of the current user from it.
* While creating a chat make sure, the email is valid and input email is not equal to the current login user.
* And also check if the chat already exists.
#### Utility function
* We will use a utility function for recipient emails. it will pass an array of emails and array of those who logged in
#### Using Route
* In Next.js we can use useRoute() hook for a new stack of page or a new router. we use this router in order to open a new page for a new chat
* Inside the pages each file represents a route. we used chat directory to use wildcard for the ids.[id].js
#### Server Side Rendering
* As you can see we have used dynamic Routes --- we created Pages/chat/[id].js. this is dynamic route, for more infos go here -> https://nextjs.org/docs/basic-features/pages
* Our login page is static side generation. in simple words it means our server generated the page and cache it and when a user request it, the server renders it immediately without any calculation.
* Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.

    * Static Generation (Recommended): The HTML is generated at build time and will be reused on each request.
    * Server-side Rendering: The HTML is generated on each request.

- Importantly, Next.js lets you choose which pre-rendering form you'd like to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

















	
