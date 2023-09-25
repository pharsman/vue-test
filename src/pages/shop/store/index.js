import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const ProductsStore = defineStore("ProductsStore", () => {
  const selectedProducts = ref([]);

  const setProducts = (val) => {
    selectedProducts.value.push(val);
  };
  const removeProduct = (id) => {
    selectedProducts.value = selectedProducts.value.filter(
      (el) => el.id !== id
    );
  };

  const replaceProduct = (val) => {
    selectedProducts.value = val;
  };

  return { selectedProducts, setProducts, removeProduct, replaceProduct };
});
