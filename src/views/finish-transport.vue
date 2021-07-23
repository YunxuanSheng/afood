<template>
  <div class="finish-transport">
    <van-nav-bar
      title="代运输详情"
      left-arrow
      class="header"
    />

    <van-row class="img-row">
      <van-col span="24" class="img-div">
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
            <van-tag class="product-tag" text-color="#9DA2BC">已完成</van-tag>
          </div>
      </div>
      <div class="transport-detail">
        <van-row>
          <van-col span="4">规格:</van-col>
          <van-col span="20">{{task.goodsSpec}}</van-col>
        </van-row>
        <van-row >
          <van-col span="4">运输数量:</van-col>
          <van-col span="20">{{task.deliveryQuantity}}</van-col>
        </van-row>
        <van-row class="transport-date">
          <van-col span="4">运送日期:</van-col>
          <van-col span="20">{{task.startDeliveryDate}}~{{task.endDeliveryDate}}</van-col>
        </van-row>
        <van-row>
          <van-col span="4">运送地址:</van-col>
          <van-col span="20">{{task.province}}{{task.city}}{{task.county}}{{task.address}}</van-col>
        </van-row>
        <van-row>
          <van-col span="4">车辆归属:</van-col>
          <van-col span="20">{{task.stationName}}</van-col>
        </van-row>
        <van-row>
          <van-col span="4">车牌号码:</van-col>
          <van-col span="20">{{task.carCoder}}</van-col>
        </van-row>
        <van-row>
          <van-col span="4">车辆型号:</van-col>
          <van-col span="20">{{task.carModel}}</van-col>
        </van-row>
        <van-row>
          <van-col span="4">承载能力:</van-col>
          <van-col span="20">{{task.carLoader}}吨</van-col>
        </van-row>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'InTransport',
  data () {
    return {
      task: []
    }
  },
  methods: {
    getTask () {
      this.task = this.$route.params.task
      // console.log(this.$route.params.task)
    }
  },
  mounted () {
    this.getTask()
  }
}
</script>
<!--<style ></style>-->

<style  lang='scss' scoped src="../assets/scss/finish-transport.scss">
</style>
