import { CNavItem, CNavGroup } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import * as Icon from "@coreui/icons";
import { defineContextRoute } from "@/utils/route";

let routes = [
  {
    name: "Dashboard",
    route: "dashboard",
    icon: "cilSpeedometer",
  },
];

const navigationCompiler = (navigation, prefix = "") => {
  routes = routes.concat(navigation);

  return defineContextRoute(
    routes.map((nav) => {
      const route = routeComponent(nav);
      console.log({
        route: route,
      });

      return route;
    }),
    prefix
  );
};

const routeComponent = (param) => {
  let route = {
    component: param.children ? CNavGroup : CNavItem,
    name: param.name,
  };

  if (param.route) {
    route.to = param.route;
  }

  if (param.icon) {
    route.icon = <CIcon icon={Icon[param.icon]} customClassName="nav-icon" />;
  }

  if (param.children) {
    route.items = param.children.map((child) => {
      return routeComponent(child);
    });
  }

  return route;
};

export { navigationCompiler };
