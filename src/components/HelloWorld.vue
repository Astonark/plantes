<template>
  <div id="customers">
    <table class="table">
      <thead>
      <tr>
        <th>Id</th>
        <th>Titre</th>
        <th>Catégorie</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="plant in plants">
        <td>{{ plant.id }}</td>
        <td>
          <input type="text" @keyup.enter="updateProduct(plant.id, plant.description, plant.title, plant.categoryId)" v-model="plant.title">
        </td>
        <td>
          <input type="text" @keyup.enter="updateProduct(plant.id, plant.description, plant.title, plant.categoryId)" v-model="plant.description">
        </td>
        <td>{{ plant.categoryId }}</td>
        <td>
          <button @click="deleteProduct(plant.id)">Supprimer</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Crud Plants',
  data() {
    return {
      plants: null,
      updatedProduct: {
        title: null,
        description: null,
        categoryId: null
      }
    }
  },
  methods: {
    loadProducts() {
      axios.get('http://localhost:3000/products')
          .then(
              (result) => {
                this.plants = result.data
              }
          )
          .catch(
              (error) => {
                console.log(error)
              }
          )
    },
    deleteProduct(productId) {
      axios.delete('http://localhost:3000/products/' + productId)
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
    },
    updateProduct(productId, productDescription, productTitle, productCategoryId) {
      axios.put('http://localhost:3000/products/' + productId, {
        "description" : productDescription,
        "title" : productTitle,
        "categoryId" : productCategoryId
      })
          .then(
              (result) => {
                console.log(productId, plantDescription)
                this.loadProducts()
              }
          )
          .catch(
              (error) => {
                console.log('une beug oazehrhezr')
              }
          )
    },
    getCategoryName(categoryId) {

    }
  },
  mounted() {
    this.loadProducts()
  }
}
</script>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}

input[type=text], select {
  width: 80vw;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
