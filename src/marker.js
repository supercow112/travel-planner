import mapbox from "mapbox-gl";
import map from "./index";

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png",
};

const buildMarker = function (type, coords) {
  const markerDomEl = document.createElement("div");
  // markerDomEl.style.width = "32px";
  // markerDomEl.style.height = "39px";
  // markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;
  return new mapbox.Marker(markerDomEl).setLngLat(coords).addTo(map);
};

export default buildMarker;
