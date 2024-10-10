<template>
  <navBar />
  <settingIcon class="setting_icon" />
  <router-view />
  <iconlyArrowUp />
  <footerView />
</template>
<script>
import navBar from "./components/navBar.vue";
import settingIcon from "./components/settingIcon.vue";
import iconlyArrowUp from "./components/iconlyArrowUp.vue";
import footerView from "./components/footerComp.vue";
export default {
  components: {
    navBar,
    settingIcon,
    iconlyArrowUp,
    footerView,
  },
};
</script>
<style lang="scss">
body {
  background-color: #f9f7f6;
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
