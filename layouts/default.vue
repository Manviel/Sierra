<template>
  <main class="container-fluid">
    <NavBar/>
    <nuxt/>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar
  }
};
</script>