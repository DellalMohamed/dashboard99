<template>
  <div :class="[isDarkTheme ? 'dark-theme' : 'light-theme']" class="app_cont">
    <navBar @toggle-theme="toggleDarkMode" @toggle-sidebar="toggleSidebar" />
    <transition name="sidebare_out">
      <settingIcon
        class="setting_icon"
        :class="{
          'left-icon-arrow': direction === 'rtl',
          'right-icon-arrow': direction === 'ltr',
        }"
        @toggle-sidebar="toggleSettingSidebar"
      />
    </transition>
    <router-view :layoutType="layoutType" />
    <iconlyArrowUp
      :direction="direction"
      :class="{
        'left-icon-arrow': direction === 'rtl',
        'right-icon-arrow': direction === 'ltr',
      }"
    />
    <footerView />
    <transition :name="direction === 'rtl' ? 'slide-rtl' : 'slide-ltr'">
      <settingSidebar
        v-if="isSidebarVisible"
        @close-sidebar="toggleSettingSidebar"
        @update-direction="updateDirection"
        @toggle-layout="handleLayoutToggle"
        @layoutChange="changeLayout"
        :class="{
          'sidebar-left': direction === 'rtl',
          'sidebar-right': direction === 'ltr',
          'slide-in-ltr': direction === 'ltr' && isSidebarVisible,
          'slide-in-rtl': direction === 'rtl' && isSidebarVisible,
          'slide-out-ltr': direction === 'ltr' && !isSidebarVisible,
          'slide-out-rtl': direction === 'rtl' && !isSidebarVisible,
        }"
      />
    </transition>
  </div>
</template>
<script>
import navBar from "./components/navBar.vue";
import settingIcon from "./components/settingIcon.vue";
import iconlyArrowUp from "./components/iconlyArrowUp.vue";
import footerView from "./components/footerComp.vue";
import settingSidebar from "./components/settingSidebar.vue";
export default {
  components: {
    navBar,
    settingIcon,
    iconlyArrowUp,
    footerView,
    settingSidebar,
  },
  data() {
    return {
      isDarkTheme: false,
      isSidebarVisible: false,
      direction: "ltr",
      layoutType: "vertical",
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkTheme = !this.isDarkTheme;
    },
    toggleSettingSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    handleLayoutToggle(newLayout) {
      this.layout = newLayout;
    },
    changeLayout(newLayout) {
      this.layoutType = newLayout;
      console.log("تم تغيير التخطيط إلى:", this.layoutType); // تغيير نوع التخطيط استنادًا إلى المدخل من right-sidebare
    },
    updateDirection(newDirection) {
      this.direction = newDirection;
      console.log("Direction before updating DOM:", newDirection); // تحقق إذا تم تحديث الاتجاه
      document.documentElement.setAttribute("dir", newDirection);
      console.log("Direction updated to:", newDirection);
    },
  },
};
</script>
<style lang="scss">
@import "./css/variables.scss";
body {
  background-color: var(--color-secondary);
}
[dir="ltr"] {
  text-align: left;
}

[dir="rtl"] {
  text-align: right;
}
.setting_icon {
  position: fixed;
  bottom: 80px;
}
.left-icon-sidebar {
  left: 30px;
}

.right-icon-sidebar {
  right: 30px;
}
.left-icon-arrow {
  left: 30px;
}

.right-icon-arrow {
  right: 30px;
}

.sidebar-left {
  left: 0;
}

.sidebar-right {
  right: 0;
}
.slide-enter-active {
  animation: slide-in 1s forwards;
}

.slide-leave-active {
  animation: slide-out 1s forwards;
}
.app_cont {
  background-color: var(--color-secondary);
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
.slide-ltr-enter-active {
  animation: slide-in-ltr 0.5s forwards;
}
.slide-ltr-leave-active {
  animation: slide-out-ltr 0.5s forwards;
}

@keyframes slide-in-ltr {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slide-out-ltr {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

/* حركة ل RTL */
.slide-rtl-enter-active {
  animation: slide-in-rtl 0.5s forwards;
}
.slide-rtl-leave-active {
  animation: slide-out-rtl 0.5s forwards;
}

@keyframes slide-in-rtl {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slide-out-rtl {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
