<template>
  <div :class="{ dark: isDark }">
    <button @click="toggleDarkMode">Toggle Theme</button>
    <navBar />
    <settingIcon class="setting_icon" />
    <router-view />
    <iconlyArrowUp />
    <footerView />
  </div>
</template>
<script>
import navBar from "./components/navBar.vue";
import settingIcon from "./components/settingIcon.vue";
import iconlyArrowUp from "./components/iconlyArrowUp.vue";
import footerView from "./components/footerComp.vue";
import { useDark } from "@vueuse/core";
export default {
  components: {
    navBar,
    settingIcon,
    iconlyArrowUp,
    footerView,
  },
  data() {
    return {
      isDark: useDark(),
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark;
    },
  },
};
</script>
<style lang="scss">
@import "./css/variables.scss";
body {
  background-color: $light-two;
}
.setting_icon {
  position: fixed;
  bottom: 80px;
  right: 30px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
