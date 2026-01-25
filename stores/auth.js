import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null
    }),
    getters: {
        isAuth: (state) => !!state.token
    },
    actions: {
        async login(formData) {
            const token = await new Promise(resolve => resolve("mock"))
            this.setToken(token)
        },
        setToken(token) {
            this.token = token
        },
        logout() {
            this.token = null
        }
    }
})
