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
          <div class="latest_his_head">
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
.latest_Activity {
  width: 25%;
  padding: 20px;
  background-color: #fff;
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
        }
        .latest_his_head {
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: start;
          flex-grow: 1;
          a {
            color: #292929;
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
          background-color: #f9f7f6;
        }
      }
    }
  }
}
</style>
