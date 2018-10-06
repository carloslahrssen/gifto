import { comment } from "./comment";
import { post } from "./post";

comment.belongsTo(post);

export { comment, post };
