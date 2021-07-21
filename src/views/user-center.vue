
<template>
  <div class="user-center">
    <van-row>
      <van-col span="24">
        <div class="header">
          <img src="@/assets/images/user-center/user-photo.png">
          <div class="user-name">陈大仙</div>
          <div class="location"><van-icon name="location" />&nbsp;杭州市军供站</div>
        </div>
      </van-col>
    </van-row>
    <van-row class="tasks-header">
      <div id="my-task">我的配送任务</div>
    </van-row>
    <van-cell class="tasks">
        <img src="@/assets/images/user-center/unfinished.png" >
        <span class="msg">&nbsp;&nbsp;待完成的任务</span>
      <template #right-icon>
        <van-icon name="arrow" class="arrow-icon" />
      </template>
    </van-cell>
    <van-cell class="tasks">
      <img src="@/assets/images/user-center/finished.png" >
      <span class="msg">&nbsp;&nbsp;已完成的任务</span>
      <template #right-icon>
        <van-icon name="arrow" class="arrow-icon" />
      </template>
    </van-cell>

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
  name: 'user-center',
  data () {
    return {
      value: '',
      active: 'user-center'
    }
  }
}

</script>
<style lang="scss" scoped src='../assets/scss/user-center.scss'>
</style>
