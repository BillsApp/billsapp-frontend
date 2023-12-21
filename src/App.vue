<script setup>
import { RouterView } from 'vue-router'
import Snackbar from '@/components/helpers/Snackbar.vue'
import { useSnackbarStore } from '@/stores/snackbar'

const snackbarStore = useSnackbarStore()

</script>

<template>
  <div>
    <RouterView />
    <Snackbar
      v-model="snackbarStore.showSnackbar"
    />
  </div>
</template>

<style scoped>
</style>
