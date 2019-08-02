//take the inputs from the menus from front end

// //search through the options in the API and results options

var tempProductType = "";
var tempProductCat = "";
var tempBrandMenu = "";
var tempMaxPrice = 500;
var tempMinRating = 0;
var tempMinPrice = 1;
var tempMaxRating = 5;
var tempProductTag = "";
var tempPT =[];

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
    tempProductType = tempPT.toLowerCase();
    console.log(tempProductType);
    return tempProductType;
  });

$(".productCategoryMenuClass a").on("click", function pushToProductCategory() {
    var tempPC = $(this).text();
    tempProductCat = tempPC.toLowerCase();
    console.log(tempProductCat);
    return tempProductCat;
  });

  $(".brandMenuClass a").on("click", function pushToBrandMenuClass() {
    var tempBMC = $(this).text();
    tempBrandMenu = tempBMC.toLowerCase();
    console.log(tempBrandMenu);
    return tempBrandMenu;
  });

  $('example-getting-started').on('change', function(e, params) {
    alert(e.target.value); // OR
    alert(this.value); // OR
    alert(params.selected); 
});

  $("#submitMakeup").on("click", function () {
    $("#MakeupDiv").empty();
    tempMinPrice = document.getElementById("minPrice").value;
    tempMaxPrice = document.getElementById("maxPrice").value;
    tempMinRating = document.getElementById("minRating").value;
    tempMaxRating = document.getElementById("maxRating").value;

    console.log(tempMinPrice);
    console.log(tempMaxPrice);
    console.log(tempMinRating);
    console.log(tempMaxRating);
    console.log(queryURL);

    var queryURL = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=" + tempProductType + "&product_category=" + tempProductCat + "&brand=" + tempBrandMenu + "&price_less_than=" + tempMaxPrice;

    $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {
      console.log(response);

        for (var i = 0; i < response.length; i++ ) {
          var AppendImage = $("<img>");
          AppendImage.attr("src", response[i].image_link);
          AppendImage.addClass("clickHere");
          AppendImage.addClass("urlImage");
          console.log(AppendImage);
          $("#MakeupDiv").prepend(AppendImage)
        }

        // $(document).on('click', '.clickHere', function () {
        //   var bringTobuy = $("<a>");
        // }

  });
  });

  $(document).ready(function() {
    $('#getting-started').multiselect();
});

function ARRtoString (arr) {
  var x = arr.toString();
  var y = x.replace(/ /g, "+");
  var z = y.toLowerCase();
  console.log(z);
  return z;
}
