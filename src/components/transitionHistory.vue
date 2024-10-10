<template>
  <div class="transition_history">
    <div class="card_header">
      <h3>Transition History</h3>
    </div>
    <div class="card_body">
      <div class="search_cont">
        <label for="search"> Search:</label>
        <input type="text" id="search" />
      </div>
      <div class="card_table">
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Credit/Debit</th>
              <th>Date/Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="it in 6" :key="it">
              <td>
                <div class="item_info">
                  <div class="img_cont">
                    <img src="../assets/download (3).png" alt="" />
                  </div>
                  <div class="item_name">
                    <a href="">
                      <h6>Samsung TV</h6>
                    </a>
                    <p>Item Sold</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="prix">+ $3460</div>
              </td>
              <td>
                <div class="date_time">
                  <h6>Jan 25</h6>
                  <p>08:35:65</p>
                </div>
              </td>
              <td>
                <button>Completed</button>
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
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.transition_history {
  margin: 0 12px;
  background-color: #fff;
  width: 50%;
  padding: 20px;
  border-radius: 1.5rem;
  position: relative;
  .card_header {
    h3 {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-align: start;
    }
  }
  .card_body {
    .search_cont {
      margin: 0 30px 25px 15px;
      position: absolute;
      top: 17px;
      right: 30px;
      label {
        font-size: 14px;
        cursor: pointer;
      }
      input {
        width: 150px;
        height: 34px;
        border: 1px solid #e9ecef;
        border-radius: 6px;
        padding: 0 10px;
        margin-left: 10px;
        color: #aaa3a0;
        &:focus {
          outline: none;
        }
      }
    }
    .card_table {
      margin-top: 13px;
      table {
        border-collapse: collapse;
        width: 100%;
        thead {
          tr {
            border-bottom: 1px solid #dee2e6;
            th {
              padding: 11px 3px;
              font-size: 14px;
              color: #aaa3a0;
              text-align: start;
              &:first-child {
                width: 268px;
              }
              &:nth-child(2) {
                width: 138px;
              }
              &:nth-child(3) {
                width: 118px;
              }
              &:nth-child(4) {
                width: 198px;
                text-align: center;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              padding: 12px 7px;
              .item_info {
                display: flex;
                justify-content: start;
                align-items: start;
                gap: 12px;
                .img_cont {
                  width: 33px;
                  height: 33px;
                  border: 1px solid #e5e5e5;
                  border-radius: 50%;
                  background-color: #f9f7f6;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    width: 20px;
                  }
                }
              }
              .item_name {
                a {
                  text-decoration: none;
                  h6 {
                    font-size: 14px;
                    color: #292929;
                  }
                }
                p {
                  text-align: start;
                  font-size: 14px;
                  color: #aaa3a0;
                }
              }
              &:last-child {
                text-align: end;
                button {
                  min-width: 115px;
                  height: 37px;
                  padding: 7px 18px;
                  font-size: 14px;
                  font-weight: 600;
                  border-radius: 6px;
                  border: 1px solid rgba(62, 185, 95, 0.1);
                  color: #3eb95f;
                  background-color: rgba(62, 185, 95, 0.1);
                  &:focus {
                    outline: none;
                  }
                }
              }
            }
            .prix {
              height: 37px;
              display: flex;
              justify-content: start;
              align-items: start;
            }
            .date_time {
              display: flex;
              flex-direction: column;
              justify-content: start;
              align-items: start;
              height: 37px;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}
</style>
