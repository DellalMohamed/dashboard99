<template>
  <div style="display: flex; flex-direction: column">
    <div class="defaut_dashboard container">
      <welcomeBanner />
      <earningCard />
      <jobCard />
    </div>
    <div class="row_2">
      <transitionHistory />
      <auditLog />
      <investmentCard />
    </div>
    <div class="row_3">
      <latestActivity />
    </div>
  </div>
</template>

<script>
import welcomeBanner from "@/components/welcomeBanner.vue";
import earningCard from "@/components/earningCard.vue";
import jobCard from "@/components/jobCard.vue";
import transitionHistory from "@/components/transitionHistory.vue";
import auditLog from "@/components/auditLog.vue";
import investmentCard from "@/components/investmentCard.vue";
import latestActivity from "@/components/latestActivity.vue";
export default {
  name: "HomeView",
  components: {
    welcomeBanner,
    earningCard,
    jobCard,
    transitionHistory,
    auditLog,
    investmentCard,
    latestActivity,
  },
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  padding: 0 15px;
}
.defaut_dashboard {
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: #f9f7f6;
  .welcome_banner {
    width: 33%;
    background-color: #fefefe;
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
            background-color: #f9f7f6;
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
  // earning card
  .earning_card {
    width: 25%;
    padding: 20px 20px 0;
    margin: 0 12px;
    border-radius: 1.5rem;
    background-color: #fefefe;
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
          background-color: #f9f7f6;
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
  //  job card
  .job_card {
    width: 41.66%;
    padding: 20px;
    margin: 0 12px;
    border-radius: 1.5rem;
    background-color: #fefefe;
    .card_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .card_body {
      margin: 8px 20px;
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        list-style: none;
        .job_details {
          height: 56px;
          padding: 11px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
          background-color: #f9f7f6;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          &:hover {
            animation: trnaslate_up 0.6s infinite ease-in-out;
          }
          .icon_cont {
            width: 45px;
            height: 40px;
            background-color: #e5eceb;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            img {
              width: 20px;
              height: 20px;
            }
          }
          .job_info {
            h3 {
              font-weight: 700;
              letter-spacing: 0.5px;
              margin-bottom: 0;
            }
            p {
              font-weight: 600;
              color: #aaa3aa;
              font-size: 14px;
              text-wrap: nowrap;
            }
          }
        }
      }
      .job_table {
        table {
          border-collapse: collapse;
          width: 100%;
          thead {
            tr {
              border-bottom: 1px solid #aaa3a0;
              th {
                font-size: 14px;
                font-weight: 700;
                padding: 12px 9px;
                color: #aaa3a0;
                text-align: start;
              }
            }
          }
          tbody {
            tr {
              border-bottom: 1px solid #aaa3a0;
              td {
                padding: 11px 4px;
                text-align: start;
                .employee {
                  display: flex;
                  justify-content: start;
                  align-items: center;
                  gap: 8px;
                  .img_cont {
                    width: 28px;
                    height: 28px;
                    img {
                      width: 100%;
                      border-radius: 50%;
                    }
                  }
                  h6:hover {
                    color: #308e87;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
.row_2,
.row_3 {
  margin-top: 30px;
  display: flex;
}
@keyframes trnaslate_up {
  0% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(-5px);
  }
}
@keyframes up-down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes myOrbit {
  0% {
    transform: rotate(0deg) translateX(10px) rotate(0deg);
  }
  100% {
    transform: rotate(1turn) translateX(10px) rotate(-1turn);
  }
}
@keyframes move1 {
  0% {
    transform: rotate(0deg) translateX(15px) rotate(0deg);
  }
  100% {
    transform: rotate(1turn) translateX(15px) rotate(-1turn);
  }
}
@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
