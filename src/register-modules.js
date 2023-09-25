import { router } from "./router";

const registerModule = (name, module) => {
  if (module.router) {
    let routesArr = module.router;

    let mapped = routesArr.map((el) => ({
      ...el,
      path: el.path,
    }));
    mapped.forEach((item) => {
      router.addRoute("Builder", item);
    });
  }
};

export const registerModules = (modules) => {
  Object.keys(modules).forEach((moduleKey) => {
    const module = modules[moduleKey];
    registerModule(moduleKey, module);
  });
};
