<template>
  <div class="earning_card">
    <div class="card_header">
      <h3>Earnings Trend</h3>
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
  background-color: var(--color-primary);
  .card_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-weight: 700;
      font-size: 20px;
      letter-spacing: 0.5px;
      margin: 0;
      color: var(--color-third);
    }
  }
  .card_body {
    .head_body {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 1rem;
      color: #212529;
      h2 {
        font-weight: 700;
        letter-spacing: 0.5px;
        color: var(--font-color);
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
