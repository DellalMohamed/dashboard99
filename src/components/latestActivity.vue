<template>
  <div class="latest_Activity">
    <div class="card_header">
      <h3>Latest Activity</h3>
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
        <li v-for="i in 7" :key="i">
          <div class="img_cont">
            <img src="../assets/download (4).png" alt="" />
          </div>
          <div class="latest_hist_head">
            <a href="">
              <h6>Added new repository</h6>
            </a>
            <p>Fabpot/symfony-docker</p>
          </div>
          <span>2 hours</span>
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
.latest_Activity {
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
    margin-top: 17px;
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 17px;
      li {
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
        }
        .latest_hist_head {
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: start;
          flex-grow: 1;
          a {
            color: var(--color-third);
            text-decoration: none;
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
          background-color: var(--color-secondary);
        }
      }
    }
  }
}
</style>
