# CARPICTURE-GENERATOR

This is a simple web application that allows you to generate random car pictures using API

function fetchAndDisplayRandomCarPicture() 
    This function  it's responsible for fetching and displaying a random car picture when called.

 fetch(apiUrl) 
    This initiates a network request to the specified URL 
    
    .then((response) 
    This is a Promise chain. It specifies what to do when the response is received from the API. 

 .then((data)
    If the response is okay, this block processes the data in the response. 

 const newCarPicture = document.createElement("img");
   - This creates a new `img` element using `document.createElement.

 container.appendChild(newCarPicture);
     Finally, it appends the newly fetched car picture to the `container`, replacing any previous picture if it existed.

