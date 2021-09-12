const db = require('./db');
const faker = require('faker');

function postsGenerate() {
  const returnPostsArr = [];
  const random = Math.floor(Math.random() * 10);
  const randomComments = Math.floor(Math.random() * 3);
for (let i = 0; i < random; i++) {
  const post = {
    id: faker.datatype.uuid(),
    author_id: faker.datatype.uuid(),
    title: faker.lorem.words(),
    author: faker.name.findName(),
    avatar: faker.image.avatar(),
    image: faker.image.image(),
    created: new Date().toLocaleString('ru'),
    comments: []
  };
  for (let i = 0; i < randomComments; i++) {
    const comment = {
      id: faker.datatype.uuid(),
      post_id: post.id,
      author_id: faker.datatype.uuid(),
      author: faker.name.findName(),
      avatar: faker.image.avatar(),
      content: faker.lorem.sentence(),
      created: new Date().toLocaleString('ru')
    }
    post.comments.push(comment);
  };
  db.push(post);
  returnPostsArr.push(post);
};
  return returnPostsArr;
};

module.exports = postsGenerate;
