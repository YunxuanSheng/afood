<!--
 * @Description:
 * @Date: 2021-06-19 22:58:55
 * @LastEditors: qingmou
 * @LastEditTime: 2021-07-07 09:10:23
-->

<template>
  <div class="home">
    <!-- <router-link :to="{path:'login'}"><a href="">登录</a> </router-link> -->
    <!-- @search="onSearch" -->
    <van-search v-model="value"   placeholder="搜索词" class='search'>
      <template #left>
        <van-icon name='location'/>
        <span>杭州 <van-icon name='arrow-down' class="arrow"/> </span>
      </template>
    </van-search>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item><img src="@/assets/images/ad1.png"></van-swipe-item>
      <van-swipe-item><img src="@/assets/images/ad1.png"></van-swipe-item>
      <van-swipe-item><img src="@/assets/images/ad1.png"></van-swipe-item>
      <van-swipe-item><img src="@/assets/images/ad1.png"></van-swipe-item>
    </van-swipe>
    <van-grid :column-num="3" :icon-size='65' class='list' :border='false'>
      <van-grid-item :icon="require('@/assets/images/shop.png')" text="售出提货"/>
      <van-grid-item :icon="require('@/assets/images/waite.png')" text="待交易" />
      <van-grid-item :icon="require('@/assets/images/yes.png')" text="已完成" />
    </van-grid>
    <div  class='buttom-content'>
      <van-cell value="更多">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="policy-msg"> <div class='rectangle'></div><span class="msg">&nbsp;&nbsp;政策信息</span> </span>
        </template>
        <template #right-icon>
          <van-icon name="arrow" class="arrow-icon" />
        </template>
      </van-cell>
      <van-row v-for = "(item,index) in news.slice(0, 2)" :key="index">
        <van-col span="13" offset="1">
          <h3>{{item.contentTitle}}</h3>
          <div class="time">{{item.createTime}}</div>
        </van-col>
        <van-col span="8" offset="2"><img v-bind:src="'http://172.22.31.200:8001'+item.contentImg" alt=""></van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import queryApi from '@/api/query.js'
export default {
  name: 'Home',
  data () {
    return {
      value: '',
      active: 'home',
      news: []
    }
  },
  methods: {
    getNews () {
      queryApi.getNews('query/getNews').then(res => {
        console.log(res)
        this.news = res
        console.log(this.news)
      })
    }
  },
  mounted () {
    this.getNews()
  }
}

</script>
<style lang="scss" scoped src='../assets/scss/home.scss'>
</style>
