<template>
  <form class="card-body m-1" @submit.prevent="onSubmit">
    <h2>Admin login panel</h2>
    <div class="mb-3">
      <label class="form-label">Name</label>
      <input v-model="name" type="text" class="form-control" placeholder="Enter name" required />
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <input v-model="password" type="password" class="form-control" placeholder="Enter password" required />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const router = useRouter()

const name = ref('')
const password = ref('')

const onSubmit = async () => {
  const userData = {
    name: name.value,
    password: password.value
  }

  await authStore.login(userData)
  router.push('/')
}
</script>