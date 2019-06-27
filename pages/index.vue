<template>
  <div class="d-flex flex-column pt-3">
    <div class="card mb-3" v-for="post in 3" :key="post">
      <div class="card-header">Featured</div>
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-between">
          Card title
          <span>
            <font-awesome-icon :icon="['fas', 'stopwatch']"/>
            {{ new Date().toLocaleString() }}
          </span>
        </h5>
        <p class="card-text">This is some text within a card body</p>
        <span class="d-flex justify-content-between align-items-center">
          <a href="#" class="btn btn-outline-primary">Go somewhere</a>
          <font-awesome-icon :icon="['fas', 'envelope']"/>
        </span>
      </div>
    </div>
  </div>
</template>


