var map;
var marker;

function renderMap(longitude, latitude, name) {
  if (map) {
    map.remove(); // Remove the existing map if it exists
  }
  var mapOptions = {
    center: [longitude, latitude],
    zoom: 10,
  };
  // Creating a map object
  map = new L.map("map", mapOptions);
  // Creating a Layer object
  var layer = new L.TileLayer(
    "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  );
  // Adding layer to the map
  map.addLayer(layer);
  // Add marker with custom name
  var markerOptions = {
    title: name,
  };
  marker = L.marker([longitude, latitude], markerOptions).addTo(map);
  // Add popup with the marker title
  marker.bindPopup(markerOptions.title).openPopup();
}

document.getElementById("search").addEventListener("click", () => {
  const long = document.getElementById("longitude").value;
  const lat = document.getElementById("latitude").value;
  const name = document.getElementById("address").value;
  renderMap(long, lat, name);
});

renderMap(8.228, 124.2452, "Iligan");
