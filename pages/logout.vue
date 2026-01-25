<template>
  <h2>Logging out...</h2>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

definePageMeta({
  middleware: 'admin'
})

const authStore = useAuthStore()
const router = useRouter()

onBeforeMount(async () => {
  await authStore.logout()
  router.push('/login')
})
</script>
