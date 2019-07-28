//take the inputs from the menus from front end

//search through the options in the API and results options

var queryURL = "http://makeup-api.herokuapp.com/api/v1/products.json?" + "product_type=" + productType + "&product_category=" + productCategory + "&brand=" + productBrand + "&product_tags=" + productTag;
//  + "&price_greater_than=" + priceMin + "&price_less_than=" + priceMax + "&rating_greater_than=" + ratingMin + "&rating_less_than" + ratingMax
// var queryURL = "http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan&product_type=blush&brand=e.l.f.&product_category=powder&price_less_than=10"
var productType = "blush";// linked to product type field - product_type
var productCategory = "powder";// linked to product subtype field - product_category
var productBrand = "pacifica";// linked to brand field - brand
var productTag = "Vegan";// linked to product tags field - product_tags
// var priceMin = "";// linked to price minimum field - price_greater_than
// var priceMax = "";// linked to price maximum field - price_less_than
// var ratingMin = "";// linked to rating minimum field - rating_greater_than
// var ratingMax = "";// linked to rating maximum field - rating_less_than

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