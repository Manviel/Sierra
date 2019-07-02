<template>
  <section class="d-flex flex-column">
    <div class="card mb-3" v-for="post in posts" :key="post.id">
      <div class="card-header">{{ post.header }}</div>
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-between">
          {{ post.title }}
          <font-awesome-icon :icon="['fas', 'stopwatch']" />
        </h5>
        <p class="card-text">{{ post.text }}</p>
        <span class="d-flex justify-content-between align-items-center">
          <nuxt-link :to="{ path: '/post/' + post.id }" class="btn btn-outline-primary">Read more</nuxt-link>
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ store }) {
    const posts = await store.dispatch("post/fetchPosts");

    return { posts };
  }
};
</script>



