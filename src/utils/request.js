/*
 * @Description:
 * @Date: 2021-04-22 14:00:27
 * @LastEditors: qingmou
 * @LastEditTime: 2021-06-24 10:21:05
 */
import axios from 'axios'
import storage from 'store'
import { ACCESS_TOKEN } from '@/store/mutation-types'

const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 600000 // 请求超时时间
})

// request interceptor
request.interceptors.request.use(config => {
  const token = storage.get(ACCESS_TOKEN)
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  // todo 会报错
  if (token) {
    config.headers.Authorization = token
  }
  return config
})

request.interceptors.response.use((response) => {
  const data = response.data
  if (data.success === false) {
    // notification.error({
    //   message: '消息',
    //   description: data.message || '操作异常'
    // })
    alert(response.data.errMsg)
    console.log('操作异常')
    console.log(data.code)
    return Promise.reject(new Error(data.message))
  }
  return data.result
})

export default request
