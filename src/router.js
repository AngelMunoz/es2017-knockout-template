import Navigo from "navigo";

export const router = new Navigo('/', { hash: true });

export const addRoutes =
  (/** @type {{ route: string; handler: (match: import("navigo").Match) => void; hooks?: import('navigo').RouteHooks }[]} */
    pages) => {
    for (const page of pages) {
      router.on(page.route, page.handler, page.hooks);
    }
  };
