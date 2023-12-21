import axiosIns from '../plugins/axios'

const $http = axiosIns

export const $getToken = async (payload) => {
  return $http.post('auth/token/login/', payload)
}

export const $getMe = async () => {
  return $http.get('auth/users/me/')
}
