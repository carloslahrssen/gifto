// post_id, caption, link
import { db, Sequelize } from "../db";

const comment = db.define("comment", {
  caption: Sequelize.STRING,
  link: Sequelize.STRING
});

export { comment };
