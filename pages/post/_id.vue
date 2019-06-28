<template>
  <div class="card mt-3">
    <div class="card-header">Featured</div>
    <div class="card-body">
      <h5 class="d-flex justify-content-between">
        <nuxt-link to="/">
          <font-awesome-icon :icon="['fas', 'arrow-left']"/>
        </nuxt-link>
        <h5 class="card-title">Card title</h5>
        <span>
          <font-awesome-icon :icon="['fas', 'stopwatch']"/>
          {{ new Date().getDay() }}
        </span>
      </h5>
      <p class="card-text">This is some text within a card body</p>
    </div>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return Boolean(params.id);
  }
};
</script>

