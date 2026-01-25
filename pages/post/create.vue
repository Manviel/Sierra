<template>
  <form class="card-body m-1" @submit.prevent="onSubmit">
    <h2>Create post</h2>
    <div class="mb-3">
      <label class="form-label">Header</label>
      <input v-model="formData.header" type="text" class="form-control" placeholder="Header" required />
    </div>
    <div class="mb-3">
      <label class="form-label">Title</label>
      <input v-model="formData.title" type="text" class="form-control" placeholder="Title" required />
    </div>
    <div class="mb-3">
      <label class="form-label">Text</label>
      <input v-model="formData.text" type="text" class="form-control" placeholder="Text" required />
    </div>
    <div class="mb-3">
      <label class="form-label">Date</label>
      <input v-model="formData.date" type="date" class="form-control" required />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script setup>
import { usePostStore } from '~/stores/post'

definePageMeta({
  middleware: 'admin'
})

const postStore = usePostStore()
const router = useRouter()

const formData = ref({
  header: '',
  title: '',
  text: '',
  date: null
})

const onSubmit = async () => {
  await postStore.create({ ...formData.value })
  router.push('/')
}
</script>
