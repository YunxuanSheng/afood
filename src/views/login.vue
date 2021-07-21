<template>
  <div class="Login">
    <div class="main w">
      <div class="main-top">
        <div class="logo">
          <img src="../assets/images/logo.png" alt="" />
        </div>
        <div class="close"><i class="iconfont iconclose" color='red'></i></div>
      </div>
      <div>
        <h2>欢迎登录军供站平台</h2>
      </div>
      <van-cell-group>
        <van-field type="tel"  placeholder="请输入您的手机号" v-model="tel" input-align="left" class="tel" >
          <template v-slot:left-icon>
             <i class="iconfont iconicon_huabanfuben"></i>
          </template>
          <template slot="extra">
            <span class="line">|</span>
            <a href="#" class="code">发送验证码</a>
            <!-- <van-button size="mini" type="default" >发送验证码</van-button> -->
          </template>
        </van-field>

        <van-field type="tel" color='red' placeholder="请输入短信验证码" v-model="messageCode"   input-align="left" class="messageCode">
          <template v-slot:left-icon>
             <i class="iconfont iconenvelop-o"></i>
          </template>
        </van-field>

        <van-field type="tel"  placeholder="请输入系统验证码" v-model="systemCode"  input-align="left" class="systemCode">
          <template v-slot:left-icon>
             <i class="iconfont iconother-pay"></i>
          </template>
        </van-field>
        <div class="vertical">验证码</div>

        <van-button type="primary" block>登录</van-button>
      </van-cell-group>
    </div>

  </div>
</template>
<script>
export default {
  name: 'Login',
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

<style  lang='scss' scoped src="../assets/scss/login.scss">
</style>
