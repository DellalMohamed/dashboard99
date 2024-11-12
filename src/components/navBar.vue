<template>
  <div class="nav_bar">
    <div class="logo_left_sidebarBTn">
      <img src="../assets/download.png" alt="" />
      <button>
        <img src="../assets/menu-svgrepo-com.svg" alt="" />
      </button>
    </div>
    <div class="nav-right_part">
      <div class="input_search">
        <input placeholder="Type to Search..." type="text" name="" id="" />
      </div>
      <ul class="links">
        <li class="languages">
          <select>
            <option
              v-for="option in options"
              :key="option.value"
              :value="option.value"
            >
              {{ option.text }}
            </option>
          </select>
        </li>
        <li class="theme link" @click="toggle_theme_mode">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.03009 12.42C2.39009 17.57 6.76009 21.76 11.9901 21.99C15.6801 22.15 18.9801 20.43 20.9601 17.72C21.7801 16.61 21.3401 15.87 19.9701 16.12C19.3001 16.24 18.6101 16.29 17.8901 16.26C13.0001 16.06 9.00009 11.97 8.98009 7.13996C8.97009 5.83996 9.24009 4.60996 9.73009 3.48996C10.2701 2.24996 9.62009 1.65996 8.37009 2.18996C4.41009 3.85996 1.70009 7.84996 2.03009 12.42Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li class="shop link">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            version="1.1"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g id="Layer_Grid" />

            <g id="Layer_2">
              <path
                d="M19.8,5.4C19.6,5.2,19.3,5,19,5c0-1.7-1.3-3-3-3H8C6.3,2,5,3.3,5,5C4.7,5,4.4,5.2,4.2,5.4L2.9,7.3c-0.6,0.9-0.8,2-0.5,3   C2.7,11.3,3.2,12,4,12.4V17c0,2.2,1.8,4,4,4h2h4h2c2.2,0,4-1.8,4-4v-4.6c0.8-0.5,1.3-1.2,1.6-2.1c0.3-1,0.1-2.2-0.5-3L19.8,5.4z    M8,4h8c0.6,0,1,0.4,1,1h-2H9H7C7,4.4,7.4,4,8,4z M14,7v1.8V9c0,1.1-0.9,2-2,2s-2-0.9-2-2V8.8V7H14z M5.7,11   c-0.1,0-0.3-0.1-0.4-0.1c-0.1,0-0.2-0.1-0.2-0.1c-0.4-0.2-0.6-0.5-0.7-0.9c-0.1-0.5,0-1,0.2-1.4l1-1.4H6h2v1.8c0,0.9-0.6,1.8-1.4,2   c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.3,0C5.8,11,5.8,11,5.7,11z M13,19h-2v-2c0-0.6,0.4-1,1-1   s1,0.4,1,1V19z M18,17c0,1.1-0.9,2-2,2h-1v-2c0-1.7-1.3-3-3-3s-3,1.3-3,3v2H8c-1.1,0-2-0.9-2-2v-4c0,0,0,0,0,0c0,0,0,0,0,0   c0.1,0,0.3,0,0.4,0c0.1,0,0.2,0,0.3-0.1c0.1,0,0.2,0,0.3-0.1c0.1,0,0.2-0.1,0.4-0.1c0.2-0.1,0.3-0.1,0.4-0.2c0,0,0,0,0,0   C8.3,12.3,8.7,12,9,11.6c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.3,0.2,0.4,0.3   c0.1,0.1,0.2,0.1,0.3,0.2c0.2,0.1,0.3,0.1,0.5,0.2c0.1,0,0.2,0.1,0.3,0.1C11.4,13,11.7,13,12,13s0.6,0,0.8-0.1   c0.1,0,0.2-0.1,0.3-0.1c0.2-0.1,0.4-0.1,0.5-0.2c0.1,0,0.2-0.1,0.3-0.2c0.1-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.2-0.1,0.3-0.2   c0.1-0.1,0.2-0.2,0.3-0.3c0,0,0.1,0,0.1-0.1c0.3,0.4,0.7,0.7,1.1,0.9c0,0,0,0,0,0c0.1,0.1,0.3,0.1,0.4,0.2c0.1,0,0.2,0.1,0.4,0.1   c0.1,0,0.2,0,0.3,0.1c0.1,0,0.2,0,0.3,0.1c0.1,0,0.3,0,0.4,0c0,0,0,0,0,0V17z M19.6,9.8c-0.1,0.4-0.4,0.8-0.7,0.9   c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0-0.2,0.1-0.4,0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.3,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0   c0,0-0.1,0-0.1,0c-0.8-0.3-1.4-1.1-1.4-2V7h2h0.5l1,1.4C19.7,8.8,19.8,9.4,19.6,9.8z"
              />
            </g>
          </svg>
        </li>
        <li class="notification link">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.43994V9.76994"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M15.33 18.8201C15.33 20.6501 13.83 22.1501 12 22.1501C11.09 22.1501 10.25 21.7701 9.65004 21.1701C9.05004 20.5701 8.67004 19.7301 8.67004 18.8201"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
          </svg>
        </li>
        <li
          ref="fullScreenElement"
          class="fullscreen link"
          @click="toggleFullScreen"
        >
          <font-awesome-icon :icon="['far', 'window-maximize']" />
        </li>
        <li class="book_mark link">
          <font-awesome-icon :icon="['far', 'bookmark']" />
        </li>
        <li class="cloud_mode">
          <a href="">
            <img src="../assets/cloud-rain-svgrepo-com.svg" alt="" />
            <h4>15</h4>
          </a>
        </li>
        <li @click="toggleDisplay" class="profile_nav">
          <div class="img_profile">
            <img src="../assets/download (1).png" alt="" />
          </div>
          <h5>Ava Davis</h5>
          <ul v-show="isVisible" class="profile_ul">
            <li>
              <img src="../assets/account-svgrepo-com.svg" alt="" />
              Account
            </li>
            <li>
              <img src="../assets/email-svgrepo-com.svg" alt="" />
              Inbox
            </li>
            <li>
              <img src="../assets/task-management-svgrepo-com.svg" alt="" />
              Task
            </li>
            <li>
              <img src="../assets/log-out-svgrepo-com.svg" alt="" />
              Log out
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!--<router-link to="/">Home</router-link> |
    <router-link to="/a">wait</router-link> |
    <router-link to="/about">About</router-link>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,

      options: [
        { value: "option1", text: "English", short: "EN" },
        { value: "option2", text: "Deutsch", short: "xwc" },
        { value: "option3", text: "Espanol", short: "45" },
        { value: "option4", text: "Fancais", short: "EsdN" },
        { value: "option5", text: "Portugues", short: "sdez" },
        { value: "option6", text: "العربية", short: "gtgt" },
      ],
    };
  },
  methods: {
    toggleDisplay() {
      this.isVisible = !this.isVisible;
    },

    toggle_theme_mode() {
      this.$emit("toggle-theme");
    },

    toggleFullScreen() {
      const element = document.documentElement;

      if (!document.fullscreenElement) {
        if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        }
      } else {
        if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    },
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.nav_bar {
  display: flex;
  align-items: center;
  height: 74px;
  position: fixed;
  top: 0;
  z-index: 4;
  .logo_left_sidebarBTn {
    width: 253px;
    height: 74px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 15px 16px;
    background-color: #308e87;
    button {
      img {
        width: 33px;
        height: 33px;
      }
      &::before {
        content: "";
        width: 40px;
        background-color: #6cbeb9;
      }
    }
  }
  .nav-right_part {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background-color: var(--color-primary);
    .input_search {
      margin: 0 57px;
      input {
        width: 480px;
        height: 50px;
        border: none;
        border-radius: 30px;
        padding-left: 28px;
        background-color: var(--color-secondary);
        cursor: pointer;
        &:focus {
          outline: none;
        }
      }
    }
    .links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      list-style: none;
      .languages {
        select {
          border: none;
          background-color: transparent;
          &:focus {
            outline: none;
          }
        }
      }
      .cloud_mode {
        width: 45px;
        height: 33px;
        border-radius: 15px;
        background-color: #308e87;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 30px;
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }
        img {
          width: 20px;
          height: 20px;
        }
      }
      .profile_nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        margin: 0 10px;
        position: relative;
        cursor: pointer;
        .img_profile {
          width: 33px;
          height: 33px;
          border: 1px solid #e5e5e5;
          border-radius: 50%;
          background-color: #f39159;
          display: flex;
          justify-content: center;
          align-items: start;
          overflow: hidden;
          padding: 3px 3px 0 3px;
          img {
            width: 25px;
          }
        }
        .profile_ul {
          position: absolute;
          top: 36px;
          right: 14px;
          width: 158px;
          padding: 18px;
          border-radius: 15px;
          list-style: none;
          background-color: rgb(152, 223, 152);
          li {
            padding: 10px 0;
            border-bottom: 1px solid #808080;
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 0.5rem;
            &:nth-child(1) {
              padding-top: 0;
            }
            img {
              width: 18px;
            }
          }
        }
      }
      .link {
        width: 33px;
        height: 33px;
        border-radius: 50%;
        background-color: var(--color-secondary);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .shop {
        position: relative;
        &::after {
          content: "0";
          content: "";
          position: absolute;
          width: 16px;
          height: 16px;
          top: -6px;
          right: -4px;
          border-radius: 50%;
          background-color: #308e87;
          font-size: 10px;
        }
      }
      .notification {
        position: relative;
        &::after {
          content: "4";
          position: absolute;
          width: 16px;
          height: 16px;
          top: -6px;
          right: -4px;
          border-radius: 50%;
          background-color: #308e87;
          font-size: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>
