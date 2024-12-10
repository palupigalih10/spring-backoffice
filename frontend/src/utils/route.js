import PropTypes from "prop-types";

const defineContextRoute = (items, prefix = "") => {
  prefix = prefix !== "" ? `/${prefix}` : prefix;

  return items.map((item) => {
    if (item.to) {
      item.to = `${prefix}/${item.to}`.replace(/\/+/g, '/');
    }

    if (item.href) {
      item.href = `${prefix}/${item.href}`.replace(/\/+/g, '/');
    }

    if (item.items) {
      item.items = defineContextRoute(item.items, prefix);
    }

    return item;
  });
};

defineContextRoute.PropTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  prefix: PropTypes.string,
};

export { defineContextRoute };
