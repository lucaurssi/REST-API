# This File purpose is to setup a simple local server for testing purposes only
# I did not think on security or other complex aplications when making this

# Bellow we have a http based python server

import http.server
import socketserver

HOST = "localhost"
PORT = 8000

# The simple handler bellow is the default from http.server 
# Simple_Handler = http.server.SimpleHTTPRequestHandler

# This custom handler was made based on the default http.server
# Changing only the restriction stopping index.js to request files
class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add your custom headers here
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()
    

# Start server and keep it running until you stop the script
with socketserver.TCPServer((HOST, PORT), CustomHandler) as httpd:
    print(f"Serving at '{HOST}' on port '{PORT}' w/ custom handler")
    httpd.serve_forever()

#   The Code above, and the following terminal lines, only acept GET and HEAD protocols



# In case you are not using your browser to run js code,
# you could use a python terminal command to create the same server.

# The diference is in the abscence of the extra header,
# Which fix an error thrown by the browser.

# The python command is as follows:
#   'py -m http.server <options> <port>'

    # Instructions:

# - Open terminal in the folder which will serve as the server's root folder.
# - Write the python line:
#     'py -m http.server'

# PORT 8000 is the default and is always open
# Choosing a PORT that is not open may bring errors

    # To test your server do the following:

# - In the server folder create a dummy file like 'test.txt', containing some text.
# - Open a second terminal.
# - Use the following command: (a GET resquest)
#     curl http://localhost:8000/test.txt
# - Check if the response is the contents of the dummy file