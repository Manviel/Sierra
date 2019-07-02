<template>
  <section class="d-flex flex-column">
    <div class="card mb-3" v-for="post in 3" :key="post">
      <div class="card-header">Featured</div>
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-between">
          Card title
          <span>
            <font-awesome-icon :icon="['fas', 'stopwatch']" />
            {{ new Date().toISOString().slice(0, 10) }}
          </span>
        </h5>
        <p class="card-text">This is some text within a card body</p>
        <span class="d-flex justify-content-between align-items-center">
          <nuxt-link to="/post/1" class="btn btn-outline-primary">Go somewhere</nuxt-link>
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </span>
      </div>
    </div>
  </section>
</template>


