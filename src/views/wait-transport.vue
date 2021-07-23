<template>
  <div class="wait-transport">
    <van-nav-bar
      title="代运输详情"
      left-arrow
      class="header"
    />

    <van-row class="img-row">
      <van-col span="24" class="product-img">
        <div class="container">
          <img
              src="@/assets/images/product-image/product2.png"
              class="product-img"
            />
        </div>
      </van-col>
    </van-row>

    <div class="transport-info">
      <div class="transport-head">
          <div class="product-name">晚籼稻</div>
          <div>
            <van-tag class="product-tag" background-color="rgba(35, 148, 147, 0.2);" text-color="#005D28">待运输</van-tag>
          </div>
      </div>
      <div class="transport-detail">
        <van-row>
          <van-col span="3">规格:</van-col>
          <van-col span="21"><div class="num">{{task.goodsSpec}}</div></van-col>
        </van-row>
        <van-row >
          <van-col span="4">运输数量:</van-col>
          <van-col span="20"><div class="num">{{task.deliveryQuantity}}</div></van-col>
        </van-row>
        <van-row class="transport-date">
          <van-col span="4">运送日期:</van-col>
          <van-col span="20">{{task.startDeliveryDate}}~{{task.endDeliveryDate}}</van-col>
        </van-row>
        <van-row>
          <van-col span="4">运送地址:</van-col>
          <van-col span="20">{{task.province}}{{task.city}}{{task.county}}{{task.address}}</van-col>
        </van-row>
      </div>
      <div class="vehicle-info">
        <van-form @submit="onSubmit" class="vehicle-info-form">
          <van-field
            v-model="form.belong"
            name="车辆归属"
            label="车辆归属"
            placeholder="请输入"
          />
          <van-field
            v-model="form.number"
            name="车牌号码"
            label="车牌号码"
            placeholder="浙A.12345"
          />
          <van-field
            v-model="form.model"
            name="车辆型号"
            label="车辆型号"
            placeholder="请输入"
          />
          <van-field
            v-model="form.capacity"
            name="承载能力"
            label="承载能力"
            placeholder="请输入"
          />
          <div class="submit-div">
            <van-button round block type="info" native-type="submit" class="submit" @click="startTransaport">开始运输</van-button>
          </div>
        </van-form>
      </div>
    </div>

  </div>
</template>
<script>
import queryApi from '@/api/query.js'
import { USER_INFO } from '@/store/mutation-types'
import store from 'store'
export default {
  name: 'WaitTransport',
  data () {
    return {
      form: {
        belong: '',
        number: '',
        model: '',
        capacity: ''
      },
      task: [],
      userInfo: []
    }
  },
  methods: {
    getTask () {
      this.task = this.$route.params.task
    },
    startTransaport () {
      if (this.form.belong === '') {
        this.$toast('车辆归属不能为空')
        return
      } else if (this.form.number === '') {
        this.$toast('车牌号码不能为空')
        return
      } else if (this.form.model === '') {
        this.$toast('车辆型号不能为空')
        return
      } else if (this.form.capacity === '') {
        this.$toast('承载能力不能为空')
        return
      }
      queryApi.startTransaport(this.form)
        .then(alert('提交成功'))
        // todo: 换提示方法
    },
    getUser () {
      this.userInfo = store.get(USER_INFO)
      console.log(store.get(USER_INFO))
    }
  },
  mounted () {
    this.getTask()
    this.getUser()
  }
}
</script>

<style  lang='scss' scoped src="../assets/scss/wait-transport.scss">
</style>
