<template>
  <div
    :class="[
      'left_sidebare',
      { 'sidebar-horizontal': isHorizontal },
      { active: isVisible },
      layoutType,
      direction === 'rtl' ? 'left-sidebare-RTL' : 'left-sidebare-LTR',
    ]"
  >
    <div>content</div>
    <div>content</div>
    <div>content 45</div>
    <div>content</div>
    <div>content kjkhkhk</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    layoutType: {
      type: String,
      default: "vertical",
    },
    direction: {
      type: String,
      default: "ltr",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.left_sidebare {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  z-index: 4;
  margin-top: 74px;
  transform: translateX(-100%);
  transition: transform 0.5s ease-in-out, flex-direction 0.5s ease-in-out;
  &.left-sidebare-LTR {
    right: 0;
  }
  &.left-sidebare-RTL {
  }

  div {
    width: 233px;
    padding: 20px;
    text-align: center;
    background-color: cadetblue;
  }
}

.vertical {
  height: 100vh;
  width: 253px;
  flex-direction: column;
  background-color: #f1f1f1;
  padding: 20px;
  z-index: 1;
  overflow-y: scroll;
}

.horizontal {
  max-height: 100px;
  width: 100%;
  flex-direction: row;
  align-items: start;
  background-color: aquamarine;
  padding: 0;
  z-index: 3;
  transform: translateX(0);
}
</style>
