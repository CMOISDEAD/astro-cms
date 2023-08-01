const cleanTags = (posts) => {
  return posts
    .map((post) => post.data.tags)
    .flat()
    .filter((tag, i, arr) => arr.indexOf(tag) === i);
};

export default cleanTags;
