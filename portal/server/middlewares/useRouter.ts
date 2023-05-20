// https://github.dev/snake2-npms/snake2-cors
import * as Koa from "koa";
const path = require("path");
const projectPath = path.resolve(__dirname, "../../");
const Routers = require(path.resolve(projectPath, "server/controllers"));
const ApplicationController = require(path.resolve(
  projectPath,
  "server/controllers/ApplicationController"
));
module.exports = async function useRouter(app: Koa) {
  registerAppRouter(app, Routers);
};

const isObject = function (v: any): boolean {
  return typeof v === "function" || toString.call(v) === "[object Object]";
};
const isClass = function (v: any): boolean {
  return typeof v === "function" && /^\s*class\s+/.test(v.toString());
};
function registerAppRouter(app: Koa, Routers: any) {
  if (isObject(Routers)) {
    for (const key of Object.keys(Routers)) {
      if (isClass(Routers[key])) {
        let router = new Routers[key]();
        if (router instanceof ApplicationController) {
          app.use(router.routes()).use(router.allowedMethods());
        }
      } else {
        registerAppRouter(app, Routers[key]);
      }
    }
  }
}
