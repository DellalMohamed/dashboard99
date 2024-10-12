<template>
  <div class="wait_loading">
    <div class="loading_item"></div>
    <div class="loading_item"></div>
    <div class="loading_item"></div>
    <div class="loading_item"></div>
    <div class="loading_item"></div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";
.wait_loading {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  transform: translateY(-60px);
  .loading_item {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #808080;
    animation: jump 2.5s ease-in-out;
  }
  .loading_item:nth-child(1) {
    animation-delay: 0.1s;
    animation: height_animation_1 0.4s ease-in;
  }
  .loading_item:nth-child(2) {
    animation-delay: 0.2s;
    animation: height_animation_2 0.8s ease-in;
  }
  .loading_item:nth-child(3) {
    animation-delay: 0.3s;
    animation: height_animation_1 1.2s ease-in;
  }
  .loading_item:nth-child(4) {
    animation-delay: 0.4s;
    animation: height_animation_2 1.6s ease-in;
  }
  .loading_item:nth-child(5) {
    animation-delay: 0.5s;
    animation: height_animation_1 2s ease-in;
  }
}
@keyframes jump {
  50% {
    transform: translateY(-10px);
  }
}
@keyframes height_animation_1 {
  0% {
    background-color: green;
  }
  20% {
    border-radius: 2px;
  }
  50% {
    height: 40px;
    border-radius: 2px;
  }
  100% {
    border-radius: 2px;
  }
}
@keyframes height_animation_2 {
  0% {
    background-color: green;
  }
  20% {
    border-radius: 2px;
  }
  50% {
    height: 80px;
    border-radius: 2px;
  }
  100% {
    border-radius: 2px;
  }
}
</style>
