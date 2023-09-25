<template>
  <div class="sidebar" :style="{ width: sidebarWidth + 'rem' }">
    <transition name="slide">
      <div class="routes" v-if="sidebarWidth > 0">
        <router-link to="/shop">Shop</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </transition>
  </div>
  <RouterView />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { RouterView } from "vue-router";

const sidebarWidth = ref(0);

const updateSidebarWidth = () => {
  const mouseX = window.event.clientX;
  if (mouseX < 2) {
    sidebarWidth.value = 7;
  } else if (mouseX > 150) {
    sidebarWidth.value = 0;
  }
};

// Listen for mousemove events
onMounted(() => {
  window.addEventListener("mousemove", updateSidebarWidth);
});

// Clean up the event listener when the component is unmounted
onUnmounted(() => {
  window.removeEventListener("mousemove", updateSidebarWidth);
});
</script>

<style lang="scss" scoped>
.sidebar {
  width: 0;
  height: 100%;
  background-color: #031c30;
  transition: width 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
  .routes {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px 12px;
    a {
      white-space: nowrap;
      color: #eff2f4;
      font-size: 1rem;
      font-weight: 400;
      padding: 4px 8px;
      border-radius: 3.754px;
      cursor: pointer;
      &:hover {
        background-color: #667a8a;
      }
    }
  }
}

.routes-enter-active,
.routes-leave-active {
  transition: transform 0.3s ease;
}

.routes-enter-from,
.routes-leave-to {
  transform: translateX(100%);
}
.router-link-active {
  background-color: #3e4b55;
}
</style>
