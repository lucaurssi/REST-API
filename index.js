/*
To test a Rest API call, it's necessary to have a server to send the call to.
To setup a server look at Server.py for more information.

In case Python is not installed the Server could be created using other methods.
As long its following the http protocol it will work.

Its also possible to send requests to public APIs, removing the necessity of making your own.

The code bellow is a simple 'GET', a request to the server to aquire the contents a file.
It is written in the expectation that 'db.json' is in the same folder as the root of the server
*/

HOST = "localhost"
PORT = "8000"
FILE = "db.json"

const url = "http://" + HOST + ':' + PORT + '/';
// url = "http://localhost:8000/"

fetch(url + FILE)
    .then( response => response.json())
    .then( result => console.log(result))
    .catch( error => console.error(error));
 
/*
By openning index.html in your brower, pressing F12
and navigating to your console you will find the contents of db.json
[{"name": "bob"}]

Note: ignore the GET looking for a favicon.ico, its not relevant to this.
*/

// The same GET call can be written in a diferent form:
async function GET_Data(url){
    try {
        const response = await fetch(url);
        if (!response.ok) 
            throw new Error(`Response status: ${response.status}`);
        /* The fetch() function will reject the promise on some errors, 
        but not if the server responds with an error status like 404, 
        so we also check the response status and 'throw' if it is not OK. */

        const result = await response.json();
        console.log(result);

    } catch (error) { 
        console.error(error.message); 
    }
}
GET_Data(url + FILE)


// Bellow a few exemples of other methods in the HTTP protocol

//  POST create or submit data.
async function POST_Data(url) {
    try {
        const response = await fetch(url, {
            // To choose a diferent method, add a 'method' section in the fetch function.
            method: "POST",

            // Inform the server we are sending JSON
            headers: { 'Content-Type': 'application/json' },

            // 'body' contains the data to be sent to the server.
            body: JSON.stringify({ info: "lorem ipson"}),
        })
        if (!response.ok) 
            throw new Error(`Response status: ${response.status}`);

    } 
    catch (error) { console.error(error.message); }
}
// FILE = other_file.json
// POST_Data(url + FILE)
// The server.py in this repo does not support methods other than GET & HEAD.
// Running this function and the functions bellow will result in error.


const data = {
    id: 0, // id inform where to edit, this must be set up in the server side
    name: "Bob"
};

// PUT update or replace data.
async function PUT_Data(url, data) {
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok) 
            throw new Error(`Response status: ${response.status}`);

    } 
    catch (error) { console.error(error.message); }
}
// PUT_Data(url + FILE, data)

// This Put request will open the FILE and edit the json
// changin Gary to Bob



// DELETE removes files.
async function DELETE_Data(url) {
    try {
        const response = await fetch(url, {
            method: "DELETE"
        });

        if (response.ok)
            console.log('Resource deleted successfully');
        else 
            console.error('Failed to delete resource:', response.status);

    } 
    catch (error) { console.error(error.message); }
}
// DELETE_Data(url + "db.json") 
// This would delete the 'db.json' file from the server.
