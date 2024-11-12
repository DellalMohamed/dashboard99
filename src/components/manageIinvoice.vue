<template>
  <div class="manage_invoice">
    <div class="card_header">
      <h3>Manage Invoice</h3>
      <div class="dropdown">
        <button>...</button>
      </div>
      <!--<div class="dropdown_menu">
        <a href="" class="dropdown_item"></a>
        <a href="" class="dropdown_item"></a>
        <a href="" class="dropdown_item"></a>
      </div>-->
    </div>
    <div class="card_body">
      <table>
        <thead>
          <tr>
            <th>
              <label class="custom-checkbox">
                <input type="checkbox" v-model="isChecked" />
                <span class="checkmark"></span>
              </label>
            </th>
            <th>Client</th>
            <th>Date</th>
            <th>Id No</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 7" :key="i">
            <td>
              <label class="custom-checkbox">
                <input type="checkbox" v-model="isChecked" />
                <span class="checkmark"></span>
              </label>
            </td>
            <td>Comelune</td>
            <td>27 Nov</td>
            <td>9605</td>
            <td>$2,500</td>
            <td>
              <button>Completed</button>
            </td>
          </tr>
        </tbody>
      </table>
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
.manage_invoice {
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
    .dropdown {
      button {
        width: 42px;
        height: 31px;
        border-radius: 5px;
      }
    }
  }
  .card_body {
    margin-top: 13px;
    table {
      border-collapse: collapse;
      width: 100%;
      thead {
        width: 100%;
        tr {
          width: 100%;
          border-bottom: 1px solid #f2f2f2;
          th {
            text-align: start;
            &:nth-child(1) {
              width: 35px;
              padding: 10px 10px 10px 0;
              .custom-checkbox {
                input[type="checkbox"] {
                  appearance: none;
                  width: 17px;
                  height: 17px;
                  background-color: #ccc;
                  border-radius: 4px;
                  border: 1px solid #999;
                  cursor: pointer;
                  display: inline-block;
                  position: relative;

                  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
                  &:checked {
                    background-color: #4caf50;
                    border-color: #4caf50;
                  }
                  &::before {
                    content: "✔";
                    position: absolute;
                    top: -4px;
                    left: 2px;
                    font-size: 14px;
                    color: white;
                    display: none;
                  }

                  &:checked::before {
                    display: block;
                  }
                }
              }
            }
            &:nth-child(2) {
              width: 102px;
              padding: 10px;
            }
            &:nth-child(3) {
              width: 85px;
              padding: 10px;
            }
            &:nth-child(4) {
              width: 78px;
              padding: 10px;
            }
            &:nth-child(5) {
              width: 102px;
              padding: 10px;
            }
            &:nth-child(6) {
              width: 176px;
              padding: 10px;
              text-align: center;
            }
          }
        }
      }
      tbody {
        tr {
          td {
            text-align: start;
            padding: 4px 7px;
            &:first-child {
              text-align: start;
              padding-left: 0;
              .custom-checkbox {
                input[type="checkbox"] {
                  appearance: none;
                  width: 17px;
                  height: 17px;
                  background-color: #ccc;
                  border-radius: 4px;
                  border: 1px solid #999;
                  cursor: pointer;
                  display: inline-block;
                  position: relative;

                  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

                  &:checked {
                    background-color: #4caf50;
                    border-color: #4caf50;
                  }
                  &::before {
                    content: "✔";
                    position: absolute;
                    top: -4px;
                    left: 2px;
                    font-size: 14px;
                    color: white;
                    display: none;
                  }
                  &:checked::before {
                    display: block;
                  }
                }
              }
            }
            &:last-child {
              text-align: end;
              button {
                padding: 7px 18px;
                font-size: 14px;
                font-weight: 600;
                border-radius: 5px;
                border-color: rgba(62, 185, 95, 0.1);
                background-color: rgba(62, 185, 95, 0.1);
              }
            }
          }
        }
      }
    }
  }
}
</style>
