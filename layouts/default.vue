<template>
  <main class="container-fluid p-3">
    <div class="row">
      <div class="col-md-3">
        <NavBar />
      </div>
      <div class="col-md-9">
        <slot />
      </div>
    </div>
  </main>
</template>

<script setup>
// NavBar is auto-imported in Nuxt 3 if it's in components/
</script>