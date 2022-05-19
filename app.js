var map = L.map('mapid', {
  scrollWheelZoom: true
});

map.setView([-22.275800
  ,166.458000], 7);

var osm_mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



$( "#test" ).click(function() {
  map.setView([47.70, 10.35], 7);
});
var marker = L.marker([47.70, 10.35], {
  elevation: 260.0,
  title: "Transamerica Pyramid"
}).addTo(map);
marker.bindPopup("This is the Transamerica Pyramid");
