const Router = require('@koa/router');

const router = new Router({ prefix: '/posts/latest' });
//const postsArr = require('../db/db');
const postsGenerate = require('../db/postsGenerate');

//const { getPostsArr } = db;

router.get('/', async (ctx) => {
  let posts = postsGenerate();
  const postsWithoutComments = posts.map(el => {
    return {
      id: el.id,
      author_id: el.author_id,
      title: el.title,
      author: el.author,
      avatar: el.avatar,
      image: el.image,
      created: el.created
    };
  });
  ctx.body = postsWithoutComments;
});

module.exports = router;
