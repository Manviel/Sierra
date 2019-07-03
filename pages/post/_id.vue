<template>
  <div class="card mt-3">
    <div class="card-header">{{ post.header }}</div>
    <div class="card-body">
      <section class="d-flex justify-content-between">
        <nuxt-link to="/">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </nuxt-link>
        <h5 class="card-title">{{ post.title }}</h5>
        <span>
          <font-awesome-icon :icon="['fas', 'stopwatch']" />
          {{ new Date(post.date).toISOString().slice(0, 10) }}
        </span>
      </section>
      <p class="card-text">{{ post.text }}</p>
      <p class="card-text" v-if="post.views">{{ post.views }} views</p>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "admin",
  async asyncData({ store, params }) {
    const post = await store.dispatch("post/fetchById", params.id);

    return { post };
  }
};
</script>

