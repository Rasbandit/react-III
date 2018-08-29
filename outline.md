# React III

## Moving data over the internet

### What is a Protocol

- The way we move data between computer is through what we call `Protocols`. What does protocol mean?
  - a set of rules or procedures for transmitting data between electronic devices, such as computers. In order for computers to exchange information, there must be a preexisting agreement as to how the information will be structured and how each side will send and receive it.
  - the "protocol" for buying something with a credit card online is you need to provide all the needed information. there is a established system on how you use it and if one character is wrong it wont work.
- There are many different protocols, UDP and TCP for video games, FTP for files, and HTTP for moving data for websites, bluetooth, wifi
- HTTP: Hyper text transfer protocol
- to initiate an HTTP request we do so on a web browser to talk to a server. A server is a computer who's only purpose is to take in requests and then send back information, like a web page or some data.
- The way we specify what server we are talking to by making what is called a URL, `Uniform Resource Locator`
  - the first part of the URL is the Protocol. on our case it is almost always HTTP.
  - the part after the protocol is the domain, or who were talking to, this could also be an ip address.
  - It can also be used to specify specific files.
    - this would be like calling your credit card company and then putting in more prompts to get more specific.
- This is also referred to as an API, or an Application Program Interface. Basically its the means for 2 computers or programs to talk to each other.

### format of an HTTP Request

- When we request information or get information there is also meta data attached to the information, known as headers.
  - these talk about where it came from, who the intended target is and so on.
  - the meat of the request is put onto the body of the request.
- Because the HTTP request doesn't really understand JS we have to send our data using a special format called JSON.
  - Javascript object notation
  - notice the difference between the two formats.
    - only double quotes
    - no var
    - all wrapped in curly braces
    - numbers or strings
    - no trailing commas
  - we can also have an array and pass an array of objects

### Rest

- REpresentational State Transer
- REST is a pattern we use to manipulate data between a server and a client.
- There are 4 major ways we can manipulate data using REST.
  - get
  - post
  - put (update, cuz the u)
  - delete
- These 4 terms are simplified by saying CRUD,
  - create
  - read
  - update
  - delete
- When we make a request to a server one of the headers or meta data about the request is the method, (get, post, put, delete).
- there are a lot of formats the data can be in when we do HTTP requests but in our case we will only get JSON and it will automatically convert it into regular JS objects when it returns.
- If an API has built this feature we could also ask for a specific student from it.

### Synchronous and Asynchronous

- Human definition of synchronous and how its the opposite for computers.
  - it means one thing after another. and only one thing at at time.
- Asynchronous means can do multiple things at a time. A meaning Not.
  - have the students tell each other the definitions of the two.

### Axios

- open up repl and show them how axios works
  - start by showing how you can save an axios request to a variable.
  - it is a promise and if we leave it, it will never be data.
  - throw a .then on it and throw a console.log into it.
  - show them the structure of the data and how the desired info is on the .data property
  - show them the order of what is actually running.
  - saving the promise vs just doing a .then
  - show what a failed looks like with a .catch
- Show the status code and then show them HTTP Cats

### In React

## Life Cycle Methods

- What is the component life cycle.
  - explain the simplistic version of the the methods
    - componentDidMount to ComponentWillUnmount
    - componentDidMount
      - when will this fire?
  - log out the life cycle methods to see when they happen
- jump back to the CDM life cycle method and have them use that to get information from SWAPI and Show it.

## Mini Project

