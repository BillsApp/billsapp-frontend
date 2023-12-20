import {defineStore} from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    persist: true,
    state: () => ({
        user: {},
        auth_token: '',
    }),
    getters: {
        userId: state => state.user.id,
        isLoggedIn: state => state.auth_token !== '',
    },
    actions: {
        saveUser(user) {
            this.user = user
        },

        saveToken(token) {
            this.auth_token = token
        },

        userLogout() {
            this.auth_token = ''
            this.user = {}
            localStorage.removeItem('userAbilities')
        },
    },
})
