<template>
  <div class="welcome_banner">
    <div class="welcome_card">
      <div class="card_header">
        <img src="../assets/welcome-bg.b34f6087.png" alt="" />
        <img class="img_2" src="../assets/download (5).png" alt="" />
        <img class="img_3" src="../assets/download (6).png" alt="" />
        <img class="img_4" src="../assets/download (7).png" alt="" />
        <img class="img_5" src="../assets/download (8).png" alt="" />
        <img class="img_6" src="../assets/download (9).png" alt="" />
      </div>
      <div class="card_body">
        <div class="hello_cont">
          <h1>Hello, Amirreza</h1>
          <img src="../assets/hand.71e0baca.png" alt="" />
        </div>
        <p>Welcome back! Let’s start from where you left.</p>
        <div class="card_bottom">
          <button>Whats New!</button>
          <div class="time_box">
            <img src="../assets/time-square-svgrepo-com.svg" alt="" />
            <h5>11:44 AM</h5>
          </div>
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
@import "../css/variables.scss";
.welcome_banner {
  width: 33%;
  background-color: var(--color-primary);
  border-radius: 1.5rem;
  overflow: hidden;
  .welcome_card {
    .card_header {
      width: 100%;
      height: 196px;
      overflow: hidden;
      position: relative;
      background-color: #308e87;
      img:first-child {
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
      }
      .img_2 {
        position: absolute;
        top: 40px;
        right: 4px;
        z-index: 2;
        animation: up-down 4s infinite;
      }
      .img_3 {
        position: absolute;
        top: -1px;
        left: 4px;
        z-index: 2;
        animation: myOrbit 9s linear infinite;
      }
      .img_4 {
        position: absolute;
        top: 70px;
        left: 0px;
        z-index: 2;
        animation: up-down 4s infinite;
      }
      .img_5 {
        position: absolute;
        top: 140px;
        left: 120px;
        z-index: 2;
        animation: move1 8s linear 0s infinite;
      }
      .img_6 {
        position: absolute;
        top: -12px;
        left: 179px;
        z-index: 2;
        animation: myOrbit 9s linear infinite;
      }
    }
    .card_body {
      padding: 20px;
      letter-spacing: 0.5px;
      .hello_cont {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 7px;
        h1 {
          font-weight: 700;
          font-size: 30px;
          margin: 0;
          color: var(--color-third);
        }
        img {
          width: 30px;
          cursor: pointer;
          animation: wave-animation 2.5s infinite;
        }
      }
      p {
        text-align: start;
        margin: 0 0 19px;
        color: var(--font-color);
      }
      .card_bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        button {
          height: 30px;
          padding: 6px 12px;
          border: none;
          border-radius: 60px;
          background-color: #308e87;
          color: #fff;
        }
        .time_box {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--color-secondary);
          border-radius: 6px;
          border: 1px solid black;
          width: 115px;
          height: 41px;
          padding: 10px 8px;
          img {
            width: 30px;
          }
        }
      }
    }
  }
}
</style>
