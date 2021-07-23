<!--
 * @Description:
 * @Date: 2021-06-19 22:58:55
 * @LastEditors: qingmou
 * @LastEditTime: 2021-07-07 09:10:23
-->

<template>
  <div class="home">
    <router-view></router-view>
      <van-tabbar v-model="active" active-color='#005D28' inactive-color="rgba(25, 31, 37, 0.4)">
        <van-tabbar-item name="home" icon="wap-home" to="home" @mouseout.native="click" >
          消息
        </van-tabbar-item>
        <van-tabbar-item name="user" icon="manager" to="user-center" @mouseout.native="click" >
          用户中心
        </van-tabbar-item>
      </van-tabbar>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
var homeActive=false;
var userCenterActive= false;
var path;
// @ is an alias to /src
export default {
  name: 'HomePage',
  data () {
    return {
      value: '',
      active: this.$route.name,
    }
  },
  methods:{
    click(){
      console.log(this.$route.path);
      console.log(this.active);
      // console.log(homeActive);
    }

  },
      watch:{
        path :function(){
          path = this.$router.path;
          userCenterActive = path === '/user-center'
      }
    }
}
</script>
<style lang="scss" scoped src='../assets/scss/home.scss'>
</style>
