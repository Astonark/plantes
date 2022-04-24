<template>
  <div class="container">
    <input type="text" v-model="product.title" placeholder="Titre du produit">
    <input type="text" v-model="product.description" placeholder="Description du produit">
    <select v-model="product.categoryId">
      <option v-for="category in categories" :value="category.id">{{ category.title }}</option>
    </select>
    <input @click="storeProduct" type="submit" value="envoyer">
  </div>

  {{ product.title }}
  {{ product.description }}
  {{ product.categoryId }}
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  data() {
    return {
      product : {
        title : null,
        description : null,
        categoryId : null
      },
      categories: null
    }
  },
  methods : {
    storeProduct() {
      axios.post('http://localhost:3000/products', this.product)
          .then(
              (result) => {
                router.push('http://192.168.1.138:8080/')
                console.log(this.product)
              }
          )
          .catch(
              (error) => {
                console.log(error, this.product)
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
    this.loadCategories()
  }
}
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;

  }

  .container input, select {
    margin-left: auto;
    margin-right: auto;
  }
</style>