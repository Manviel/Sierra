<template>
  <main>
    <NavBar/>
    <div class="container">
      <nuxt/>
    </div>
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