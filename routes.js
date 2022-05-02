import createRoute from "./createRoute.js";

let myArr = [
  [42.5, 27.5],
  [43.5, 24.5],
];
let myArr2 = [
  [44.5, 27.5],
  [42.5, 24.5],
];

let route1 = createRoute(myArr, "title");
let route2 = createRoute(myArr2, "title2");

const routes = [route1, route2];
export default routes;
