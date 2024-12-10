const { Model, DataTypes, Op } = require("sequelize");
const Db = require("@config/database");

const sequelize = Db.sequelize;

class Menu extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

Menu.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    route: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Menu,
        key: "id",
      },
    },
    sort: {
      type: DataTypes.TINYINT,
    },
  },
  {
    sequelize,
    modelName: "Menu",
    tableName: "menus",
  }
);

Menu.addScope("isParent", {
  where: {
    parent_id: {
      [Op.is]: null,
    },
  },
});

Menu.hasMany(Menu, { as: "children", foreignKey: "parent_id" });

module.exports = Menu;
