<script lang="ts" setup>
// import { $getToken } from '@/api/auth'
// import { useUserStore } from '@/store/user'
// import { getCurrentUserData } from '@/helpers/user/getCurrentUserData'
import { ref } from 'vue'
import { useRouter } from 'vue-router'


const isPasswordVisible = ref(false)

const errors = ref<Record<string, string | undefined>>({
  email: undefined,
  password: undefined,
})

const loginError = ref(false)
const refVForm = ref({})

const email = ref('')
const password = ref('')
// const userStore = useUserStore()
const router = useRouter()
const isLoading = ref(false)

const login = async () => {
  isLoading.value = true
  // const isValid = await refVForm.value?.validate()
  // if (isValid && isValid.valid) {
    try {
      // const res = await $getToken({ email: email.value, password: password.value })
      //
      // userStore.saveToken(`Token ${res.data.auth_token}`)
      //
      // await getCurrentUserData()

      await router.push('/')
    } catch (e) {
      loginError.value = true
    } finally {
      isLoading.value = false
    }
  // }
}
</script>

<template>
  <div class="auth-wrapper auth-v2">
    <VRow class="auth-inner m-0 d-flex align-items-center">

      <VCol cols="12">
        <!-- Brand logo-->
        <div class="brand-logo d-flex align-items-center">
          <img
            src="@/assets/images/logo.svg"
            class="w-50"
            alt="Logo"
          >
          <h1 class="ml-1 d-flex align-center">
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
        class="d-flex align-items-center auth-bg px-2 p-lg-5 pr-lg-10"
      >
        <VCol
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto my-auto"
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
                class="auth-login-form mt-2 pa-5"
                @submit.prevent
              >
                <!-- email -->
                <VTextField
                  id="login-email"
                  v-model="email"
                  autocomplete="username"
                  name="login-email"
                  placeholder="Email"
                />

                <!-- password -->
                <VTextField
                  id="login-password"
                  v-model="password"
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
                  Login
                </VBtn>
              </VForm>
            </template>
          </VCard>
        </VCol>
      </VCol>
      <!-- /Login-->
    </VRow>
  </div>
</template>

<style lang="scss">
$auth-1-inner-max-width: 400px !default;

.auth-wrapper {
  display: flex;
  flex-basis: 100%;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  width: 100%;

  .auth-inner {
    width: 100%;
    position: relative;
  }

  &.auth-v2 {
    align-items: flex-start;
    .auth-inner {
      height: 100vh;
      overflow-y: auto; // For v2 scroll for long auth form
      height: calc(var(--vh, 1vh) * 100);
    }
    .brand-logo {
      position: absolute;
      top: 2rem;
      left: 2rem;
      margin: 0;
      z-index: 1;
    }
  }

  .brand-logo {
    display: flex;
    justify-content: center;
    max-height: 100px;
    margin: 1rem 0 2rem 0;
    .brand-text {
      font-weight: 600;
    }
  }

  .auth-footer-btn {
    .btn {
      padding: 0.6rem !important;
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
}

@media (min-width: 1200px) {
  .auth-wrapper {
    &.auth-v2 .auth-card {
      width: $auth-1-inner-max-width;
    }
  }
}

.auth-wrapper .auth-bg {
  background-color: #FFFFFF;
}

</style>
