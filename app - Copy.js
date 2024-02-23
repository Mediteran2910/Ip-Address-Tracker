require('dotenv').config();



const button = document.querySelector("button");
const input = document.querySelector("input");
const form = document.querySelector("form");
const locationResult = document.getElementById("locationResult");
const ipResult = document.getElementById("ipAddress");
const utcResult = document.getElementById("utcResult");
const ispResult = document.getElementById("ispResult");
const mapElement = document.getElementById("map");
const country = document.getElementById("country");
const searchBox = document.querySelector(".searchBox");
const invalidIpMsg = document.getElementById("invalidIpMsg");


const getSome = async (ip) => {
  try {
    const res = await axios.get(
      `https://api.ipgeolocation.io/ipgeo?apiKey=cfa93acde9ac44d99a28bad1ca811b8b&ip=${ip}`,
    );
    console.log(res);
    return res.data;
  } catch {
    console.log("nesto nevalja");
  }
};

let map;

async function initMap() {
  const position = { lat: 47.62232, lng: -122.33665 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  

  map = new Map(document.getElementById("map"), {
    zoom: 8,
    center: position,
    mapId: "DEMO_MAP_ID",
    fullscreenControl: false,
    streetViewControl: false,
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
  
  });

}

initMap();

let updateMap = async (lat, lng) => {
  const position = { lat: Number(lat), lng: Number(lng) };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  

  map = new Map(document.getElementById("map"), {
    zoom: 8,
    center: position,
    mapId: "DEMO_MAP_ID",
    fullscreenControl: false,
    streetViewControl: false,
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
  
  });
 

}

const results = (res, ip) => {
  locationResult.innerText = res.city;
  country.innerText = res.country_name;
  ipResult.innerText = res.ip;
  utcResult.innerText = `UTC ${res.time_zone.offset}`;
  ispResult.innerText = res.isp;
  searchBox.classList.remove("errorInvalidIp");
  invalidIpMsg.style.display = "none";
  mapElement.style.display = 'block'
  if (ip.length > 25 && document.body.clientWidth < 563) {
    ipResult.style.fontSize = "11px";
  } else {
    ipResult.style.fontSize = "18px";
  }
};

const invalidIp = () => {
  locationResult.innerText = "--";
  country.innerText = "--";
  ipResult.innerText = "--";
  utcResult.innerText = "--";
  ispResult.innerText = "--";
  searchBox.classList.add("errorInvalidIp");
  invalidIpMsg.style.display = "block";
  mapElement.style.display = 'none'
  console.log("invalid ip");
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  let ip = input.value;
  let ipRegexV4 = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)){3}$/;
  let ipRegexV6 = /^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4})$/;

  if (ipRegexV4.test(ip) || ipRegexV6.test(ip)) {
    console.log(`valid ip input: ${ip}`);
    try {
      const res = await getSome(ip);

      let lat = res.latitude;
      let lng = res.longitude;
      results(res, ip);
      updateMap(lat, lng);
    } catch(error) {
      console.log(error);
      console.log("something is wrong with promise");
    }
  } else {
    invalidIp();
  }
});


