const posts = [
  {
    title: "Post",
    header: "Apple",
    text: "This is commercial company",
    date: new Date(),
    views: 2,
    id: "1"
  },
  {
    title: "Photo",
    header: "Alphabet",
    text: "This is good company",
    date: new Date(),
    views: 3,
    id: "2"
  }
];

export const actions = {
  async fetchPosts({}) {
    return await new Promise(resolve => resolve(posts));
  },
  async fetchById({}, id) {
    return await new Promise(resolve => resolve(posts.find(x => x.id === id)));
  }
};
