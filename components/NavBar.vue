<template>
  <nav class="nav flex-column nav-pills">
    <NuxtLink class="nav-link" to="/">Home</NuxtLink>
    <NuxtLink class="nav-link" to="/post/create">Add post</NuxtLink>
    <NuxtLink class="nav-link" to="/login">Log in</NuxtLink>
    <NuxtLink class="nav-link" to="/logout">Log out</NuxtLink>
  </nav>
</template>

<style scoped>
.router-link-exact-active {
  color: #fff;
  background-color: #007bff;
  border-radius: 0.25rem;
}
</style>
