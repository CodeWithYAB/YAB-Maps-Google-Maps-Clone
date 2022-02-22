mapboxgl.accessToken =
  "pk.eyJ1IjoiYW1heXlhdGluIiwiYSI6ImNreWpzNzh5YTFnZmkycHAwenBnb2tyM2kifQ.IABXrTioTKmJeaeS-EByGw"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
    console.log(position)
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([18.5204303, 73.8567437])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}