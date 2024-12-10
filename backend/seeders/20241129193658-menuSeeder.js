"use strict";
require("module-alias/register");

const Menu = require("@models/menu");
const samples = require("@seeders/samples/menus.json");

let parents = [];
let children = [];

const samplingHandle = () => {
  parents = samples.filter((sample) => {
    return typeof sample.parent == "undefined";
  });

  children = samples.filter((sample) => {
    return typeof sample.parent !== "undefined";
  });
};

const makeData = (param) => {
  return {
    name: param.name,
    route: param.route,
    parent_id: param.parent_id ? param.parent_id : null,
    icon: param.icon ? param.icon : null,
    sort: param.sort,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

const seedingParent = async () => {
  parents = parents.map((parent, idx) => {
    return makeData({
      name: parent.name,
      route: parent.route,
      icon: parent.icon,
      parent_id: null,
      sort: idx + 1,
    });
  });

  return await Menu.bulkCreate(parents);
};

const seedingChildren = async () => {
  children = children.map(async (child, idx) => {
    const parent = await Menu.findOne({
      where: { name: child.parent },
    });

    return makeData({
      name: child.name,
      route: child.route,
      icon: child.icon,
      parent_id: parent.id ? parent.id : null,
      sort: child.sort ? child.sort : idx + 1,
    });
  });

  return await Menu.bulkCreate(await Promise.all(children));
};

samplingHandle();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await Menu.truncate();

    await seedingParent();
    await seedingChildren();
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("menus", null, {});
  },
};
