"use strict";

function initMap() {
  let leicester = {lat: 52.914475, lng: -1.466294};
  let dmu = {lat: 52.807285, lng: -1.642997};
  let mapDemo = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 13,
    center: leicester
  });

  // these set different markers you want to show on your map
  let markerDMU = new google.maps.Marker({
    position: dmu,
    map: map,
    title: 'The Good Guys'
  });
  let markerUoL = new google.maps.Marker({
    position: uol,
    map: map,
    title: 'The Bad Guys'
  });
}
