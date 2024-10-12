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
      <revenueGrowth />
      <topUsers />
    </div>
    <div class="row_4">
      <NewsUpdates />
      <totalInvest />
      <manageInvoice />
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
import revenueGrowth from "@/components/revenueGrowth.vue";
import topUsers from "@/components/topUsers.vue";
import NewsUpdates from "@/components/NewsUpdate.vue";
import totalInvest from "@/components/totalInvest.vue";
import manageInvoice from "@/components/manageIinvoice.vue";
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
    revenueGrowth,
    topUsers,
    NewsUpdates,
    totalInvest,
    manageInvoice,
  },
};
</script>
<style lang="scss">
@import "../css/variables.scss";
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
  background-color: $light-two;
}
.row_2,
.row_3,
.row_4 {
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
