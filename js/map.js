var map;

function initMap() {
    
  var uluru = { lat: 49.226976, lng: 28.408485 };
  
  map = new google.maps.Map(
      document.getElementById("map"), {zoom: 16, center: uluru});    
  var marker = new google.maps.Marker({position: uluru, map: map});
}