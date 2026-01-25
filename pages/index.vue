<template>
  <section class="d-flex flex-column">
    <div v-for="post in posts" :key="post.id" class="card mb-3">
      <div class="card-header">{{ post.header }}</div>
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.text }}</p>
        <span class="d-flex justify-content-between align-items-center">
          <NuxtLink :to="'/post/' + post.id" class="btn btn-outline-primary">Read more</NuxtLink>
          <font-awesome-icon :icon="['fas', 'minus-circle']" class="text-danger cursor-pointer" @click="onDelete(post.id)" />
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePostStore } from '~/stores/post'

const postStore = usePostStore()

const { data: posts } = await useAsyncData('posts', () => postStore.fetchPosts())

const onDelete = async (id) => {
  await postStore.delete(id)
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
