<template>
  <section class="d-flex flex-column">
    <div class="card mb-3" v-for="post in posts" :key="post.id">
      <div class="card-header">{{ post.header }}</div>
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.text }}</p>
        <span class="d-flex justify-content-between align-items-center">
          <nuxt-link :to="{ path: '/post/' + post.id }" class="btn btn-outline-primary">Read more</nuxt-link>
          <font-awesome-icon :icon="['fas', 'minus-circle']" v-on:click="onDelete(post.id)" />
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
  },
  methods: {
    onDelete(id) {
      const posts = this.$store.dispatch("post/delete", id);

      return { posts };
    }
  }
};
</script>



