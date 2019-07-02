<template>
  <main class="row p-3">
    <div class="col-3">
      <NavBar />
    </div>
    <div class="col-9">
      <nuxt />
    </div>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: { NavBar }
};
</script>