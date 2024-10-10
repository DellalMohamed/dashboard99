<template>
  <div class="iconly-Arrow-Up">
    <img src="../assets/arrowup-svgrepo-com.svg" alt="" />
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
.iconly-Arrow-Up {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 30px;
  bottom: 30px;
  background-color: #308e87;
  box-shadow: 0 0 10px #308e87;
  opacity: 0.5;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
  img {
    width: 14px;
    height: 14px;
  }
}
</style>
