<template>
  <form class="card-body m-1" v-on:submit.prevent="onSubmit">
    <h2>Admin login panel</h2>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" placeholder="Enter name" v-model="name" required />
    </div>
    <div class="form-group">
      <label>Password</label>
      <input
        type="password"
        class="form-control"
        placeholder="Enter password"
        v-model="password"
        required
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      const userData = {
        name: this.name,
        password: this.password
      };

      this.$store.dispatch("auth/login", userData);
      this.$router.push("/");
    }
  }
};
</script>