<template>
  <div class="transaction-detail">
    <div class="background"></div>

    <div class="content">
      <div class="header-div">
        <van-row class="header">
          <van-col span="2" class="left-arrow">
            <van-icon name="arrow-left" />
          </van-col>
          <van-col span="22">
            <van-search v-model="value" placeholder="搜索词" class="search" />
          </van-col>
        </van-row>
      </div>
      <van-tabs
        v-model="active"
        class="tabs"
        color="#F4F6FC"
        background="#F4F6FC"
        title-active-color="#005D28"
      >
        <van-tab title="售出提货">
          <div class="transaction" v-for = "(item,index) in transactions" :key="index" v-show="item.orderStatus==='1'">
            <van-cell class="transaction-header-cell">
              <div class="transaction-header">
                <div class="header-icon">
                  <div class="hotel-icon"><van-icon name="hotel-o" /></div>
                </div>
                <div class="">
                  <div class="customer">
                    <div class="customer-name">{{item.customerName}}</div>
                    <div class="customer-phone">
                      <van-icon name="phone-circle" />
                    </div>
                  </div>
                  <div class="index">订单编号：{{item.code}}</div>
                </div>
              </div>
              <div class="transaction-info" v-for = "(order,index) in item.orderInfoList" :key="index">
                <van-row>
                  <van-col span="6">
                    <div class="img-div">
                      <img
                        src="@/assets/images/product-image/product2.png"
                        class="product-image"
                      />
                    </div>
                  </van-col>
                  <van-col class="product-info" span="17">
                    <van-row>
                      <van-col span="19">
                        <div class="product-name">
                          {{order.brand}}
                        </div>
                      </van-col>
                      <van-col class="product-price" span="5"> ￥{{order.amount}} </van-col>
                    </van-row>
                    <van-row>
                      <div class="product-detail">
                        <div class="transport-tag">
                          <van-tag color="#F3F4F5" text-color="#9A9B9D"
                            >支持{{getStatus(order.receiveType)}}</van-tag
                          >
                        </div>
                        <div class="product-format">规格：{{order.spec}} </div>
                        <div class="product-amount">数量：{{order.quantity}}</div>
                      </div>
                    </van-row>
                  </van-col>
                </van-row>
                <van-row>
                  <div class="transaction-status">已{{getStatus(order.receiveType)}}</div>
                </van-row>
              </div>
            </van-cell>

            <van-cell class="transaction-total-cell" >
              <div class="transaction-total">
                <div class="transaction-date">{{item.tranTime}}</div>
                <div class="total-price">总计：￥{{totalPrice(item)}}</div>
              </div>
              <div class="transaction-buttons">
                <van-button class="cancle" @click="closeOrder(item)">关闭交易</van-button>
                <van-button class="complete" @click="completeOrder(item)">完成交易</van-button>
              </div>
            </van-cell>
          </div>

        </van-tab>

        <van-tab title="待交易" active="font-size: 18px;">
          <div class="transaction" v-for = "(item,index) in transactions" :key="index" v-show="item.orderStatus==='0'">
            <van-cell class="transaction-header-cell">
              <div class="transaction-header">
                <div class="header-icon">
                  <div class="hotel-icon"><van-icon name="hotel-o" /></div>
                </div>
                <div class="">
                  <div class="customer">
                    <div class="customer-name">{{item.customerName}}</div>
                    <div class="customer-phone">
                      <van-icon name="phone-circle" />
                    </div>
                  </div>
                  <div class="index">订单编号：{{item.code}}</div>
                </div>
              </div>
              <div class="transaction-info" v-for = "(order,index) in item.orderInfoList" :key="index">
                <van-row>
                  <van-col span="6">
                    <div class="img-div">
                      <img
                        src="@/assets/images/product-image/product2.png"
                        class="product-image"
                      />
                    </div>
                  </van-col>
                  <van-col class="product-info" span="17">
                    <van-row>
                      <van-col span="19">
                        <div class="product-name">
                          {{order.brand}}
                        </div>
                      </van-col>
                      <van-col class="product-price" span="5"> ￥{{order.amount}} </van-col>
                    </van-row>
                    <van-row>
                      <div class="product-detail">
                        <div class="transport-tag">
                          <van-tag color="#F3F4F5" text-color="#9A9B9D"
                            >支持{{getStatus(order.receiveType)}}</van-tag
                          >
                        </div>
                        <div class="product-format">规格：{{order.spec}} </div>
                        <div class="product-amount">数量：{{order.quantity}}</div>
                      </div>
                    </van-row>
                  </van-col>
                </van-row>
                <van-row>
                  <div class="transaction-status">{{getStatus(order.receiveType)}}:{{getStatusInfo(order,item)}}</div>
                </van-row>
              </div>
            </van-cell>

            <van-cell class="transaction-total-cell" >
              <div class="transaction-total">
                <div class="transaction-date">{{item.tranTime}}</div>
                <div class="total-price">总计：￥{{totalPrice(item)}}</div>
              </div>
              <div class="transaction-buttons">
                <van-button class="cancle" @click="closeOrder(item)">关闭交易</van-button>
                <van-button class="complete" @click="completeOrder(item)">完成交易</van-button>
              </div>
            </van-cell>
          </div>

        </van-tab>

        <van-tab title="已完成">
          <div class="transaction" v-for = "(item,index) in transactions" :key="index" v-show="item.orderStatus==='2'">
            <van-cell class="transaction-header-cell">
              <div class="transaction-header">
                <div class="header-icon">
                  <div class="hotel-icon"><van-icon name="hotel-o" /></div>
                </div>
                <div class="">
                  <div class="customer">
                    <div class="customer-name">{{item.customerName}}</div>
                    <div class="customer-phone">
                      <van-icon name="phone-circle" />
                    </div>
                  </div>
                  <div class="index">订单编号：{{item.code}}</div>
                </div>
              </div>
              <div class="transaction-info" v-for = "(order,index) in item.orderInfoList" :key="index">
                <van-row>
                  <van-col span="6">
                    <div class="img-div">
                      <img
                        src="@/assets/images/product-image/product2.png"
                        class="product-image"
                      />
                    </div>
                  </van-col>
                  <van-col class="product-info" span="17" offset="1">
                    <van-row>
                      <van-col span="18">
                        <div class="product-name">
                          {{order.brand}}
                        </div>
                      </van-col>
                      <van-col class="product-price" span="5"> ￥{{order.amount}} </van-col>
                    </van-row>
                    <van-row>
                      <div class="product-detail">
                        <div class="transport-tag">
                          <van-tag color="#F3F4F5" text-color="#9A9B9D"
                            >支持{{getStatus(order.receiveType)}}</van-tag
                          >
                        </div>
                        <div class="product-format">规格：{{order.spec}} </div>
                        <div class="product-amount">数量：{{order.quantity}}</div>
                      </div>
                    </van-row>
                  </van-col>
                </van-row>
                <van-row>
                  <div class="transaction-status">已{{getStatus(order.receiveType)}}</div>
                </van-row>
              </div>
            </van-cell>

            <van-cell class="transaction-total-cell" >
              <div class="transaction-total">
                <div class="transaction-date">{{item.tranTime}}</div>
                <div class="total-price">总计：￥{{totalPrice(item)}}</div>
              </div>
              <div class="transaction-buttons">
                <van-button class="cancle" @click="closeOrder(item)">关闭交易</van-button>
                <van-button class="complete" @click="completeOrder(item)">完成交易</van-button>
              </div>
            </van-cell>
          </div>

        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
// @ is an alias to /src
import queryApi from '@/api/query.js'
export default {
  name: 'TransactionDetail',
  data () {
    return {
      value: '',
      active: 'transaction-detail',
      joke: 'hello',
      transactions: [],
    }
  },
  methods: {
    getTransactions () {
        queryApi.getTransactions('query/getTransactions').then(res => {
          this.transactions = res
        // console.log(this.transactions)
      })
    },
    getStatus (status) {
      if (status === '0') return '配送'
      else if (status === '1') return '自提'
      else if (status === '2') return '配送和自提'
    },
    getStatusInfo (order,item) {
      const status = order.receiveType
      if (status === '0') return item.address
      else if (status === '1') return order.selfTakeCode
    },
    totalPrice (item) {
      let total = 0
      for (var k = 0, length = item.orderInfoList.length; k < length; k++)
      {
        total += item.orderInfoList[k].amount * item.orderInfoList[k].quantity
      }
      return total
    },
    closeOrder (item) {
      queryApi.closeOrder({id: item.id})
    },
    completeOrder (item) {
      queryApi.completeOrder({id: item.id})
    }
  },
  created: function () {

  },
  computed: {

  },
  mounted () {
    this.getTransactions()
    // setInterval(()=> { this.getTransactions() }, 3000)
  }
}

</script>
<style lang="scss" scoped src='../assets/scss/transaction-detail.scss'>
</style>
