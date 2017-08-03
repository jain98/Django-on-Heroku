$(document).ready(function(){
  displayTime();
});

function displayTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var t = 'AM'
    if (h == 0) {
        h = 12;
    }
    else if (h > 12) {
        h = h - 12;
        t = 'PM';
    }
    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    document.getElementById('clock').innerHTML = h + ':' + m + ':' + s + ' ' + t;
    setTimeout(displayTime, 500);
}

function initMap() {
  var options = {
        center: new google.maps.LatLng(51.503, -0.1276),
        zoom: 10,
    }
    var map = new google.maps.Map(document.getElementById("map"), options);
    var marker = new google.maps.Marker({position: {lat: 51.503, lng: -0.1276}, map: map});
}
