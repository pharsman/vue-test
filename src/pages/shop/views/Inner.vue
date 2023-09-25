<template>
  <div class="container">
    <Header />
    <div class="inner-cont">
      <div class="img"><img :src="route.query.img" alt="prod img" /></div>
      <div class="prod-info">
        <h2 class="title">{{ route.query.title }}</h2>
        <div class="not-title">
          <p class="desc">{{ route.query.desc }}</p>
          <p class="price">
            {{ balance === 0 ? route.query.price : price }} USD
          </p>
          <div class="inc-dec">
            <button @click="dec">-</button>
            <p>{{ counter }}</p>
            <button @click="inc">+</button>
          </div>
          <button class="button" :disabled="disableButton" @click="addProd">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import { useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { ProductsStore } from "../store/index";
// import { ProductsStore } from "./path-to-your-store-file";

const route = useRoute();
const store = ProductsStore();

const counter = ref(0);
const currentData = ref(route.query);
const balance = ref(0);
const disableButton = ref(false);

const inc = () => {
  counter.value++;
  balance.value += currentData.value.price;
};
const dec = () => {
  if (counter.value > 1) {
    counter.value--;
    balance.value -= currentData.value.price;
  }
};

const price = computed(() => {
  if (balance.value === 0) return "0";
  return balance.value.toFixed(3).slice(0, -1).replace(/0$/, "");
});

const addProd = () => {
  let obj = {
    id: route.query.id,
    price: route.query.price,
    title: route.query.title,
    desc: route.query.desc,
    img: route.query.img,
    count: counter.value,
    isDisabled: true,
  };
  store.setProducts(obj);
  localStorage.setItem("Product", JSON.stringify(obj));

  disableButton.value = true;
};

onMounted(() => {
  route.query.id = +route.query.id;
  route.query.price = +route.query.price;
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  .inner-cont {
    padding: 24px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 400px;
    gap: 80px;
    .img {
      min-width: 640px;
      height: 400px;
      width: 700px;
      padding: 20px 0;
      border: 2px solid black;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .prod-info {
      height: 100%;
      display: flex;
      flex-direction: column;
      height: 400px;
      justify-content: space-evenly; /* Vertically space the child elements */
      gap: 50px;
      .title {
        font-size: 40px;
      }
      .not-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
        .inc-dec {
          display: flex;
          align-items: center;
          gap: 10px;

          button {
            border: none;
            width: 30px;
            height: 30px;
            cursor: pointer;
            border-radius: 4px;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            &:active {
              background-color: #e7e7e7;
            }
          }
        }
      }

      .button {
        background-color: #fbeee0;
        border: 2px solid #422800;
        border-radius: 30px;
        box-shadow: #422800 4px 4px 0 0;
        color: #422800;
        cursor: pointer;
        display: inline-block;
        font-weight: 600;
        font-size: 18px;
        padding: 0 18px;
        line-height: 50px;
        text-align: center;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        &:hover {
          background-color: #fff;
        }
        &:active {
          box-shadow: #422800 2px 2px 0 0;
        }
        &:disabled {
          background-color: #fbeee00c;
          border: 2px solid #422800;
          border-radius: 30px;
          box-shadow: #422800 4px 4px 0 0;
          color: #42280046;
          cursor: pointer;
          display: inline-block;
          font-weight: 600;
          font-size: 18px;
          padding: 0 18px;
          line-height: 50px;
          text-align: center;
          text-decoration: none;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          transform: translate(0px, 0px);
        }
      }
    }
  }
}
</style>
