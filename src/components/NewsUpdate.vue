<template>
  <div class="news_update">
    <div class="card_header">
      <h3>News & Update</h3>
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
            <img src="../assets/download (13).png" alt="" />
          </div>
          <div class="latest_hist_head">
            <a href="">
              <h6>Google project apply reviwe</h6>
            </a>
            <p>Today’s news...</p>
          </div>
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
.news_update {
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
          width: 47px;
          height: 33px;
          border-radius: 50%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          background-color: #3eb95f;
          position: relative;
          img {
            max-width: 100%;
            height: auto;
            object-fit: cover;
          }
        }
        .latest_hist_head {
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
      }
    }
  }
}
</style>
