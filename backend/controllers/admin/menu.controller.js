const { StatusCodes } = require("http-status-codes");
const catchAsync = require("@utils/catchAsync");
const menuService = require("@services/menuService");

const getMenus = catchAsync(async (req, res) => {
  try {
    const menus = await menuService.getMenus();

    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: "Data found",
      data: menus,
    });
  } catch (error) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      message: "Error while fetching data",
      error,
    });
  }
});

const createMenu = catchAsync(async (req, res) => {
  const create = await menuService.createMenu(req.body);

  if (!create) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      status: StatusCodes.UNPROCESSABLE_ENTITY,
      message: "Failed to create data",
    });
  }

  return res.status(StatusCodes.CREATED).json({
    status: StatusCodes.CREATED,
    message: "Succesfully to create data",
  });
});

const updateMenu = catchAsync(async (req, res) => {
  const update = await menuService.updateMenu(req.params.id, req.body);

  if (!update) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      status: StatusCodes.UNPROCESSABLE_ENTITY,
      message: "Failed to update data",
    });
  }

  return res.status(StatusCodes.OK).json({
    status: StatusCodes.OK,
    message: "Succesfully to update data",
  });
});

const deleteMenu = catchAsync(async (req, res) => {
  const destroy = await menuService.deleteMenu(req.params.id);

  if (!destroy) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      status: StatusCodes.UNPROCESSABLE_ENTITY,
      message: "Failed to delete data",
    });
  }

  return res.status(StatusCodes.OK).json({
    status: StatusCodes.OK,
    message: "Succesfully to delete data",
  });
});

const getSidebarMenu = catchAsync(async (req, res) => {
  const sidebarMenu = await menuService.sidebarMenu();

  if (!sidebarMenu) {
    return res.ststus(StatusCodes.UNPROCESSABLE_ENTITY).json({
      status: StatusCodes.UNPROCESSABLE_ENTITY,
      message: "Unprocessable entity",
    });
  }

  return res.status(StatusCodes.OK).json({
    status: StatusCodes.OK,
    message: "Data found",
    data: sidebarMenu,
  });
});

module.exports = {
  getMenus,
  createMenu,
  updateMenu,
  deleteMenu,
  getSidebarMenu,
};
