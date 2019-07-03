const posts = [
  {
    title: "Post",
    header: "Apple",
    text: "This is commercial company",
    date: new Date(),
    views: 2,
    id: "0"
  },
  {
    title: "Photo",
    header: "Alphabet",
    text: "This is good company",
    date: new Date(),
    views: 3,
    id: "1"
  }
];

export const actions = {
  async fetchPosts({}) {
    return await new Promise(resolve => resolve(posts));
  },
  async fetchById({}, id) {
    return await new Promise(resolve => resolve(posts.find(x => x.id === id)));
  },
  create({}, { header, title, text, date }) {
    return new Promise(resolve => {
      const post = {
        id: (Math.floor(Math.random() * (10 - 2)) + 2).toString(),
        header,
        title,
        text,
        date
      };

      resolve(posts.push(post));
    });
  },
  delete({}, id) {
    return new Promise(resolve => {
      const post = posts.findIndex(x => x.id === id);

      posts.splice(post, 1);

      resolve(posts);
    });
  }
};
