<template>
  <div class="revenue_growth">
    <div class="card_header">
      <h3>Monthly Revenue Growth</h3>
      <ul>
        <li class="nav_item"><a href="">Yearly</a></li>
        <li class="nav_item"><a href="">Monthly</a></li>
        <li class="nav_item"><a href="">Weekly</a></li>
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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.revenue_growth {
  width: 50%;
  margin: 0 12px;
  border-radius: 1.5rem;
  padding: 20px;
  background-color: var(--color-primary);
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
    ul {
      list-style: none;
      border: 1px solid black;
      display: flex;
      border: 1px solid #e5e5e5;
      border-radius: 5px;
      background-color: var(--color-secondary);
      li {
        a {
          display: block;
          text-decoration: none;
          padding: 6px 8px;
          color: var(--color-third);
        }
      }
    }
  }
}
</style>
