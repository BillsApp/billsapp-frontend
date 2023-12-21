<script setup>
import {useSnackbarStore} from "@/stores/snackbar";

defineProps({
  modelValue: Boolean,

  // // color: success - "success", error - "error",
  // color: {
  //   type: String,
  //   default: 'success',
  // },
  // timeout: {
  //   type: Number,
  //   default: 3000,
  // },
  //
  // // icon: success - "mdi-checkbox-marked-circle", error - "mdi-alert-circle",
  // icon: {
  //   type: String,
  //   default: 'mdi-checkbox-marked-circle',
  // },
  // title: {
  //   type: String,
  //   default: 'Success',
  // },
  // text: {
  //   type: String,
  //   default: 'Success',
  // },
})

const snackbarStore = useSnackbarStore()

const emit = defineEmits([
  'update:modelValue',
])
</script>

<template>
  <VSnackbar
    :model-value="modelValue"
    :color="snackbarStore.color"
    :timeout="snackbarStore.timeout"
    location="top"
    auto-height
    @update:modelValue="emit('update:modelValue')"
  >
    <div class="d-flex align-center">
      <VIcon
        size="30"
        :icon="snackbarStore.icon"
      />
      <div class="d-flex flex-column padding-left-5">
        <div>
          <strong>{{ snackbarStore.title }}</strong>
        </div>
        <div>{{ snackbarStore.text }}</div>
      </div>
    </div>
  </VSnackbar>
</template>
