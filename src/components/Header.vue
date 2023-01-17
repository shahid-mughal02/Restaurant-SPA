<template>
  <header class="border-bottom">
    <nav class="navbar navbar-expand-sm bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/logo.png" alt="Restaurant"
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/add"
                >Add Restaurants</router-link
              >
            </li>
            <li class="nav-item">
              <a
                class="btn btn-sm btn-outline-danger mt-2"
                @click="logOut()"
                href="#"
                >LogOut</a
              >
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-info text-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "SiteHeader",
  methods: {
    logOut() {
      localStorage.clear();
      this.$router.push({ name: "LogIn" });
    },
  },
};
</script>