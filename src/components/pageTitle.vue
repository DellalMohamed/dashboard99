<template>
  <div class="page_title">
    <div class="header_name">
      <h2>Default Dashboard</h2>
      <p>Welcome back! Let’s start from where you left.</p>
    </div>
    <div class="route_root">
      <div class="img_cont">
        <img src="../assets/home-svgrepo-com.svg" alt="" />
      </div>
      <router-link class="link"> Dashboard </router-link>
      <router-link class="link"> Default </router-link>
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
.page_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  background-color: var(--color-secondary);
  .header_name {
    text-align: start;
    h2 {
      font-weight: 700;
      font-size: 24px;
      letter-spacing: 0.5px;
      color: var(--color-third);
    }
    p {
      font-weight: 400;
      font-size: 12px;
      color: #aaa3a0;
    }
  }
  .route_root {
    display: flex;
    align-items: center;
    .img_cont {
      width: 22px;
      height: 22px;
      padding: 5px;
      border: 1px solid #e5e5e5;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 16px;
      }
    }
    .link {
      text-decoration: none;
      color: #308e87;
      &::before {
        content: "/";
        margin: 0 8px;
      }
    }
  }
}
</style>
