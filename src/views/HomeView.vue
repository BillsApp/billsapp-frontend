<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToLoginPage = () => {
  router.push({ name: 'Login' })
}
</script>

<template>
  <main>
    <h1>BILLS APP</h1>
    <h1>BILLS APP</h1>
    <h1>BILLS APP</h1>
    <h1>BILLS APP</h1>
    <h1>BILLS APP</h1>
    <button @click="goToLoginPage">Login page</button>
  </main>
</template>
