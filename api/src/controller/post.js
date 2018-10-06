import { create, readAll, read } from "../services/post";

const createPost = async (req, res) => {
  res.json(
    await post.create(
      req.body.title,
      req.body.caption,
      req.body.link,
      req.body.lat,
      req.body.lat
    )
  );
};

const getPost = async (req, res) => {
  res.json(await findById(req.params.id));
};

const getAllPost = async (req, res) => {
  res.json(await findAll());
};

export { createPost, getPost, getAllPost };
