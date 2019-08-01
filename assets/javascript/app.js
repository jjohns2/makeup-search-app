//take the inputs from the menus from front end

//search through the options in the API and results options

var queryURL = "http://makeup-api.herokuapp.com/api/v1/products.json?" + "product_type=" + productType + "&product_category=" + productCategory + "&brand=" + productBrand + "&product_tags=" + productTag + "&price_greater_than=" + priceMin + "&price_less_than=" + priceMax + "&rating_greater_than=" + ratingMin + "&rating_less_than" + ratingMax;
var productType = "";// linked to product type field - product_type
var productCategory = "";// linked to product subtype field - product_category
var productBrand = "";// linked to brand field - brand
var productTag = "";// linked to product tags field - product_tags
var priceMin = 0;// linked to price minimum field - price_greater_than
var priceMax = 500;// linked to price maximum field - price_less_than
var ratingMin = 0;// linked to rating minimum field - rating_greater_than
var ratingMax = 5;// linked to rating maximum field - rating_less_than

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});

    //creating loop to append each gif and rating to DOM


//dynamically display options on the front end

//give the user an option to choose from the options

//once a product is chosen show product information

//give an option to find it in a store near them