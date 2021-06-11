import Navigo from "navigo";

export const router = new Navigo('/', { hash: true });

export const addRoutes = pages => {
  for (const page of pages) {
    router.on(page.route, page.handler, page.hooks);
  }
};
