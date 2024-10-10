<template>
  <div class="wait_Intro">
    <wait-loading />
  </div>
</template>

<script>
import waitLoading from "@/components/waitLoading.vue";
export default {
  components: { waitLoading },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.wait_Intro {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
