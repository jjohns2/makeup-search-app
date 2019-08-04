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
      console.log(response);
      var resultsContainerSection = $("<section class = 'results-container'>");
        for (var i = 0; i < response.length; i++ ) {
          var singleResultDiv = $("<div class='result-container'>");
          var AppendImage = $("<img class='result'>");
          AppendImage.attr("src", response[i].image_link);
          AppendImage.attr("link", response[i].product_link);
          AppendImage.addClass("clickHere");
          AppendImage.addClass("urlImage");
          console.log(AppendImage);
          singleResultDiv.prepend(AppendImage);
          resultsContainerSection.prepend(singleResultDiv);
          $("#MakeupDiv").append(resultsContainerSection);
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

//JJ - I am commenting the Google API out as it is causing a plethora of errors and I simply don't understand what is going on
//will need to be fixed before becoming active on master

// var map;
// var service;
// var infowindow;
// var locationField;
// var locationLatLng;
// var locationURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + locationField + "&key=AIzaSyBkx6csSYgVsdKk50-0CHLp3v2RE8d9pQ0"
// $.ajax({
//   url: locationURL,
//   method: "GET"
// }).then(function (response) {
//   console.log(response);

// // https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

// });

// function initialize() {
//   var userLocation = new google.maps.LatLng(locationLatLng);
//   // var userLocation = new google.maps.LatLng(-33.8665433,151.1956316);
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: userLocation,
//     zoom: 15
//   });

//   var request = {
//     location: userLocation,
//     radius: '25',
//     query: chosenBrand + 'cosmetics',
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.textSearch(request, callback);
// }

// initialize();

// function callback(results, status) {

//   function createMarker(places) {
//     var bounds = new google.maps.LatLngBounds();
//     var placesList = document.getElementById('places');

//     for (var i = 0, place; place = places[i]; i++) {
//       var image = {
//         url: place.icon,
//         size: new google.maps.Size(71, 71),
//         origin: new google.maps.Point(0, 0),
//         anchor: new google.maps.Point(17, 34),
//         scaledSize: new google.maps.Size(25, 25)
//       };

//       var marker = new google.maps.Marker({
//         map: map,
//         icon: image,
//         title: place.name,
//         position: place.geometry.location
//       });

//       var li = document.createElement('li');
//       li.textContent = place.name;
//       placesList.appendChild(li);

//       bounds.extend(place.geometry.location);
//     }
//     map.fitBounds(bounds);
//   }

//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       createMarker(results[i]);
//     }
//   }
// }

// function createMarker(places) {
//   var bounds = new google.maps.LatLngBounds();
//   var placesList = document.getElementById('places');

//   for (var i = 0, place; place = places[i]; i++) {
//     var image = {
//       url: place.icon,
//       size: new google.maps.Size(71, 71),
//       origin: new google.maps.Point(0, 0),
//       anchor: new google.maps.Point(17, 34),
//       scaledSize: new google.maps.Size(25, 25)
//     };

//     var marker = new google.maps.Marker({
//       map: map,
//       icon: image,
//       title: place.name,
//       position: place.geometry.location
//     });

//     var li = document.createElement('li');
//     li.textContent = place.name;
//     placesList.appendChild(li);

//     bounds.extend(place.geometry.location);
//   }
//   map.fitBounds(bounds);
// }


//why is there CSS styling in the JS file?
$(document).ready(function(){
  $(".dropdown-toggle").css({ "color": "#212529",
    "background-color": "#ffc107",
    "border-color": "#ffc107"});
    $(".multiselect-selected-text").text('Select Tags');
});