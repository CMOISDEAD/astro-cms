const getSortedPosts = (posts) =>
  posts
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.date).getTime() / 1000) -
        Math.floor(new Date(a.data.date).getTime() / 1000)
    );

export default getSortedPosts;
