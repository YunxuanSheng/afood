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
      <van-cell-group class="form">
        <van-field type="tel"  placeholder="请输入您的用户名" v-model="form.username" input-align="left" class="username" >
          <template v-slot:left-icon>
             <i class="iconfont iconicon_huabanfuben"></i>
          </template>
        </van-field>

        <van-field type="tel"  placeholder="请输入您的密码" v-model="form.password" input-align="left" class="password">
          <template v-slot:left-icon>
             <i class="iconfont iconicon_huabanfuben"></i>
          </template>
        </van-field>

        <van-field type="tel"  placeholder="请输入系统验证码" v-model="form.captcha"  input-align="left" class="captcha">
          <template v-slot:left-icon>
             <i class="iconfont iconother-pay"></i>
          </template>
        </van-field>
        <div class="vertical" @click="getCaptcha"><img :src="captchaSrc" alt=""  class="img"></div>
        <van-button type="primary" @click="submit" block>登录</van-button>
      </van-cell-group>

    </div>

  </div>
</template>
<script>
import authApi from '@/api/auth.js'
import { ACCESS_TOKEN, USER_INFO } from '@/store/mutation-types'
import store from 'store'
// import qs from 'qs'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: '',
        captcha: '',
        code: ''
      },
      captchaSrc: ''
    }
  },
  methods: {
    getCaptcha () {
      authApi.getCaptcha('auth/getCaptcha').then(res => {
        this.form.code = res.code
        this.captchaSrc = 'data:img/jpg;base64,' + res.captcha
        console.log(res)
      })
    },
    // getCaptcha () {
    //   const that = this;
    //   this.$axios.get('http://172.22.31.200:8001/platform/noLogin/noLogin/getCaptcha').then(response=> {
    //     console.log(response.data.result.captcha)
    //     that.captchaSrc = 'data:img/jpg;base64,' + response.data.result.captcha
    //     console.log(that.captchaSrc)
    //   })
    // },
    submit () {
      if (this.form.username === '') {
        this.$toast('用户名不能为空')
        return
      } else if (this.form.password === '') {
        this.$toast('密码不能为空')
        return
      } else if (this.form.captcha === '') {
        this.$toast('验证码不能为空')
        return
      }
      authApi.login(this.form)
        .then((res) => this.loginSuccess(res))
        // .catch(err => this.requestFailed(err))
        // .finally(() => {
        //   state.loginBtn = false
        // })
      // console.log(this.form.captcha)
      // console.log(this.form.password)
      // console.log(this.form.username)
    },
    loginSuccess (res) {
      if (res.menus) {
        store.set(ACCESS_TOKEN, res.token)
        store.set(USER_INFO, res)
        console.log(store.get(USER_INFO))
        this.$router.push({ path: '/home' }, () => {
          this.isLoginError = false
          window.location.reload()
        })
      } else {
        this.$toast('权限不足，请联系管理员添加权限')
        this.getCaptcha()
      }
    }
  },
  mounted () {
    this.getCaptcha()
  }
}
</script>
<!--<style ></style>-->

<style  lang='scss' scoped src="../assets/scss/login.scss">
</style>
