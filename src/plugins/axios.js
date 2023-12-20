import axios from 'axios'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const urls = {
  development: 'http://127.0.0.1:8000/'
}

const baseUrl = urls[import.meta.env.MODE]

const axiosIns = axios.create({
    baseURL: baseUrl,
    timeout: 60000,
})

axiosIns.interceptors.request.use(config => {
    const userStore = useUserStore()

    if (userStore.isLoggedIn) {
        config.headers.Authorization = userStore.auth_token
    }

    return config
}, error => {
    if (error.re)
        return Promise.reject(error)
})

axiosIns.interceptors.response.use(
    response => response,
    error => {
        const userStore = useUserStore()

        const { config, response } = error
        if (response && (response.status === 401)) {
            userStore.userLogout()
            router.push('/login')
        }

        return Promise.reject(error)
    },
)

export default axiosIns
