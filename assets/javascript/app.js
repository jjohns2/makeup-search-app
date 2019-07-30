//take the inputs from the menus from front end

//search through the options in the API and results options

//productTag function
//between each selection there needs to be a comma
//empty string if nothing is selected
//no comma if there is only 1

var queryURL = "http://makeup-api.herokuapp.com/api/v1/products.json";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});
