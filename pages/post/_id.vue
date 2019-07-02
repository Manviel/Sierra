<template>
  <div class="card mt-3">
    <div class="card-header">Featured</div>
    <div class="card-body">
      <section class="d-flex justify-content-between">
        <nuxt-link to="/">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </nuxt-link>
        <h5 class="card-title">Card title</h5>
        <span>
          <font-awesome-icon :icon="['fas', 'stopwatch']" />
          {{ new Date().toISOString().slice(0, 10) }}
        </span>
      </section>
      <p class="card-text">This is some text within a card body</p>
    </div>
    <div class="card-body border my-1 mx-4" v-for="comment in 3" :key="comment">
      <h6 class="card-subtitle text-muted">Person</h6>
      <p class="card-text">Comment</p>
    </div>
    <comment-form />
  </div>
</template>

<script>
import CommentForm from "@/components/CommentForm";

export default {
  validate({ params }) {
    return Boolean(params.id);
  },
  components: { CommentForm }
};
</script>

