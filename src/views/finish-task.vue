/*
 * @Author: YunxuanSheng 
 * @Date: 2021-07-19 16:28:26 
 * @Last Modified by:   YunxuanSheng 
 * @Last Modified time: 2021-07-19 16:28:26 
 */


<template class="finish-task">

<div class="finish-task">
  <div class="background">  </div>
  <div class="content">
    <van-nav-bar
      title="已完成的任务"
      left-arrow
      class="header"
    />
  <div class="transaction">
    <van-cell>
      <van-row>
        <van-col span="6">
          <div class="img-div">
            <img src="@/assets/images/product-image/product2.png" class="product-image" >
          </div>
        </van-col>
        <van-col class="product-info" span="14">
          <div class="product-name">
            晚籼稻
          </div>
          <div class="product-detail">
            <div class="product-format">
              规格：5KG
            </div>
            <div class="product-amount">
              数量：10袋
            </div>
          </div>
          <div class="transport-date">
            运送日期：2020/04/12~2020
          </div>
        </van-col>
        <van-col class="product-status" span="4">
          <van-tag color="inherit" text-color="#9DA2BC">已完成</van-tag>
        </van-col>
      </van-row>
      <van-row class="transaction">
      </van-row>
    </van-cell>
    <van-cell>
      <div class="transport-address">
        运送地址：湖北省武汉市江汉区沙县小吃店A座3902号
      </div>
    </van-cell>
  </div>

  <div class="transaction">
    <van-cell>
      <van-row>
        <van-col span="6">
          <div class="img-div">
            <img src="@/assets/images/product-image/product3.png" class="product-image" >
          </div>
        </van-col>
        <van-col class="product-info" span="14">
          <div class="product-name">
            大米
          </div>
          <div class="product-detail">
            <div class="product-format">
              规格：5KG
            </div>
            <div class="product-amount">
              数量：10袋
            </div>
          </div>
          <div class="transport-date">
            运送日期：2020/04/12~2020
          </div>
        </van-col>
        <van-col class="product-status" span="4">
          <van-tag color="inherit" text-color="#9DA2BC">已完成</van-tag>
        </van-col>
      </van-row>
      <van-row class="transaction">
      </van-row>
    </van-cell>
    <van-cell>
      <div class="transport-address">
        运送地址：湖北省武汉市江汉区沙县小吃店A座3902号
      </div>
    </van-cell>
  </div>

  <div class="transaction">
    <van-cell>
      <van-row>
        <van-col span="6">
          <div class="img-div">
            <img src="@/assets/images/product-image/product4.png" class="product-image" >
          </div>
        </van-col>
        <van-col class="product-info" span="14">
          <div class="product-name">
            晚籼稻
          </div>
          <div class="product-detail">
            <div class="product-format">
              规格：5KG
            </div>
            <div class="product-amount">
              数量：10袋
            </div>
          </div>
          <div class="transport-date">
            运送日期：2020/04/12~2020
          </div>
        </van-col>
        <van-col class="product-status" span="4">
          <van-tag color="inherit" text-color="#9DA2BC">已完成</van-tag>
        </van-col>
      </van-row>
      <van-row class="transaction">
      </van-row>
    </van-cell>
    <van-cell>
      <div class="transport-address">
        运送地址：湖北省武汉市江汉区沙县小吃店A座3902号
      </div>
    </van-cell>
  </div>
  </div>

  </div>
</template>
<script>
export default {
  name: 'FinishTask',
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

<style  lang='scss' scoped src="../assets/scss/finish-task.scss">
</style>
