import Router from "express";
import { createPost, getAllPost, getPost } from "../controller/post";
import { createComment, getComment } from "../controller/comment";

const apiRouter = Router();

apiRouter.post("/post", createPost);
apiRouter.get("/post/all", getAllPost);
apiRouter.get("/post/:id", getPost);

apiRouter.post("/comment", createComment);
apiRouter.get("/comment/:id", getComment);

export { apiRouter };
