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
          {{ post.date.toISOString().slice(0, 10) }}
        </span>
      </section>
      <p class="card-text">{{ post.text }}</p>
    </div>
    <div class="card-body border my-1 mx-4" v-for="comment in post.views" :key="comment">
      <h6 class="card-subtitle text-muted">Person</h6>
      <p class="card-text">Comment</p>
    </div>
    <CommentForm />
  </div>
</template>

<script>
import CommentForm from "@/components/CommentForm";

export default {
  middleware: "admin",
  components: { CommentForm },
  async asyncData({ store, params }) {
    const post = await store.dispatch("post/fetchById", params.id);

    return { post };
  }
};
</script>

