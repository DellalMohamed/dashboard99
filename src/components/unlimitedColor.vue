<template>
  <div class="unlimited_color">
    <div class="cust_header">
      <h4>Unlimited color:</h4>
    </div>
    <div class="sidebare_body">
      <ul>
        <li>
          <input
            id="ColorPicker1"
            v-model="localColorPicker1"
            type="color"
            name=""
          />
        </li>
        <li>
          <input
            id="ColorPicker2"
            v-model="localColorPicker2"
            type="color"
            name=""
          />
        </li>
      </ul>
      <button @click="applyColors">Apply</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["colorPicker1", "colorPicker2"],
  data() {
    return {
      localColorPicker1: this.colorPicker1,
      localColorPicker2: this.colorPicker2,
    };
  },
  methods: {
    applyColors() {
      document.documentElement.style.setProperty(
        "--color-picker1",
        this.localColorPicker1
      );
      document.documentElement.style.setProperty(
        "--color-picker2",
        this.localColorPicker2
      );

      this.$emit("update:colorPicker1", this.localColorPicker1);
      this.$emit("update:colorPicker2", this.localColorPicker2);
    },
  },
};
</script>
<style lang="scss">
.unlimited_color {
  padding: 8px;
  background-color: var(--color-primary);
  box-shadow: 0 0 4px 3px hsla(240, 1%, 73%, 0.3);
  border-radius: 0.5rem;
  border-top: 1px solid #308e87;
  border-width: 3px;
  margin-bottom: 16px;
  .cust_header {
    margin-bottom: 8px;
    text-align: start;
    display: flex;
    justify-content: start;
    align-items: center;
    h4 {
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 1px;
    }
    p {
      font-family: Nunito Sans, sans-serif;
      font-size: 14px;
      color: #aaa3a0;
      margin-bottom: 1rem;
    }
  }
  .sidebare_body {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 12px;
    gap: 2px;
    ul {
      display: flex;
      justify-content: start;
      align-items: start;
      gap: 2px;
      list-style: none;
      li {
        max-width: 35px;
        max-height: 35px;
        padding: 2px 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #aaa3a0;
        input[type="color"] {
          appearance: none;
          width: 33px;
          height: 33px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          background-color: transparent;
        }
      }
    }
    button {
      padding: 6px 12px;
      background-color: #308e87;
      font-size: 14px;
      font-weight: 600;
      border: 1px solid #308e87;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
