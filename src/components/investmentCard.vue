<template>
  <div class="investment">
    <div class="card_header">
      <h3>Audit log</h3>
      <div class="dropdown">
        <button>...</button>
      </div>
      <!--<div class="dropdown_menu">
          <a href="" class="dropdown_item"></a>
          <a href="" class="dropdown_item"></a>
          <a href="" class="dropdown_item"></a>
        </div>-->
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
.investment {
  width: 25%;
  padding: 20px;
  background-color: #fff;
  border-radius: 1.5rem;
  margin: 0 12px;
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
}
</style>
