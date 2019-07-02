<template>
  <form class="card-body m-1" v-on:submit.prevent="onSubmit">
    <h2>Add Comment</h2>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" placeholder="Enter name" v-model="name" required />
    </div>
    <div class="form-group">
      <label>Message</label>
      <input type="text" class="form-control" placeholder="Enter text" v-model="text" required />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      text: ""
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        name: this.name,
        text: this.text
      };
    }
  }
};
</script>

