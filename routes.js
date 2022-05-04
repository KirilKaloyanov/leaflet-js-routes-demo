import createRoute from "./createRoute.js";
import dunavChernoMore2 from "./DunavChernoMore2.js";
import ironCurtainTrail10 from "./IronCurtainTrail10.js";

let route = [];

function mapArrayToRoute(coordsData, title, color) {
  let lineArray = [];
  for (let key of coordsData.features) {
    let coordsArray = [];
    for (let coords of key.geometry.coordinates) {
      coordsArray.push([coords[1], coords[0]]);
    }
    lineArray.push(coordsArray);
  }

  createRoute(lineArray, title, color);
}

mapArrayToRoute(
  dunavChernoMore2,
  "EuroVelo 6 - Дунавски велосипеден маршрут",
  "blue"
);
mapArrayToRoute(
  ironCurtainTrail10,
  "EuroVelo 13 - Пътят на Желязната завеса",
  "green"
);

export default route;
