<template>
  <div
    class="iconly-Arrow-Up scroll-to-top"
    v-if="isVisible_2"
    @click="scrollToTop"
    :style="{
      left: direction === 'rtl' ? '30px' : 'auto',
      right: direction === 'ltr' ? '30px' : 'auto',
    }"
  >
    <img src="../assets/arrowup-svgrepo-com.svg" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isVisible_2: false,
    };
  },
  methods: {
    checkScroll() {
      this.isVisible_2 = window.scrollY > 400;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.checkScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.checkScroll);
  },
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
  bottom: 30px;
  background-color: #308e87;
  box-shadow: 0 0 10px #308e87;
  opacity: 0.5;
  transition: opacity 0.3s ease;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  img {
    width: 14px;
    height: 14px;
  }
}
</style>
