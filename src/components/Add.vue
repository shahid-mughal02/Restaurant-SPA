<template>
  <SiteHeader />
  <h1 class="text-center mb-3 text-info my-3 text-center">Add Restaurant</h1>
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
      @click="add()"
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
  name: "AddRest",
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
    async add() {
      await axios.post("http://localhost:3000/restaurants", {
        name: this.restaurants.name,
        address: this.restaurants.address,
        contact: this.restaurants.contact,
      });
      localStorage.setItem("added", "Restaurant Added Successfully");
      this.$router.push({ name: "Home" });
    },
  },
};
</script>