<template>
  <div class="about">
    <h1>This is an about page</h1>
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
