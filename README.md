
# Repository Contents

This repository contains 4 files:
- JSON file containg a simple json expression
- html file used for the purpose of executing the js in the browser console (F12)
- javaScript file containing 4 HTTP protocols; GET, POST, PUT and DELETE
- Python file to create a testing HTTP server (Only functional for GET and HEAD calls, as creating a full HTTP server in python would take enough effort to deserve its own repository, which is not the goal since there's easier ways to make a HTTP Server such as using Node.js)


# Introduction

REST is a set of architectural constraints, not a protocol or a standard. API developers can implement REST in a variety of ways.

When a client request is made via a RESTful API, it transfers a representation of the state of the resource to the requester or endpoint. This information, or representation, is delivered in one of several formats via HTTP: JSON (Javascript Object Notation), HTML, XLT, Python, PHP, or plain text. JSON is the most generally popular file format to use because, despite its name, it’s language-agnostic, as well as readable by both humans and machines. 

Something else to keep in mind: Headers and parameters are also important in the HTTP methods of a RESTful API HTTP request, as they contain important identifier information as to the request's metadata, authorization, uniform resource identifier (URI), caching, cookies, and more. There are request headers and response headers, each with their own HTTP connection information and status codes.

 - Client-server architecture
 - Stateless
 - Cached
 - Uniform interface design
 - Layered system
 - Code-on-demand (optional)



---

### Client-Server Architecture

A client-server architecture made up of clients, servers, and resources, with requests managed through HTTP.
This includes the protocols such as GET, POST, PUT & DELETE.

### Stateless

Statelessness implies that between sessions of API invocation, the server that hosts the program doesn’t need to ‘remember’ or hold any information between sessions to perform the appropriate action.

### Cached

Cacheable data that streamlines client-server interactions, reducing unecessary trafic.

### Uniform Interface Design

A uniform interface between components so that information is transferred in a standard form. This requires that:

- Resources requested are identifiable and separate from the representations sent to the client.

- Resources can be manipulated by the client via the representation they receive because the representation contains enough information to do so.

- Self-descriptive messages returned to the client have enough information to describe how the client should process it.

- Hypertext/hypermedia is available, meaning that after accessing a resource the client should be able to use hyperlinks to find all other currently available actions they can take.

### Layered system

A layered system that organizes each type of server (those responsible for security, load-balancing, etc.) involved the retrieval of requested information into hierarchies, invisible to the client.
This way neither the client nor the server can know if they are talking directly or with an program in the middle.

### Code on demand (Optional)

Normaly static resources are sent with the API; text, files, images, ... ,
but the response could contain executable code such as a mini-app in Java or another compatible language, extending client functionality. 

