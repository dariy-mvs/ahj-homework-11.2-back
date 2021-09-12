const combineRouters = require('koa-combine-routers');
const comments = require('./root/comments');
const posts = require('./root/posts');

const router = combineRouters(
  comments,
  posts,
);

module.exports = router;
