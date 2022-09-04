const routes = require('next-routes')();

routes
  .add('/campaigns/new', '/campaigns/new')
  //Wildcard ":address" allows each created campaign to get a unique path
  .add('/campaigns/:address', '/campaigns/show');

module.exports = routes;
