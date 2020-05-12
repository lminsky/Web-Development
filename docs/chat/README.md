# Chat Sites

You're each going to make your own chat site that will communicate back to a central database that I have set up. That way each person is able to chat with everyone else, but from their own website.

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
