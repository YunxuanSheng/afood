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
          <van-col span="4">规格:</van-col>
          <van-col span="20">5kg/袋</van-col>
        </van-row>
        <van-row >
          <van-col span="4">运输数量:</van-col>
          <van-col span="20">100</van-col>
        </van-row>
        <van-row class="transport-date">
          <van-col span="4">运送日期:</van-col>
          <van-col span="20">2020/04/12~2020/05/20</van-col>
        </van-row>
        <van-row>
          <van-col span="4">运送地址:</van-col>
          <van-col span="20">湖北省武汉市江汉区沙县小吃店A座3902号</van-col>
        </van-row>
      </div>
      <div class="vehicle-info">
        <van-form @submit="onSubmit" class="vehicle-info-form">
          <van-field
            v-model="belong"
            name="车辆归属"
            label="车辆归属"
            placeholder="请输入"
          />
          <van-field
            v-model="number"
            name="车牌号码"
            label="车牌号码"
            placeholder="浙A.12345"
          />
          <van-field
            v-model="model"
            name="车辆型号"
            label="车辆型号"
            placeholder="请输入"
          />
          <van-field
            v-model="capacity"
            name="承载能力"
            label="承载能力"
            placeholder="请输入"
          />
          <div class="submit-div">
            <van-button round block type="info" native-type="submit" class="submit">开始运输</van-button>
          </div>
        </van-form>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'WaitTransport',
  data () {
    return {
      tel: '',
      messageCode: '',
      systemCode: ''
    }
  }
}
</script>
<!--<style ></style>-->

<style  lang='scss' scoped src="../assets/scss/wait-transport.scss">
</style>
