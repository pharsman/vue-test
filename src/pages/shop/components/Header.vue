<template>
  <div class="header-container">
    <h1 @click="goHome">Simple Shop System</h1>
    <div class="cart-count">
      <h2>
        <div class="count">0</div>
        Cart
      </h2>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => {
  router.push("/Shop");
};
</script>

<style lang="scss" scoped>
.header-container {
  padding: 24px 20px;
  background-color: pink;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 55px;
    color: white;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }
  .cart-count {
    position: relative;
    font-size: 24px;
    cursor: pointer;
    color: yellow;
    font-weight: bold;
    .count {
      position: absolute;
      top: 0;
      left: -12px;
      width: 20px;
      height: 20px;
      border-radius: 60%;
      background-color: red;
      font-size: 12px;
      text-align: center;
      line-height: 20px;
      color: #ffffff;
    }
  }
}
</style>
