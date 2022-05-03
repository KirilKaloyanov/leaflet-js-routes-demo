import map from "./map.js";

function createRoute(arr, title, color) {
  let myPolyline = L.polyline(arr, { color: color, weight: 5 }).addTo(map);
  myPolyline.bindPopup(title);
  myPolyline.on("mouseover", onMouseOver);
  myPolyline.on("mouseout", onMouseOut);

  return myPolyline;
}

function onMouseOver(e) {
  e.target.setStyle({ weight: 10 });
}
function onMouseOut(e) {
  e.target.setStyle({ weight: 5 });
}

export default createRoute;
