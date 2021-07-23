
<template>
  <div class="user-center">
    <van-row>
      <van-col span="24">
        <div class="header">
          <img src="@/assets/images/user-center/user-photo.png">
          <div class="user-name">{{userInfo.name}}</div>
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

  </div>
</template>
<script>
// @ is an alias to /src
import store from 'store'
import { USER_INFO } from '@/store/mutation-types'
export default {
  name: 'user-center',
  data () {
    return {
      value: '',
      active: 'user-center',
      userInfo: ''
    }
  },
  methods: {
    getUser () {
      this.userInfo = store.get(USER_INFO)
      console.log(store.get(USER_INFO).name)
    }
  },
  mounted () {
    this.getUser()
  }
}

</script>
<style lang="scss" scoped src='../assets/scss/user-center.scss'>
</style>
