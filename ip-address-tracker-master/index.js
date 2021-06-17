const ipEl = document.getElementById("ip");
const locationEl = document.getElementById("location");
const timezoneEl = document.getElementById("timezone");
const ispEl = document.getElementById("isp");

var mymap = L.map("mapid").setView([1, 1], 13);
var marker = L.marker([1, 1]).addTo(mymap);

let url = `https://geo.ipify.org/api/v1?apiKey=at_IIa7jKlnHWJb2iCB1v5WR2g2u3BHb`;

const getAdressInformation = async (url) => {
  console.log(url);
  const responseIpfy = await fetch(url);
  const dataIpfy = await responseIpfy.json();
  const responseIpApi = await fetch(
    `http://api.ipapi.com/${dataIpfy.ip}?access_key=c24eca14bdfed05d89e12e3c65241a15`
  );
  const dataIpApi = await responseIpApi.json();

  return {
    ip: dataIpfy.ip,
    timezone: dataIpfy.location.timezone,
    isp: dataIpfy.as.name,
    data: dataIpfy,
    long: dataIpApi.longitude,
    lat: dataIpApi.latitude,
    city: dataIpApi.city,
    regionCode: dataIpApi.region_code,
    zip: dataIpApi.zip,
  };
};

const show = async (url) => {
  const { ip, timezone, isp, data, long, lat, city, regionCode, zip } =
    await getAdressInformation(url);
  ipEl.textContent = ip;
  timezoneEl.textContent = timezone;
  ispEl.textContent = isp;
  locationEl.textContent = `${city}, ${regionCode} - ${zip}`;
  console.log(long, lat);
  updateMap(lat, long);
};

const updateMap = async (lat, long) => {
  mymap.remove();
  mymap = L.map("mapid").setView([lat, long], 13);
  marker = L.marker([lat, long]).addTo(mymap);

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoiamVhbjIwMjEiLCJhIjoiY2twMDU2OXo4MTA3dzJ2bXdoYm8xcTJ3bCJ9.ZFoCfbfspF92VtE2WFXIjA",
    }
  ).addTo(mymap);
};

show(url);

const inputEl = document.querySelector("input");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (ValidateIPaddress(inputEl.value)) {
    show(url + `&ipAddress=${inputEl.value}`);
  } else if (validURL(inputEl.value)) {
    show(url + `&domain=${inputEl.value}`);
  } else {
    alert("enter a valid value please man ok ok");
  }
  console.log(url);
});

function ValidateIPaddress(ipaddress) {
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      ipaddress
    )
  ) {
    return true;
  }
  return false;
}
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}
