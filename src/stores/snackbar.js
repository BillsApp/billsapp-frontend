import { defineStore } from 'pinia'

export const useSnackbarStore = defineStore({
  id: 'snackbar',
  persist: false,
  state: () => ({
    showSnackbar: false,
    // color: success - "success", error - "error",
    color: 'success',
    timeout: 3000,
    // icon: success - "$checkboxCircle", error - "$alertCircle",
    icon: '$checkboxCircle',
    title: 'Success',
    text: 'Success'
  }),
  actions: {
    showMessage(payload) {
      this.color = payload.color
      this.timeout = payload.timeout
      this.icon = payload.icon
      this.title = payload.title
      this.text = payload.text
      this.showSnackbar = true
    },
  },
})
