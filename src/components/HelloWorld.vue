<template>
  <router-link class="link" to="/create-product">Créer un produit</router-link>
  <div id="table">
    <table class="table">
      <thead>
      <tr>
        <th class="w-10">Id</th>
        <th class="w-30">Titre</th>
        <th>Description</th>
        <th>Catégorie Id</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="plant in plants">
        <td class="w-10">{{ plant.id }}</td>
        <td class="w-30">
          <input type="text" @keyup.enter="updateProduct(plant.id, plant.description, plant.title, plant.categoryId)" v-model="plant.title">
        </td>
        <td class="w-30">
          <textarea rows="3" cols="80" type="text" @keyup.enter="updateProduct(plant.id, plant.description, plant.title, plant.categoryId)" v-model="plant.description"></textarea>
        </td>
        <td class="w-15">{{ plant.category.title }}</td>
        <td class="w-15">
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
      categories: null,
      updatedProduct: {
        title: null,
        description: null,
        categoryId: null
      }
    }
  },
  methods: {
    loadProducts() {
      axios.get('http://localhost:3000/products?_expand=category')
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
    loadCategories() {
      axios.get('http://localhost:3000/categories')
          .then(
              (result) => {
                this.categories = result.data
              }
          )
          .catch(
              (error) => {
                console.log(error)
              }
          )
    }
  },
  mounted() {
    this.loadProducts()
    this.loadCategories()
  }
}
</script>

<style >
* {
  box-sizing: border-box;
}
.link {
  font-weight: bold;
  color: blue;
  text-decoration: none;
  margin: 10px;
  font-size: 1.5rem;
}

.w-10 {
  width: 10%;
}

.w-15 {
  width: 15%;

}

.w-30 {
  width: 30%;

}
#table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 80%;
  background-color: rgba(255, 255, 255, 0.5);
}

td, th {
  padding: 10px 20px;
}

#app div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  padding-top: 50px;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#table tr:hover {
  background-color: #ddd;
}

#table th {
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  color: black;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea {
  width: 100%;
}

.table {
  margin: auto;
}
</style>
