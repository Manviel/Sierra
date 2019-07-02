<template>
  <h2>Clear store</h2>
</template>

<script>
export default {
  middleware: "admin",
  beforeCreate() {
    this.$store.dispatch("auth/logout");
    this.$router.push("/login");
  }
};
</script>

