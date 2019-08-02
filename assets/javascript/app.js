//take the inputs from the menus from front end

//search through the options in the API and results options

// test query - var queryURL = "http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan&product_type=blush&brand=pacifica&product_category=powder"
var productType = "";// linked to product type field - product_type
var productCategory = "";// linked to product subtype field - product_category
var productBrand = "";// linked to brand field - brand
var productTag = "";// linked to product tags field - product_tags
var priceMin = "";// linked to price minimum field - price_greater_than
var priceMax = "";// linked to price maximum field - price_less_than
var ratingMin = "";// linked to rating minimum field - rating_greater_than
var ratingMax = "";// linked to rating maximum field - rating_less_than
var queryURL = "http://makeup-api.herokuapp.com/api/v1/products.json?";
//  + "&product_category=" + productCategory + "&brand=" + productBrand + "&product_tags=" + productTag + "&price_greater_than=" + priceMin + "&price_less_than=" + priceMax + "&rating_greater_than=" + ratingMin + "&rating_less_than" + ratingMax;
// var typequeryURL = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush"
// var brandqueryURL = "http://makeup-api.herokuapp.com/api/v1/products.json?" + "brand=" 

// ===========================

var tempProductType = "";
var tempProductCat = "";
var tempBrandMenu = "";
var tempMaxPrice = 500;
var tempMinRating = 0;
var tempMinPrice = 1;
var tempMaxRating = 5;
var tempProductTag = "";
var tempPT = [];

//var queryURL = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=" + tempProductType + "&product_category=" + tempProductCat + "&brand=" + tempBrandMenu + "&price_greater_than=" + tempMinPrice + "&price_less_than=" + tempMaxPrice +"&rating_greater_than=" + tempMinRating + "&rating_less_than=" + tempMaxRating;
// var productType = "";// linked to product type field - product_type
// var productCategory = "";// linked to product subtype field - product_category
// var productBrand = "";// linked to brand field - brand
// var productTag = "";// linked to product tags field - product_tags
// var priceMin = 0;// linked to price minimum field - price_greater_than
// var priceMax = 500;// linked to price maximum field - price_less_than
// var ratingMin = 0;// linked to rating minimum field - rating_greater_than
// var ratingMax = 5;// linked to rating maximum field - rating_less_than



$(".productTypeMenuClass a").on("click", function pushToProductType() {
    var tempPT = $(this).text();
    productType = tempPT.toLowerCase();
    console.log("Product Type", productType);
    // return productType;
    queryURL = queryURL + "product_type=" + productType;

    // ===========================

    // Loop through the array of objects, targeting each relevant item for the search query

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("First Call", response); 
        productBrand = response[1].brand; // this will be replaced with the DYNAMICALLY GENERATED user input
        queryURL = queryURL + "&brand=" + productBrand;
        // return productBrand
        // return queryURL

    });
    // return productBrand
    // return queryURL
});



// ===============

// $(".productCategoryMenuClass a").on("click", function pushToProductType() {
//     console.log("End Log", queryURL);    

// });

// ===============

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     productCategory = response[0].category; // this will be replaced with the DYNAMICALLY GENERATED user input
//     console.log("Second Call", response);
//     queryURL = queryURL + "&product_category=" + productCategory;
// });

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     productTag = response[0].tag_list; // this will be replaced with the DYNAMICALLY GENERATED user input
//     console.log("Third Call", response);
//     queryURL = queryURL + "&product_tags=" + productTag;
// });

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {

//     console.log("Fourth Call", response[0].product_api_url);
// });



// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(productType);
//     console.log(productCategory);
//     console.log(productBrand);
//     console.log(productTag);
//     console.log(priceMin);
//     console.log(priceMax);
//     console.log(ratingMin);
//     console.log(ratingMax);
//     console.log(queryURL);
//     console.log(response);
// });

//dynamically display options on the front end

//give the user an option to choose from the options

//once a product is chosen show product information

//give an option to find it in a store near them