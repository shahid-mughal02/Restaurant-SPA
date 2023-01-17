<template>
  <div class="container py-3" style="max-width: 600px">
    <div class="logo text-center">
      <img src="../assets/logo.png" alt="" />
    </div>
    <h1 class="text-center text-info mt-2">Sign Up</h1>
    <form>
      <div class="mb-3">
        <label for="exampleInputName" class="form-label">Name</label>
        <input
          type="text"
          class="form-control border-info"
          id="exampleInputName"
          placeholder="Name"
          v-model="name"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control border-info"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Email"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control border-info"
          id="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="form-text text-success pb-2 small">
        We'll never share your info with anyone else.
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <router-link class="btn btn-sm btn-outline-danger" to="/log-in"
          >LogIn</router-link>
        <button
          @click="signUp()"
          class="btn w-25 btn-warning fw-semibold border border-dark"
          type="button"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      alert: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/user", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>