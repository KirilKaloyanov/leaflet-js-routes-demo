import createRoute from "./createRoute.js";
import json from "./DunavChernoMore2.js";

let i = 1;

for (let key of json.features) {
  let color = "";
  let arr = [];
  for (let line of key.geometry.coordinates) {
    arr.push([line[1], line[0]]);
  }
  if (i % 2 == 0) color = "purple";
  else color = "green";
  createRoute(arr, `Title ${i}`, color);
  i++;
}

let myArr2 = [
  [44.5, 27.5],
  [45.5, 26.5],
];

let route2 = createRoute(myArr2, "title2", "purple");

export default route2;
