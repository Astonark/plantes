<template>
  <div class="about">
    <h1>Ajouter un produit</h1>
    <add-product></add-product>
  </div>
</template>

<script>
import AddProduct from "@/components/AddProduct";

export default {
  name: 'AboutView',
  components: {
    AddProduct
  }
}

</script>
