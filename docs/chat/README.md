# Chat Sites

You're each going to make your own chat site that will communicate back to a central database that I have set up. That way each person is able to chat with everyone else, but from their own website.

You can see the live version of this example [here](http://lminsky.github.io/Web-Development/chat/).

Here are the steps to get started:
1. Download the [chat.zip file here](https://github.com/lminsky/Web-Development/raw/master/docs/chat/chat.zip).
1. Move chat.zip from your downloads folder into your GitHub repository folder.
1. Un-zip chat.zip by double clicking on it.

The chat site uses Firebase Authentication which must run from a server (you can't just double click the index.html file—well you can, go ahead and try it to see what error you get in the console.

To run it off a local server:
1. Open Terminal
1. Navigate to the newly created chat folder using the 'cd' command
  1. for instance, on my computer I would say `cd /Users/lminsky/Documents/GitHub/WebDev/chat` but yours will be different
1. You can also type 'cd ' and then drag the chat folder into your terminal window and it will auto fill the file path
1. Now type `python -m SimpleHTTPServer`
1. You should see a message saying _Serving HTTP on 0.0.0.0 port 8000 ..._
1. You can see the site by opening your browser and going to: `localhost:8000`
  1. The first time you load the page you'll need to allow popups. Check in the URL bar to see if there's a notification about them being blocked.

You can also push it to GitHub and run it off of GitHub Pages, but I'll need to enable your individual site in the database, so just give me a heads up before you try that.

You should start by looking through the **index.html** and **script.js** to get an understanding of what's already there and what you'll need to change.

On line 2 you'll see `login(start, recieveMessage);`. Don't change that. It handles logging in (maybe obvious?) and then tells the site what to do when you are logged in and any time you receive a new message. 

On line 5 is `function start(user) {`. This is the function that will run immediately after you login. You can see that it receives a variable "user" which contains some user data which you don't need to do anything with, but is there if you want it. In that function I've added an event listener to a button. Don't feel obligated to keep that, you'll probably want to change things up for your site.

On line 12 is `function recieveMessage(message) {`. This is the function that runs everytime a new message is added to the database. You can see that a variable _message_ is passed in. _message_ is an object that will contain a few properties such as the text of the message, the sender, and its timestamp. What you choose to do with that information is up to you.

Finally, on line 17 is `function send() {`. The important thing here is actually the `sendMessage()` function inside it. `sendMessage()` takes a string as an argument (e.g. `sendMessage("Hello World")`) and communicates with the server. You can change how this works on your page. In this example every time the button is pressed it sends "Hello World" to the server.
