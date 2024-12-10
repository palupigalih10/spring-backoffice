const express = require("express");
const menuController = require("@controllers/admin/menu.controller");

const route = express.Router();

// Menu Route
route.get("/menu", menuController.getMenus);
route.post("/menu", menuController.createMenu);
route.patch("/menu/:id", menuController.updateMenu);
route.delete("/menu/:id", menuController.deleteMenu);
route.get("/menu/sidebar", menuController.getSidebarMenu);

module.exports = route;
