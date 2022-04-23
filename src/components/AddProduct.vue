<template>
  <div class="container">
    <input type="text" v-model="product.title" placeholder="Titre du produit">
    <input type="text" v-model="product.description" placeholder="Description du produit">
    <input type="text" v-model="product.categoryId" placeholder="Catégorie">
    <input @click="storeProduct" type="submit" value="envoyer">
  </div>

  {{ product.title }}
  {{ product.description }}
  {{ product.categoryId }}
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      product : {
        title : null,
        description : null,
        categoryId : null
      }
    }
  },
  methods : {
    storeProduct() {
      axios.post('http://localhost:3000/products', this.product)
          .then(
              (result) => {
                console.log(this.product)
              }
          )
          .catch(
              (error) => {
                console.log(error, this.product)
              }
          )
    }
  }
}
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;

  }

  .container input {
    margin-left: auto;
    margin-right: auto;
  }
</style>