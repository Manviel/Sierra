<template>
  <form class="card-body m-1" v-on:submit.prevent="onSubmit">
    <h2>Create post</h2>
    <div class="form-group">
      <label>Header</label>
      <input type="text" class="form-control" placeholder="Header" v-model="header" required />
    </div>
    <div class="form-group">
      <label>Title</label>
      <input type="text" class="form-control" placeholder="Title" v-model="title" required />
    </div>
    <div class="form-group">
      <label>Text</label>
      <input type="text" class="form-control" placeholder="Text" v-model="text" required />
    </div>
    <div class="form-group">
      <label>Date</label>
      <input type="date" class="form-control" v-model="date" required />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  middleware: "admin",
  data() {
    return {
      header: "",
      title: "",
      text: "",
      date: null
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        header: this.header,
        title: this.title,
        text: this.text,
        date: this.date
      };

      this.$store.dispatch("post/create", formData);
      this.$router.push("/");
    }
  }
};
</script>

