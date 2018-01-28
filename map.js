(function () {


var mymap = L.map('mapid').setView([39.828342, -98.579464], 4);


L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);


L.marker([32.7157, -117.1611]).addTo(mymap)
    .bindPopup('Christmas 2017: San Diego')
    .openPopup();

L.marker([43.6532, -79.3832]).addTo(mymap)
    .bindPopup('Summer 2016: Toronto')
    .openPopup();

L.marker([30.282480, -97.735463]).addTo(mymap)
    .bindPopup('Austin, TX: Home. ')
    .openPopup();

}.call(this));