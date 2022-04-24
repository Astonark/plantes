<template>
  <div>
    <div id="table">
      <table class="table">
        <thead>
        <tr>
          <th>Id</th>
          <th>Nom</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="category in categories">
          <td>{{ category.id }}</td>
          <td><input type="text" @keyup.enter="updateProduct(category.id, category.description, category.title, category.categoryId)" v-model="category.title"></td>
          <td>{{ category.categoryId }}</td>
          <td><button @click="deleteCategory(category.id)">Supprimer</button></td>
          <td><router-link :to="{path: '/category/' + category.id}">Voir</router-link></td>
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
  methods: {
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
    },
    deleteCategory(categoryId) {
      axios.delete('http://localhost:3000/categories/' + categoryId)
          .then(
              (result) => {
                console.log('sa a fonctionné')
                this.loadProducts()
              }
          )
          .catch(
              (error) => {
                console.log('un bueg est survenur :((((')
                this.loadProducts()
              }
          )
    }
  },
  mounted() {
    this.loadCategories()
  }
}
</script>