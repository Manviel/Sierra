import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', {
    state: () => ({
        posts: [
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
        ]
    }),
    actions: {
        async fetchPosts() {
            return this.posts
        },
        async fetchById(id) {
            return this.posts.find(x => x.id === id)
        },
        async create({ header, title, text, date }) {
            const post = {
                id: (Math.floor(Math.random() * (10 - 2)) + 2).toString(),
                header,
                title,
                text,
                date
            }
            this.posts.push(post)
            return post
        },
        async delete(id) {
            const index = this.posts.findIndex(x => x.id === id)
            if (index !== -1) {
                this.posts.splice(index, 1)
            }
            return this.posts
        }
    }
})
