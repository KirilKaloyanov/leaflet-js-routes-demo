import map from "./map.js";

function createRoute(arr, title) {
  let myPolyline = L.polyline(arr, { color: "red", weight: 5 }).addTo(map);
  myPolyline.title = title;

  myPolyline.on("mouseover", onMouseOver);
  myPolyline.on("mouseout", onMouseOut);
  myPolyline.on("click", titleHandler);

  return myPolyline;
}

function onMouseOver(e) {
  e.target.setStyle({ color: "blue" });
}
function onMouseOut(e) {
  e.target.setStyle({ color: "red" });
}

function titleHandler(e) {
  let routeTitleElement = document.getElementById("routeTitle");
  routeTitleElement.textContent = e.target.title;
}

export default createRoute;
