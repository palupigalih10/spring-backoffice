const { StatusCodes } = require("http-status-codes");
const ApiError = require("@utils/ApiError");
const Menu = require("@models/menu");

/**
 *  Get menu list.
 *
 *  @returns {Promise <Menu>}
 */
const getMenus = async () => {
  return await Menu.findAll();
};

/**
 *  Create a menu.
 *
 *  @param {Object} parameter
 *  @returns {Promise <Menu>}
 *
 *  @throws {Function <ApiError>}
 */
const createMenu = async (param) => {
  if (!param) {
    throw new ApiError(
      StatusCodes.UNPROCESSABLE_ENTITY,
      "Invalid the given data"
    );
  }

  return await Menu.create({
    name: param.name,
    icon: param.icon ? param.icon : null,
    route: param.route ? param.route : null,
    parent_id: param.parent_id ? param.parent_id : null,
    sort: 0,
  });
};

/**
 * Update specified menu by id.
 *
 * @param {String} id
 * @param {Object} param
 * @returns {Promise <Menu>}
 *
 * @throws {Function <ApiError>}
 */
const updateMenu = async (id, param) => {
  if (!id || !param) {
    throw new ApiError(
      StatusCodes.UNPROCESSABLE_ENTITY,
      "Invalid the given data"
    );
  }

  if (!(await Menu.findOne({ where: { id: id } }))) {
    throw new ApiError(
      StatusCodes.UNPROCESSABLE_ENTITY,
      "Invalid the given data"
    );
  }

  return await Menu.update(
    {
      name: param.name,
      icon: param.icon ? param.icon : null,
      route: param.route ? param.route : null,
      parent_id: param.parent_id ? param.parent_id : null,
      sort: param.sort ? param.sort : 0,
    },
    {
      where: { id },
    }
  );
};

/**
 *  Delete menu by id.
 *
 *  @param {String} id
 *  @returns {Promise <Menu>}
 *
 *  @throws {Function <ApiError>}
 */
const deleteMenu = async (id) => {
  if (!id) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Invalid the given data");
  }

  return await Menu.destroy({
    where: {
      id: id,
    },
  });
};

/**
 * Get data for sidebar menu.
 *
 * @returns {Promise<Menu>}
 */
const sidebarMenu = async () => {
  const sidebarMenu = Menu.scope("isParent");

  return await sidebarMenu.findAll({
    include: {
      model: Menu,
      as: "children",
      // order: [["sort", "ASC"]],
    },
    order: [
      ["sort", "ASC"],
      ["children", "sort", "ASC"],
    ],
  });
};

module.exports = {
  getMenus,
  createMenu,
  updateMenu,
  deleteMenu,
  sidebarMenu,
};
