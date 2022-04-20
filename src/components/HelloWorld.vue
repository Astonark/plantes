<template>
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
        <tr v-for="plant in plants">
        <td> {{ plant.id }} </td>
        <td> {{ plant.description }} </td>
        <td> {{ plant.categoryId }} </td>
      </tr>
      </tbody>
    </table>
    <div>
      <input type="text" placeholder="Ajouter un film">
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Crud Plants',
  data() {
    return {
      plants : null,
      inputPlant : {

      }
    }
  },
  methods : {
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

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
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
</style>
