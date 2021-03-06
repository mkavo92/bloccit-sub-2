module.exports = {
    init(app){
      const staticRoutes = require("../routes/static");
      const topicRoutes = require("../routes/topics");
      const advertisementRoutes = require("../routes/advertisements");
      const postRoutes = require("../routes/posts");
      const userRoutes = require("../routes/users");
      app.use(staticRoutes);
      app.use(topicRoutes);
      app.use(advertisementRoutes);
      app.use(postRoutes);
      app.use(userRoutes);
    }
  }