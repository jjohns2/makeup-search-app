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

$(".productTypeMenuClass a").on("click", function pushToProductType() {
    var productType = $(this).text().toLowerCase();
    console.log("Product Type", productType);
    queryURL = queryURL + "product_type=" + productType;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("First Call", response);
    });
});

$(".productCategoryMenuClass a").on("click", function pushToProductCategory() {
    var productCategory = $(this).text().toLowerCase();
    console.log(productCategory);
    queryURL = queryURL + "&product_category=" + productCategory;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("Second Call", response);
    });
    return productCategory;
});

$(".brandMenuClass a").on("click", function pushToBrandMenuClass() {
    var productBrand = $(this).text().toLowerCase();
    console.log(productBrand);
    queryURL = queryURL + "&brand=" + productBrand;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("Third Call", response);
    });    
    return productBrand;
});