/*
	We start our code with an ajax request to fetch the data
	from the json file.
*/
// First i create a new xmlhttp-request object.
let http = new XMLHttpRequest();
// the variable http holds now all methods and properties of the objct.

//  next i prepare the request with the open() method.
http.open('get', 'json/apk.json', true);
// the first argument sets the http method.
// in the second argument we pass the file where our data lives.
// and last the keyword true, sets the request to be async.

// next i will send the request.
http.send();

// Now i have to catch the response.
// i will check the onload eventlistener.
http.onload = function(){
	// Inside the function i need to check the readystate and status properties.
	if(this.readyState == 4 && this.status == 200){
		// if we have a successful response, i have to parse the json data
		// and convert them to a javascript array.
		let products = JSON.parse(this.responseText);

		// next i need an empty variable to add the incoming data.
		let output = "";

		// now i have to loop trough the products, and in every iteration
		// i add an html template to the output variable.
		for(let item of products){
			output += `
 <div class="col-sm-6 col-md-6 col-lg-6 m-0 p-0 bg-light shadow-0 product-hover mt-1" style="max-width: 45em">
      <a href="${item.link}" class="bg-light shadow-0">
        <div class="card shadow-0 bg-light p-0 m-0">
          <div class="card-body bg-light p-1">
            <div class="d-flex justify-content-between p-md-1">
              <div class="d-flex flex-row">
                <div class="align-self-center m-0 p-0">
                  <img class="logo-card me-2" src="${item.image}" alt="${item.alt}" loading="lazy"/>
                </div>
                <div>
                  <h6 class="text-danger fw-bold">${item.title}</h6>
                  <p class="mb-0 fs-8  text-dark">${item.descriptions}</p>
                  <span class="badge rounded-pill fw-bold badge-danger">${item.badge}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
			`;
		}
		/* and last i target the products container and add the data that the
		output variable holds. */
		document.querySelector(".products").innerHTML = output;
	}
} 