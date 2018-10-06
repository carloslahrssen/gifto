//lat and long, title, gif content, caption, link

import { db, Sequelize } from "../db";

const post = db.define("post", {
  title: Sequelize.STRING,
  caption: Sequelize.STRING,
  link: Sequelize.STRING,
  lat: Sequelize.STRING,
  long: Sequelize.STRING
});

export { post };
