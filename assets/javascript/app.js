//Variables for all the Things - JJ
var tempProductType = "";
var tempProductCat = "";
var tempBrandMenu = "";
var tempMaxPrice = 500;
var tempMinRating = 0;
var tempMinPrice = 1;
var tempMaxRating = 5;
var tempProductTag = "";
var tempPT = [];

//taking Product Type Input and formatting to Query - JJ
//Changing Button Text to What Is Selected - JJ
$(".productTypeMenuClass a").on("click", function pushToProductType() {
  var tempPMT = $(this).text();
  tempProductType = tempPMT.toLowerCase();
  console.log(tempProductType);
  document.getElementById("productTypeButton").textContent = tempPMT;
  return tempProductType;
});

//taking Product Category Input and formatting to Query - JJ
//Changing Button Text to What Is Selected - JJ
$(".productCategoryMenuClass a").on("click", function pushToProductCategory() {
  var tempPC = $(this).text();
  tempProductCat = tempPC.toLowerCase();
  console.log(tempProductCat);
  document.getElementById("productCategoryButton").textContent = tempPC;
  return tempProductCat;
});

//taking Brand Input and formatting to Query - JJ
//Changing Button Text to What Is Selected - JJ
$(".brandMenuClass a").on("click", function pushToBrandMenuClass() {
  var tempBMC = $(this).text();
  tempBrandMenu = tempBMC.toLowerCase();
  console.log(tempBrandMenu);
  var uptempBMC = tempBMC.charAt(0).toUpperCase() + tempBMC.slice(1)
  document.getElementById("brandButton").textContent = uptempBMC;
  return tempBrandMenu;
});

$('#getting-started').multiselect({
  onChange: function() {
      console.log($('#getting-started').val());
      var tags = $('#getting-started').val();
      console.log(tags);
      tempProductTag = ARRtoString(tags); 
      console.log(tempProductTag);
      return tempProductTag;
    }
  });

  //for Product Tag when it works - JJ
function ARRtoString(arr) {
  var x = arr.toString();
  var y = x.replace(/ /g, "+");
  var z = y.toLowerCase();
  //tempProductTag = z;
  return z;
}

//AJAX Call
//Taking Input - JJ
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
  console.log(tempProductTag);


  var queryURL = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=" + tempProductType + "&product_category=" + tempProductCat + "&brand=" + tempBrandMenu + "&product_tags" + tempProductTag + "&price_less_than=" + tempMaxPrice;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response);
    
    for (var i = 0; i < response.length; i++) {
      var AppendImage = $("<img>");
      AppendImage.attr("src", response[i].image_link);
      AppendImage.attr("link", response[i].product_link);
      AppendImage.addClass("clickHere");
      AppendImage.addClass("urlImage");
      $("#MakeupDiv").prepend(AppendImage)
    }

    if (response.length === 0) {
      $("#MakeupDiv").prepend("Sorry, no results found!")
    }
  });
  });

//function to allow the drop-down multiselect to work - JJ
$(document).ready(function () {
  $('#getting-started').multiselect();
});

//when an image is clicked a new tab where you can buy the product appears - JJ
$(document).on('click', '.clickHere', function () {
  var state = $(this).attr("link");
  window.open(state);
});
