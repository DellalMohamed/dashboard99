<template>
  <div class="home_container">
    <left_sidebare
      :isVisible="isSidebarVisible"
      :layoutType="layoutType"
      :is-visible="isVisible"
    />
    <div
      class="content_area"
      :class="{ shrink: isSidebarVisible }"
      style="display: flex; flex-direction: column"
    >
      <pageTitle />
      <button @click="toggleSidebar">Toggle Sidebar</button>
      <div class="default_dashboard container">
        <welcomeBanner />
        <earningCard />
        <jobCard />
      </div>
      <div class="row_2 container">
        <transitionHistory />
        <auditLog />
        <investmentCard />
      </div>
      <div class="row_3 container">
        <latestActivity />
        <revenueGrowth />
        <topUsers />
      </div>
      <div class="row_4 container">
        <NewsUpdates />
        <totalInvest />
        <manageInvoice />
      </div>
    </div>
  </div>
</template>

<script>
import pageTitle from "@/components/pageTitle.vue";
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
import left_sidebare from "@/components/left_sidebare.vue";
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
    left_sidebare,
    pageTitle,
  },
  props: {
    layoutType: {
      type: String,
      default: "vertical",
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isSidebarVisible: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    handleUpdateIsHorizontal(newIsHorizontal) {
      console.log("Received newIsHorizontal:", newIsHorizontal);
      this.isHorizontal = newIsHorizontal;
    },
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
.home_container {
  margin-top: 74px;
  display: flex;
  justify-content: start;
  background-color: var(--color-secondary);
}

.left_sidebare.active {
  transform: translateX(0);
}

.content_area {
  flex-grow: 1;
  transition: margin-inline-start 0.5s ease-in-out;
}

.content_area.shrink {
  margin-inline-start: 253px;
}
.default_dashboard {
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: var(--color-secondary);
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
