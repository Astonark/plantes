<template>
<div>
  <div id="customers">
    <table class="table">
      <thead>
      <tr>
        <th>Id</th>
        <th>Nom</th>
        <th>Catégorie</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="category in categories">
        <td>{{ category.id }}</td>
        <td><input type="text" @keyup.enter="updateProductDescription(category.id, category.description)" v-model="category.description"></td>
        <td>{{ category.categoryId }}</td>
        <td><button>Supprimer</button></td>
      </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: 'categories',
  data() {
    return {
      categories: null
    }
  },
  methods : {
    loadCategories() {
      axios.get('http://localhost:3000/categories')
          .then(
              (result) => {
                this.categories = result.data
                console.log(result, 'sa a fonctionné')
              }
          )
          .catch(
              (error) => {
                console.log(error, 'un méchant beug est arrivé :(')
              }
          )
    }
  }
}
</script>

<style>

</style>