import { post } from "../model";

const create = (title, caption, link, lat, long) => {
  return post.create({
    title: title,
    caption: caption,
    link: link,
    lat: lat,
    long: long
  });
};

const read = id => {
  return post.findById(id);
};

const readAll = () => {
  return post.findAll();
};

export { create, read, findAll };
