<template>
  <SiteHeader />
  <h1 class="text-center mb-3 text-info my-3">Welcome {{ username }}</h1>
  <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="added != null">
    <strong>Added!</strong> {{ added }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      @click="removeAdded()"
    ></button>
  </div>
  <Restaurants />
  <FooterMain />
</template>

<script>
import SiteHeader from "./Header.vue";
import Restaurants from "./Restaurants.vue";
import FooterMain from "./Footer.vue";

export default {
  name: "HomePage",
  data() {
    return {
      username: "",
      added: "",
      restaurants: [],
    };
  },
  components: {
    SiteHeader,
    Restaurants,
    FooterMain,
  },
  methods: {
    removeAdded() {
      localStorage.removeItem("added");
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    let addText = localStorage.getItem("added");
    if(addText != ''){
      this.added = addText;
    }
    console.log(JSON.parse(user))
    if (user) {
      this.username = JSON.parse(user).name;
    }
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>