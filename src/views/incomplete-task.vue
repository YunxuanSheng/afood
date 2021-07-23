<template class="finish-task">

<div class="finish-task">
  <div class="background">  </div>
  <div class="content">
    <van-nav-bar
      title="待完成的任务"
      left-arrow
      class="header"
    />
    <div class="transaction" v-for = "(task,index) in incompleteTaskList" :key="index" @click="checkDetail(index)" >
      <van-cell>
        <van-row>
          <van-col span="6">
            <div class="img-div">
              <img src="@/assets/images/product-image/product2.png" class="product-image" >
            </div>
          </van-col>
          <van-col class="product-info" span="14.5">
            <div class="product-name">
            </div>
            <div class="product-detail">
              <div class="product-format">
                规格：<div class="num">{{task.goodsSpec}}</div>
              </div>
              <div class="product-amount">
                数量：<div class="num">{{task.deliveryQuantity}}</div>
              </div>
            </div>
            <div class="transport-date">
              运送日期：{{task.startDeliveryDate}}~{{task.endDeliveryDate}}
            </div>
          </van-col>
          <van-col class="product-status" span="3.5">
            <van-tag color="rgba(192, 151, 60, 0.2)" text-color="#C0973C" v-if="task.deliveryStatus === '1'">运输中</van-tag>
            <van-tag color="rgba(35, 148, 147, 0.2)" text-color="#005D28" v-if="task.deliveryStatus === '0'">待运输</van-tag>
          </van-col>
        </van-row>
        <van-row class="transaction">
        </van-row>
      </van-cell>
      <van-cell>
        <div class="transport-address">
          运送地址：{{task.province}}{{task.city}}{{task.county}}{{task.address}}
        </div>
      </van-cell>
    </div>
  </div>
  </div>
</template>
<script>

import queryApi from '@/api/query.js'
import { USER_INFO } from '@/store/mutation-types'
import store from 'store'

export default {
  name: 'FinishTask',
  data () {
    return {
      taskList: [],
      userInfo: []
    }
  },
  methods: {
    getTaskList () {
      queryApi.getTaskList().then(res => {
        this.taskList = res
        console.log(this.taskList)
      })
    },
    getUser () {
      this.userInfo = store.get(USER_INFO)
      console.log(store.get(USER_INFO))
    },
    checkDetail (index) {
      if (this.taskList[index].deliveryStatus === '0') {
        this.$router.push(
          {
            path: '/wait-transport',
            name: 'WaitTransport',
            params: {
              task: this.taskList[index]
            }
          }, () => {
            this.isLoginError = false
          })
      } else if (this.taskList[index].deliveryStatus === '1') {
        this.$router.push(
          {
            path: '/in-transport',
            name: 'InTransport',
            params: {
              task: this.taskList[index]
            }
          }, () => {
            this.isLoginError = false
          })
      }
    }
  },
  mounted () {
    this.getTaskList()
    this.getUser()
  },
  computed: {
    incompleteTaskList: function () {
      return this.taskList.filter(function (task) {
        return task.deliveryStatus === '1' || task.deliveryStatus === '0'
      })
    }
  }
}
</script>

<style  lang='scss' scoped src="../assets/scss/finish-task.scss">
</style>
