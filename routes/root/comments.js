const Router = require('@koa/router');

const router = new Router({ prefix: `/posts/:id/comments/latest` });
const postsArr = require('../db/db');

router.get('/', async (ctx) => {
  const postWithComments = postsArr.find(el => {
    return el.id === ctx.params.id;
  });
  const onlyComments = postWithComments.comments;
  ctx.body = onlyComments;
});

module.exports = router;
