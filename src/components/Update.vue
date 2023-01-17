<template>
  <SiteHeader />
  <h1 class="text-center mb-3 text-info my-3 text-center">Update Restaurant</h1>
  <form>
    <div class="mb-3">
      <label for="exampleInputName" class="form-label">Name</label>
      <input
        type="text"
        class="form-control border-info"
        id="exampleInputName"
        placeholder="Name"
        v-model="restaurants.name"
      />
    </div>
    <div class="mb-3">
      <label for="address" class="form-label">Address</label>
      <input
        type="text"
        class="form-control border-info"
        id="address"
        aria-describedby="emailHelp"
        placeholder="Address"
        v-model="restaurants.address"
      />
    </div>
    <div class="mb-3">
      <label for="Contact" class="form-label">Contact</label>
      <input
        type="text"
        class="form-control border-info"
        id="Contact"
        placeholder="Contact"
        v-model="restaurants.contact"
      />
    </div>
    <div class="form-text text-success pb-2 small">
      We'll never share your info with anyone else.
    </div>
    <button
      @click="update()"
      class="btn w-25 btn-warning fw-semibold border border-dark"
      type="button"
    >
      Submit
    </button>
  </form>
  <FooterMain />
</template>

<script>
import SiteHeader from "./Header.vue";
import FooterMain from "./Footer.vue";
import axios from "axios";

export default {
  name: "UpdateRest",
  data() {
    return {
      restaurants: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  components: {
    SiteHeader,
    FooterMain,
  },
  methods: {
    async update() {
      let result = await axios.put(
        "http://localhost:3000/restaurants/" + this.$route.params.id,
        {
          name: this.restaurants.name,
          address: this.restaurants.address,
          contact: this.restaurants.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get(
      "http://localhost:3000/restaurants/" + this.$route.params.id
    );
    this.restaurants = result.data;
  },
};
</script>