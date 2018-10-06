import { create, read } from "../services/comment";

const createComment = async (req, res) => {
  res.json(await create(req.body.post_id, req.body.caption));
};

const getComment = async (req, res) => {
  res.json(await find(req.params.post_id));
};

export { createComment, getComment };
