<template>
  <div class="container">
    <Header />
    <div class="product-cont">
      <Products v-for="products in data" :key="products.id" :data="products" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Header from "../components/Header.vue";
import Products from "../components/Products.vue";
import { getProductsData } from "../services/getProductsData";
import { ProductsStore } from "../store/index";

const store = ProductsStore();

const data = ref([]);

getProductsData().then((resp) => {
  data.value = resp.data;
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  .product-cont {
    padding: 10px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 70px;
  }
}
</style>
