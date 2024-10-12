<template>
  <div :class="themeClass" class="audit_log">
    <div class="card_header">
      <h3>Audit log</h3>
      <button @click="toggleTheme">Toggle Theme</button>
      <div class="dropdown">
        <button>...</button>
      </div>
      <!--<div class="dropdown_menu">
        <a href="" class="dropdown_item"></a>
        <a href="" class="dropdown_item"></a>
        <a href="" class="dropdown_item"></a>
      </div>-->
    </div>
    <div class="card_body" :class="themeClass">
      <ul>
        <li>
          <div class="img_cont">
            <img src="../assets/download (4).png" alt="" />
          </div>
          <div class="audit">
            <a href="">
              <h6>Route...</h6>
            </a>
            <p>Andre Sluczka</p>
          </div>
          <span>2 hours</span>
        </li>
        <li>
          <div class="img_cont">
            <img src="../assets/download (4).png" alt="" />
          </div>
          <div class="audit">
            <a href="">
              <h6>Route...</h6>
            </a>
            <p>Andre Sluczka</p>
          </div>
          <span>2 hours</span>
        </li>
        <li>
          <div class="img_cont">
            <img src="../assets/download (4).png" alt="" />
          </div>
          <div class="audit">
            <a href="">
              <h6>Route...</h6>
            </a>
            <p>Andre Sluczka</p>
          </div>
          <span :class="themeClass">2 hours</span>
        </li>
        <li>
          <div class="img_cont">
            <img src="../assets/download (4).png" alt="" />
          </div>
          <div class="audit">
            <a href="">
              <h6>Route...</h6>
            </a>
            <p>Andre Sluczka</p>
          </div>
          <span>2 hours</span>
        </li>
        <li>
          <div class="img_cont">
            <img src="../assets/download (4).png" alt="" />
          </div>
          <div class="audit">
            <a href="">
              <h6>Route...</h6>
            </a>
            <p>Andre Sluczka</p>
          </div>
          <span>2 hours</span>
        </li>
        <li>
          <div class="img_cont last-item">
            <img src="../assets/download (4).png" alt="" />
          </div>
          <div class="audit">
            <a href="">
              <h6>Route...</h6>
            </a>
            <p>Andre Sluczka</p>
          </div>
          <span>2 hours</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  computed: {
    themeClass() {
      return {
        "dark-theme": this.isDarkMode,
        "light-theme": !this.isDarkMode,
        "secondary-bg": true,
      };
    },
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";
.light-theme {
  background-color: $light-one;
  .secondary-bg {
    background-color: $light-two;
  }
}

.dark-theme {
  background-color: $dark-one;

  .secondary-bg {
    background-color: $dark-two;
  }
}
.audit_log {
  width: 25%;
  padding: 20px;
  background-color: $light-one;
  border-radius: 1.5rem;
  .card_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
    .dropdown {
      button {
        width: 42px;
        height: 31px;
        border-radius: 5px;
      }
    }
  }
  .card_body {
    padding: 17px 0;
    ul {
      list-style: none;
      li {
        padding: 17px 0;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 8px;
        .img_cont {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          background-color: #3eb95f;
          position: relative;
          img {
            width: 16px;
          }
          &:not(.last-item)::before {
            position: absolute;
            content: "";
            width: 2px;
            height: 75%;
            top: 55%;
            left: 45%;
            transform: translateY(100%);
            background-color: #e5e5e5;
          }
        }
        .audit {
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: start;
          flex-grow: 1;
          a {
            text-decoration: none;
            color: #292929;
            h6 {
              font-size: 14px;
              line-height: 1;
              letter-spacing: 0.5px;
            }
            p {
              color: #aaa3a0;
            }
          }
        }
        span {
          width: 70px;
          height: 35px;
          padding: 6px 8px;
          font-weight: 600;
          font-size: 14px;
          color: #2c3e50;
          border: 1px solid #e5e5e5;
          border-radius: 5px;
          line-height: 22px;
          background-color: $light-two;
        }
      }
    }
  }
}
</style>
