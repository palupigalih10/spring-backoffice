import { CNavItem, CNavGroup } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import * as Icon from "@coreui/icons";
import variable from "@/app/variables";
import { defineContextRoute } from "@/utils/route";

const ApiUrl = variable.ApiUrl;

let routes = [
  {
    name: "Dashboard",
    route: "dashboard",
    icon: "cilSpeedometer",
  },
];

const routeState = async () => {
  await axios
    .get(`${ApiUrl}/menu/sidebar`)
    .then((res) => {
      const data = res.data.data;
      routes = routes.concat(data);
    })
    .catch((err) => {
      console.error("Failed to fetch data");
      return null;
    });

  routes = routes.map((route) => {
    return routeComponent(route);
  });
  return routes;
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

export const adminRoute = defineContextRoute(await routeState(), "admin");
