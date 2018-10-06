import { comment } from "../model";

const create = async (postId, link, caption) => {
  return await comment.create({ postId: postId, link: link, caption: caption });
};

const read = async postId => {
  return await comment.findOne({ where: { postId: postId } });
};

export { create, read };
