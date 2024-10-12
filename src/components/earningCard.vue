<template>
  <div class="earning_card">
    <div class="card_header">
      <h3>Earnings Trend</h3>
      <div class="drop_down">
        <select class="select" name="" id="">
          <option value="">Weekly</option>
          <option value="">Monthly</option>
          <option value="">Yearly</option>
        </select>
      </div>
    </div>
    <div class="card_body">
      <div class="head_body">
        <h2>$24,875</h2>
        <span>
          36.28%
          <img src="../assets/arrow-drop-up-svgrepo-com.svg" alt="" />
        </span>
      </div>
      <div class="body">
        <img src="../assets/istockphoto-1487393114-612x612.jpg" alt="" />
      </div>
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
.earning_card {
  width: 25%;
  padding: 20px 20px 0;
  margin: 0 12px;
  border-radius: 1.5rem;
  background-color: $light-one;
  .card_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-weight: 700;
      font-size: 20px;
      letter-spacing: 0.5px;
      margin: 0;
    }
    .drop_down {
      select {
        width: 100px;
        height: 31px;
        padding: 4px 14px;
        border-radius: 5px;
        background-color: $light-two;
        &:focus {
          outline: none;
        }
      }
    }
  }
  .card_body {
    .head_body {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 1rem;
      h2 {
        font-weight: 700;
        letter-spacing: 0.5px;
      }
      span {
        font-size: 14px;
        color: #308e87;
        display: flex;
        align-items: center;
        img {
          width: 40px;
          margin-left: -7px;
        }
      }
    }
    .body {
      img {
        width: 264px;
        height: 225px;
      }
    }
  }
}
</style>
