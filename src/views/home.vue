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
      <van-row>
        <van-col span="13" offset="1">
          <h2>梁彦副局长赴浙江调研粮食和物质储备工作</h2>
          <div class="time">发布时间 2020/12/12 12:0</div>
        </van-col>
        <van-col span="8" offset="2"><img src="../assets/images/pic_1.png"></van-col>
      </van-row>
       <van-row>
        <van-col span="13" offset="1">
          <h2>2019年仓储管理交流现场会在浙江杭州</h2>
          <div class="time">发布时间 2020/12/12 12:0</div>
        </van-col>
        <van-col span="8" offset="2"><img src="../assets/images/pic_2.png"></van-col>
      </van-row>
    </div>
    <!-- <van-tabbar v-model="active" active-color='#005D28' inactive-color="rgba(25, 31, 37, 0.4)">
      <van-tabbar-item name="home" icon="wap-home">
        <router-link to="/">消息 </router-link>
      </van-tabbar-item>
      <van-tabbar-item name="user" icon="manager">
        <router-link to="user-center">用户中心 </router-link>
      </van-tabbar-item>
    </van-tabbar> -->
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      value: '',
      active: 'home'
    }
  }
}

</script>
<style lang="scss" scoped src='../assets/scss/home.scss'>
</style>
