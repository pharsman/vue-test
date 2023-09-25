<template>
  <div class="products">
    <div class="img"><img :src="data.image" alt="product img" /></div>
    <div class="title">{{ data.title }}</div>
    <div class="desc">{{ shortenedDesc }}</div>
    <div class="price">{{ data.price }} USD</div>
    <button class="button" @click="goToInner">View</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  data: Array,
});
const router = useRouter();

const goToInner = () => {
  router.push({
    path: "Inner",
    query: {
      id: props.data.id,
      price: props.data.price,
      title: props.data.title,
      desc: props.data.description,
      img: props.data.image,
    },
  });
};

const maxLength = ref(100);
const shortenedDesc = ref(
  props.data.description.slice(0, maxLength.value) +
    (props.data.description.length > maxLength.value ? "..." : "")
);
</script>

<style lang="scss" scoped>
.products {
  width: 400px;
  border: 2px solid black;
  border-radius: 10px;
  height: 400px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 16px;

  .title {
    font-weight: bold;
    color: #000000;
    text-align: center;
  }
  .desc {
    font-size: 0.875rem;
  }
  .price {
    font-weight: bold;
  }
  .img {
    width: 300px;
    height: 200px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .viewButton {
    background-color: aqua;
    padding: 10px 45px;
    border-radius: 60px;
    font-weight: bold;
    cursor: pointer;
    width: 100px;
  }

  .button {
    background-image: linear-gradient(-180deg, #37aee2 0%, #1e96c8 100%);
    border-radius: 0.5rem;
    box-sizing: border-box;
    color: #ffffff;
    display: flex;
    font-size: 16px;
    justify-content: center;
    padding: 0.625rem 1.375rem;
    text-decoration: none;
    width: 100px;
    border: 0;
    margin: auto;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    &:hover {
      background-image: linear-gradient(-180deg, #1d95c9 0%, #17759c 100%);
    }
  }
}
</style>
