<template>
  <div class="setting_sidebare">
    <div class="customizer_header">
      <div class="theme_title">
        <h3>Preview Settings</h3>
        <p>Try It Real Time</p>
        <button :style="{ backgroundColor: colorPicker2 }">
          Configuration
        </button>
        <button @click="setLayout('horizontal')">Horizontal</button>
        <button @click="setLayout('vertical')">Vertical</button>
      </div>
      <div class="closeBTN_cont" @click="closesidebar">
        <a href="#">
          <font-awesome-icon
            :icon="['fas', 'times']"
            class="fa-lg close_icon"
          />
        </a>
      </div>
    </div>
    <div class="customizer_body">
      <customizerSetting />
      <sidebareIcon />
      <layoutType :direction="direction" @update-direction="updateDirection" />
      <sidebareType />
      <unlimitedColor
        :colorPicker1="colorPicker1"
        :colorPicker2="colorPicker2"
        @update:colorPicker1="updateColorPicker1"
        @update:colorPicker2="updateColorPicker2"
      />
    </div>
  </div>
</template>

<script>
import customizerSetting from "./customizerSetting.vue";
import sidebareIcon from "./sidebareIcon.vue";
import layoutType from "./layoutType.vue";
import sidebareType from "./sidebareType.vue";
import unlimitedColor from "./unlimitedColor.vue";
export default {
  props: {
    direction: {
      type: String,
      required: true,
    },
  },
  components: {
    customizerSetting,
    sidebareIcon,
    layoutType,
    sidebareType,
    unlimitedColor,
  },
  data() {
    return {
      colorPicker1: "#308e87",
      colorPicker2: "#F38E59",
      isHorizontal: false,
    };
  },
  methods: {
    closesidebar() {
      this.$emit("close-sidebar");
    },
    updateColorPicker1(newColor) {
      this.colorPicker1 = newColor;
      this.applyColors();
    },
    updateColorPicker2(newColor) {
      this.colorPicker2 = newColor;
      this.applyColors();
    },
    applyColors() {
      document.documentElement.style.setProperty(
        "--color-picker1",
        this.colorPicker1
      );
      document.documentElement.style.setProperty(
        "--color-picker2",
        this.colorPicker2
      );
    },
    updateDirection(newDirection) {
      this.$emit("update-direction", newDirection);
      console.log("sett", newDirection);
    },
    setLayout(layoutType) {
      this.$emit("layoutChange", layoutType);
      console.log(`Layout set to: ${layoutType}`);
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";
.setting_sidebare {
  position: fixed;
  top: 0;
  width: 370px;
  height: 100%;
  .customizer_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #308e87;
    .theme_title {
      display: flex;
      flex-direction: column;
      align-items: start;
      h3 {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.5px;
      }
      p {
        font-family: Nunito Sans, sans-serif;
        font-size: 14px;
        font-weight: 400;
      }
      button {
        padding: 6px 12px;
        font-size: 14px;
        font-weight: 600;
        background-color: var(--color-picker2);
        border: none;
        border-radius: 5px;
        margin-top: 0.5rem;
        cursor: pointer;
        outline: none;
        height: 38px;
      }
    }
    .closeBTN_cont {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #eff1f2;
      a {
        &:hover {
          transform: rotate(1turn);
          transition: transform 0.5s ease-in-out;
        }
        .close_icon {
          font-size: 22px;
          color: #308e87;
        }
      }
    }
  }
  .customizer_body {
    padding: 20px;
    background-color: var(--color-secondary);
    max-height: calc(100% - 80px);
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #308e87;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: #206c65;
    }
    &::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }
  }
}
</style>
