<template>
  <div class="customizer_setting">
    <div class="cust_header">
      <h4>Theme color mode:</h4>
      <p>Choose between 3 different mix layout.</p>
    </div>
    <div class="color_body">
      <div class="color_img">
        <img src="../assets/light.b6f74025.png" alt="" />
        <div class="customer_overly"></div>
        <div class="light-setting">
          <a href="">Light</a>
        </div>
      </div>
      <div class="color_img">
        <img src="../assets/dark.fdd880c7.png" alt="" />
        <div class="customer_overly"></div>
        <div class="light-setting">
          <a href="">Dark</a>
        </div>
      </div>
      <div class="color_img">
        <img src="../assets/mix.432dfcb1.png" alt="" />
        <div class="customer_overly"></div>
        <div class="light-setting">
          <a href="">Mix</a>
        </div>
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
.customizer_setting {
  padding: 8px;
  background-color: var(--color-primary);
  box-shadow: 0 0 4px 3px rgba(185, 185, 187, 0.3);
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
  .color_body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .color_img {
      position: relative;
      width: 100px;
      height: 74px;
      border-radius: 5px;
      overflow: hidden;
      img {
        width: 100%;
      }
      &:hover .customer_overly {
        position: absolute;
        border-radius: 5px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        transition: background 0.5s ease;
      }
      &:hover .light-setting {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 1;
        transition: opacity 0.35s ease;
        z-index: 1;
      }
      .light-setting {
        a {
          text-decoration: none;
          padding: 3px 6px;
          text-align: center;
          color: #fff;
          font-size: 12px;
          border: solid 2px #fff;
          z-index: 2;
        }
      }
    }
  }
}
</style>
