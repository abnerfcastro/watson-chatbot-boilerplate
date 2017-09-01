# Watson Chatbot Boilerplate

This is a simple boilerplate to MVP Chatbot applications using IBM Watson. It uses `Node` and `Express` in the backend to serve files and establish an interface to Watson Conversation API.

It uses the `npm` module `dotend` to load environment variables that are crucial for the application to run.

Create a file named `.env` with the following content:

```
CONVERSATION_URL=https://gateway.watsonplatform.net/conversation/api
CONVERSATION_USERNAME=<Insert here the conversation username>
CONVERSATION_PASSWORD=<Insert here the conversation password>
WORKSPACE_ID=<Insert here the workspace Id>
```

To get the Conversation `username` and `password` you will need to instantiate a Conversation Service on Bluemix.

After that you can run the application with `npm start` - it will automatically install all the modules listed on `package.json`.

Feel free to fork this repository and change it as you see fit.
