<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToLoginPage = () => {
  router.push({ name: 'Login' })
}
</script>

<template>
  <div>
    <VContainer>
      <VRow>

        <VCol cols="12">
          <!-- Brand logo-->
          <div class="brand-logo d-flex align-items-center">
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

      </VRow>

      <VRow>
        <h2>
          Home Page
        </h2>
        <VBtn @click="goToLoginPage">
          Apply Now!
        </VBtn>
      </VRow>
    </VContainer>
  </div>
</template>

<style lang="scss">

</style>

