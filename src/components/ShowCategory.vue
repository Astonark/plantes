<template>
  <div>
    <h1>{{ category.title }}</h1>
    <ul>
      <li v-for="product in category.products">{{ product.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'show-category',
  data() {
    return {
      id: null,
      category: {
        'id': null,
        'title': null
      }
    }
  },
  methods: {
    loadCategory() {
      axios.get('http://localhost:3000/categories/' + this.id + "/?_embed=products")
          .then(
              (result) => {
                this.category = result.data
                console.log(result, 'sa a fonctionné')
              }
          )
          .catch(
              (error) => {
                console.log(error, 'un méchant beug est arrivé :(')
              }
          )
    }
  },
  mounted() {
    this.loadCategory()
  },
  created() {
    this.id = this.$route.params.id
  }
}
</script>
