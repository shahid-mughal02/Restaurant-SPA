<template>
  <table class="table table-striped table-hover">
    <thead class="bg-info text-light">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Contact</th>
        <th scope="col">Address</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in restaurants" :key="item.id">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <td>
          <router-link
            :to="'/update/' + item.id"
            class="btn btn-sm btn-success me-2"
            >Update</router-link
          >
          <button
            @click="remove()"
            :value="(sno = item.id)"
            class="btn btn-sm btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
    <tfoot class="table-warning text-end">
      <tr class="">
        <td class="lead" colspan="5">
          This is the list of all Restaurants in the city.
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import axios from "axios";

export default {
  name: "RestaurantList",
  data() {
    return {
      sno: "",
      restaurants: [],
    };
  },
  methods: {
    async remove() {
      console.log(this.sno)
      let result = await axios.delete(
        "http://localhost:3000/restaurants/" + this.sno
      );
      if (result.status == 200) {
        let list = await axios.get("http://localhost:3000/restaurants");
        this.restaurants = list.data;
      }
    },
  },
  // api takes sometimes thats why they always return promise
  //thereore we use async and await
  async mounted() {
    //Getting Restaurant List
    let result = await axios.get("http://localhost:3000/restaurants");
    this.restaurants = result.data;
  },
};
</script>