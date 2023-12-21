<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const goToHomePage = () => {
  router.push({ name: 'Home' })
}

const logout = () => {
  userStore.userLogout()
  router.push({ name: 'Login' })
}
</script>

<template>
  <div>
    <VContainer>
      <VRow>

        <VCol
          cols="12"
          class="d-flex justify-space-between"
        >
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
          <div>
            <VBtn
              @click="logout"
            >
              <VIcon icon="$logout" />
              Log Out
            </VBtn>
          </div>
          <!-- /Brand logo-->
        </VCol>

      </VRow>

      <VRow>
        <h2>
          Profile Main Page
        </h2>
      </VRow>
    </VContainer>
  </div>
</template>

<style lang="scss">

</style>
