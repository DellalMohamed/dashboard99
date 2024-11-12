<template>
  <div class="layout_type">
    <div class="cust_header">
      <h4>Layout type:</h4>
      <p>Choose between 3 different layout types.</p>
    </div>
    <div class="sidebare_body">
      <ul>
        <li>
          <input
            type="radio"
            name="layout"
            id="ltr"
            value="ltr"
            v-model="layoutType"
            @change="setLTR"
          />
          <label for="ltr">
            <span>LTR</span>
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="layout"
            id="rtl"
            value="rtl"
            v-model="layoutType"
            @change="setRTL"
          />
          <label for="rtl">
            <span>RTL</span>
          </label>
        </li>
        <li>
          <input type="radio" name="layout" id="box" value="box" />
          <label for="box">
            <span>BOX</span>
          </label>
        </li>
      </ul>
    </div>
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
      layoutType: this.direction,
    };
  },
  methods: {
    setLTR() {
      this.layoutType = "ltr";
      this.$emit("update-direction", "ltr");
      console.log("Direction set to:", this.layoutType);
    },
    setRTL() {
      this.layoutType = "rtl";
      this.$emit("update-direction", "rtl");
      console.log("Direction set to:", this.layoutType);
    },
  },
  watch: {
    direction(newDirection) {
      this.layoutType = newDirection;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../css/variables.scss");
.layout_type {
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
    ul {
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      li {
        padding-left: 1.5em;
        margin-bottom: 1.25rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        input[type="radio"] {
          appearance: none;
          width: 15px;
          height: 15px;
          border: 1px solid #555;
          border-radius: 50%;
          background-color: #fff;
          cursor: pointer;
          &:checked {
            background-color: #308e87;
            border-color: #308e87;
            position: relative;
            &::after {
              content: "";
              display: block;
              width: 8px;
              height: 8px;
              background-color: white;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
      }
    }
  }
}
</style>
