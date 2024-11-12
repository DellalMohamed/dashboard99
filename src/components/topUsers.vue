<template>
  <div class="top_users">
    <div class="card_header">
      <h3>Top Users</h3>
      <div class="dropdown">
        <button>...</button>
      </div>
      <!--<div class="dropdown_menu">
            <a href="" class="dropdown_item"></a>
            <a href="" class="dropdown_item"></a>
            <a href="" class="dropdown_item"></a>
          </div>-->
    </div>
    <div class="card_body">
      <ul>
        <li v-for="item in 7" :key="item">
          <div class="user_intro">
            <div class="user_img_cont">
              <img src="../assets/download (12).png" alt="" />
            </div>
            <div class="user_name">
              <a href="">
                <h6>Alice Goodwin</h6>
              </a>
              <p>
                <img src="../assets/location-svgrepo-com.svg" alt="" />
                Texas
              </p>
            </div>
          </div>
          <button>Completed</button>
          <span>$2500.00</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";
.top_users {
  margin: 0 12px;
  width: 25%;
  padding: 20px;
  background-color: var(--color-primary);
  border-radius: 1.5rem;
  .card_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.5px;
      color: var(--color-third);
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
    padding-top: 8px;
    ul {
      list-style: none;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
        .user_intro {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          .user_img_cont {
            width: 31px;
            height: 31px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(48, 142, 135, 0.1);
            border: 2px solid rgba(48, 142, 135, 0.1);
            border-radius: 50%;
            img {
              width: 40px;
            }
          }
          .user_name {
            a {
              text-decoration: none;
              h6 {
                font-size: 14px;
                font-weight: 600;
                color: var(--color-third);
              }
            }
            p {
              display: flex;
              justify-content: start;
              align-items: center;
              font-weight: 600;
              color: var(--font-color);
              img {
                width: 13px;
              }
            }
          }
        }
        button {
          display: none;
        }
        span {
          font-weight: 600;
          color: var(--font-color);
        }
      }
    }
  }
}
</style>
