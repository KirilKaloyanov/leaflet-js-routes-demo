import map from "./map.js";

let myArr = [
  [42.5, 27.5],
  [43.5, 24.5],
];

function createRoute(arr, title) {
  let myPolyline = L.polyline(arr, { color: "red", weight: 5 }).addTo(map);
  myPolyline.title = title;

  myPolyline.on("mouseover", onMouseOver);
  myPolyline.on("mouseout", onMouseOut);
  myPolyline.on("click", titleHandler);

  return myPolyline;
}

let route1 = createRoute(myArr, "title");

function onMouseOver(e) {
  e.target.setStyle({ color: "blue" });
}
function onMouseOut(e) {
  e.target.setStyle({ color: "red" });
}

function titleHandler(e) {
  routeTitleElement.textContent = e.target.title;
}

let routeTitleElement = document.getElementById("routeTitle");

export default route1;
