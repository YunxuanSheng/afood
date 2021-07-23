/*
 * @Description: 用户请求类
 * @Date: 2021-05-11 16:40:07
 * @LastEditors: qingmou
 * @LastEditTime: 2021-05-11 23:14:46
 */
import request from '@/utils/request'
export default {

  list (params) {
    return request.get('/log/list', { params })
  }
}
