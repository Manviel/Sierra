<template>
  <div v-if="post" class="card mt-3">
    <div class="card-header">{{ post.header }}</div>
    <div class="card-body">
      <section class="d-flex justify-content-between">
        <NuxtLink to="/">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </NuxtLink>
        <h5 class="card-title">{{ post.title }}</h5>
        <span>
          <font-awesome-icon :icon="['fas', 'stopwatch']" />
          {{ new Date(post.date).toISOString().slice(0, 10) }}
        </span>
      </section>
      <p class="card-text">{{ post.text }}</p>
      <p v-if="post.views" class="card-text">{{ post.views }} views</p>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from '~/stores/post'

definePageMeta({
  middleware: 'admin'
})

const route = useRoute()
const postStore = usePostStore()

const { data: post } = await useAsyncData(`post-${route.params.id}`, () => postStore.fetchById(route.params.id))
</script>
