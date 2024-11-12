<template>
  <div class="sidebare_type">
    <div class="cust_header">
      <h4>Sidebar type:</h4>
      <p>Choose between 2 different sidebar types.</p>
    </div>
    <div class="sidebare_body">
      <ul>
        <li>
          <input type="radio" name="" id="" />
          <label for="">
            <font-awesome-icon :icon="['far', 'square']" />
            <span>Vertical</span>
          </label>
        </li>
        <li>
          <input type="radio" name="" id="" />
          <label for="">
            <font-awesome-icon :icon="['fas', 'table-cells-large']" />
            <span> Horizontal</span>
          </label>
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
.sidebare_type {
  padding: 8px;
  background-color: var(--color-primary);
  box-shadow: 0 0 4px 3px hsla(240, 1%, 73%, 0.3);
  border-radius: 0.5rem;
  border-top: 1px solid #308e87;
  border-width: 3px;
  margin-bottom: 16px;
  .cust_header {
    margin-bottom: 8px;
    text-align: start;
    h4 {
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 1px;
    }
    p {
      font-family: Nunito Sans, sans-serif;
      font-size: 14px;
      color: #aaa3a0;
      margin-bottom: 1rem;
    }
  }
  .sidebare_body {
    padding-left: 0;
    margin-bottom: 0;
    ul {
      display: flex;
      justify-content: center;
      gap: calc(6.4px + 0.5vw);
      list-style: none;
      li {
        border: 2px solid #dee2e6;
        padding: 8px 15px;
        input[type="radio"] {
          appearance: none;
          border: 2px solid #dee2e6;
          background-color: white;
          cursor: pointer;
          margin-right: 8px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
