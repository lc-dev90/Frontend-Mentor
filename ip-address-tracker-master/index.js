const ipEl = document.getElementById("ip");
const locationEl = document.getElementById("location");
const timezoneEl = document.getElementById("timezone");
const ispEl = document.getElementById("isp");

const urlIpfy =
  "https://geo.ipify.org/api/v1?apiKey=at_kGXjkm9JZ5ro4oYuwKLFTFQf2rLcr";

const fetchData = async () => {
  const response = await fetch(urlIpfy);
  return await response.json();
};

const appendDataFromIpToDom = async () => {
  const data = await fetchData();

  ipEl.textContent = data.ip;
  locationEl.textContent = `${data.location.city}, ${data.location.region} - ${data.location.country}`;
  timezoneEl.textContent = `UTC: ${data.location.timezone}`;
  ispEl.textContent = data.as.name;
};

const appendMapFromIpToDom = async () => {
  const data = await fetchData();

  var mymap = L.map("mapid", {
    center: [data.location.lat, data.location.lng],
    zoom: 13,
  });
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGNkYW5lbGxhOTAiLCJhIjoiY2txMDAzbWs5MDAzbzJ2bzRlbmRxbWFweCJ9.vQkbSSmICAon1bpSr6ziqg",
    {
      maxZoom: 18,
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
    }
  ).addTo(mymap);

  L.marker([data.location.lat, data.location.lng])
    .addTo(mymap)
    .bindPopup("Your location: Example")
    .openPopup();
};

appendDataFromIpToDom();
appendMapFromIpToDom();
// fetch data ipfy
// add data to the DOM
// get geolocation data
// display loader waiting for geo position
// if user not allow geo position display a message
// if user allow display map by geolocation
