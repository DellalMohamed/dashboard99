<template>
  <div class="job_card">
    <div class="card_header">
      <h3>Job Today</h3>
      <div>
        <p>Wednesday 6,</p>
        <span>Dec 2024 </span>
      </div>
    </div>
    <div class="card_body">
      <ul>
        <li>
          <div class="job_details">
            <div class="icon_cont">
              <svg
                fill="#231f20"
                width="20px"
                color="#308e87"
                background-color="red"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Card">
                  <path
                    class="cls-1"
                    d="M3,21H21a1,1,0,0,0,1-1V8h0a1,1,0,0,0-.29-.72A1,1,0,0,0,20.89,7H17V5a1,1,0,0,0-1-1H8A1,1,0,0,0,7,5V7H3.11A1,1,0,0,0,2,8H2V20A1,1,0,0,0,3,21Zm1-2V10.41l3.27,3.3A1,1,0,0,0,8,14h3v2a1,1,0,0,0,2,0V14h3a1,1,0,0,0,.71-.3L20,10.41V19ZM18.59,9l-3,3H8.4l-3-3ZM9,6h6V7H9Z"
                  />
                </g>
              </svg>
            </div>
            <div class="job_info">
              <h3>40</h3>
              <p>Total..</p>
            </div>
          </div>
        </li>
        <li>
          <div class="job_details">
            <div class="icon_cont">
              <svg
                fill="#231f20"
                width="20px"
                color="#308e87"
                background-color="red"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Card">
                  <path
                    class="cls-1"
                    d="M3,21H21a1,1,0,0,0,1-1V8h0a1,1,0,0,0-.29-.72A1,1,0,0,0,20.89,7H17V5a1,1,0,0,0-1-1H8A1,1,0,0,0,7,5V7H3.11A1,1,0,0,0,2,8H2V20A1,1,0,0,0,3,21Zm1-2V10.41l3.27,3.3A1,1,0,0,0,8,14h3v2a1,1,0,0,0,2,0V14h3a1,1,0,0,0,.71-.3L20,10.41V19ZM18.59,9l-3,3H8.4l-3-3ZM9,6h6V7H9Z"
                  />
                </g>
              </svg>
            </div>
            <div class="job_info">
              <h3>40</h3>
              <p>Employees</p>
            </div>
          </div>
        </li>
        <li>
          <div class="job_details">
            <div class="icon_cont">
              <svg
                fill="#231f20"
                width="20px"
                color="#308e87"
                background-color="red"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Card">
                  <path
                    class="cls-1"
                    d="M3,21H21a1,1,0,0,0,1-1V8h0a1,1,0,0,0-.29-.72A1,1,0,0,0,20.89,7H17V5a1,1,0,0,0-1-1H8A1,1,0,0,0,7,5V7H3.11A1,1,0,0,0,2,8H2V20A1,1,0,0,0,3,21Zm1-2V10.41l3.27,3.3A1,1,0,0,0,8,14h3v2a1,1,0,0,0,2,0V14h3a1,1,0,0,0,.71-.3L20,10.41V19ZM18.59,9l-3,3H8.4l-3-3ZM9,6h6V7H9Z"
                  />
                </g>
              </svg>
            </div>
            <div class="job_info">
              <h3>40</h3>
              <p>Hours of work</p>
            </div>
          </div>
        </li>
      </ul>
      <div class="job_table">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Job</th>
              <th>Company</th>
              <th>Employee</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in employies" :key="employee">
              <td>{{ employee.time }}</td>
              <td>{{ employee.job }}</td>
              <td>{{ employee.company }}</td>
              <td>
                <div class="employee">
                  <div class="img_cont">
                    <img :src="employee.img" alt="" />
                  </div>
                  <h6>{{ employee.name }}</h6>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employies: [
        {
          time: "10:AM",
          job: "Maintenace",
          company: "Apple Inc.",
          img: require("@/assets/download (2).png"),
          name: "Michele Ronaldo",
        },
        {
          time: "07:AM",
          job: "General",
          company: "Hewlett packard",
          img: require("@/assets/download (10).png"),
          name: "Naomi watson",
        },
        {
          time: "03:AM",
          job: "Cleaning",
          company: "Microsoft",
          img: require("@/assets/download (11).png"),
          name: "Dann Petty",
        },
      ],
    };
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";
.job_card {
  width: 41.66%;
  padding: 20px;
  margin: 0 12px;
  border-radius: 1.5rem;
  background-color: $light-one;
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
        background-color: $light-two;
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
</style>
