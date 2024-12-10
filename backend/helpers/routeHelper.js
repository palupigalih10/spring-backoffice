function list(app) {
  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      console.log(middleware.route.path, middleware.route.methods);
    } else if (middleware.name === "router") {
      middleware.handle.stack.forEach((nestedMiddleware) => {
        if (nestedMiddleware.route) {
          console.log(
            nestedMiddleware.route.path,
            nestedMiddleware.route.methods
          );
        }
      });
    }
  });
}

module.exports = {
  list,
};
