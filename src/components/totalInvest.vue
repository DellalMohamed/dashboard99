<template>
  <div class="total_invest">
    <div class="card_header">
      <h3>Total Invest</h3>
      <div class="dropdown">
        <button>...</button>
      </div>
      <!--<div class="dropdown_menu">
          <a href="" class="dropdown_item"></a>
          <a href="" class="dropdown_item"></a>
          <a href="" class="dropdown_item"></a>
        </div>-->
    </div>
    <div class="card_body"></div>
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
.total_invest {
  width: 25%;
  padding: 20px;
  margin: 0 12px;
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
    padding: 17px 0;
  }
}
</style>
