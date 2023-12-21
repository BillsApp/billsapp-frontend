<script setup>
import { useUserStore } from '@/stores/user'
import { useSnackbarStore } from '@/stores/snackbar'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { $getToken, $getMe } from '@/api/auth'

const loginForm = ref()

const email = ref('')
const password = ref('')

const userStore = useUserStore()
const snackbarStore = useSnackbarStore()

const router = useRouter()
const isLoading = ref(false)

const goToHomePage = () => {
  router.push({ name: 'Home' })
}

const login = async () => {
  isLoading.value = true
  const { valid } = await loginForm.value.validate()

  if (!valid) {
    snackbarStore.showMessage({
      color: 'error',
      timeout: 3000,
      icon: '$alertCircle',
      title: 'Error',
      text: 'Unable to log in with provided credentials. Check required fields'
    })
    return
  }
  try {
    const res = await $getToken({ email: email.value, password: password.value })

    userStore.saveToken(`Token ${res.data.auth_token}`)

    const loggedIn = userStore.isLoggedIn

    if (loggedIn) {
      const user = await $getMe()

      userStore.saveUser(user.data)

      await router.push({ name: 'Profile Main' })

      snackbarStore.showMessage({
        color: 'success',
        timeout: 3000,
        icon: '$checkboxCircle',
        title: 'Success',
        text: 'You have successfully logged in!'
      })
    }
  } catch (e) {
    const message = e.response.data[Object.keys(e.response.data)[0]]
    snackbarStore.showMessage({
      color: 'error',
      timeout: 3000,
      icon: '$alertCircle',
      title: 'Error',
      text: message
    })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="auth-wrapper auth-v2">
    <VContainer class="auth-wrapper__container">
      <VRow class="auth-wrapper__inner">

        <VCol cols="12">
          <!-- Brand logo-->
          <div
            class="brand-logo d-flex align-items-center"
            @click="goToHomePage"
          >
            <img
              class="brand-logo__img mr-3"
              src="@/assets/images/logo.svg"
              alt="Logo"
            >
            <h1 class="brand-logo__title">
              Vision
            </h1>
          </div>
          <!-- /Brand logo-->
        </VCol>

        <!-- Left Text-->
        <VCol
          lg="8"
          class="d-none d-lg-flex align-items-center justify-center p-5"
        >
          <img
            src="@/assets/images/login/login-v2.svg"
            alt="login welcome image"
          />
        </VCol>
        <!-- /Left Text-->

        <!-- Login-->
        <VCol
          lg="4"
          class="d-flex align-items-center auth-bg"
        >
          <VCol
            sm="8"
            md="6"
            lg="12"
            class="mx-auto my-auto"
          >
            <VCard>
              <template #title>
                Welcome!
              </template>
              <template #subtitle>
                Login to start using the system
              </template>
              <template #default>
                <!-- form -->
                <VForm
                  ref="loginForm"
                  class="auth-login-form mt-2 pa-5"
                  @submit.prevent
                >
                  <!-- email -->
                  <VTextField
                    id="login-email"
                    v-model="email"
                    :rules="[v => !!v || 'Email is required']"
                    autocomplete="username"
                    name="login-email"
                    placeholder="Email"
                  />

                  <!-- password -->
                  <VTextField
                    id="login-password"
                    v-model="password"
                    :rules="[v => !!v || 'Password is required']"
                    autocomplete="current-password"
                    class="form-control-merge"
                    type="password"
                    name="login-password"
                    placeholder="············"
                  />
                  <!-- submit buttons -->
                  <VBtn
                    type="submit"
                    @click="login"
                  >
                    Log In
                  </VBtn>
                </VForm>
              </template>
            </VCard>
          </VCol>
        </VCol>
        <!-- /Login-->
      </VRow>
    </VContainer>
  </div>
</template>

<style lang="scss">
.auth-wrapper {
  height: 100vh;
  width: 100%;
  .auth-wrapper__container {
    height: 100%;
    .auth-wrapper__inner {
      height: 100%;
    }
  }
}

.auth-wrapper .auth-bg {
  background-color: #FFFFFF;
}

</style>
