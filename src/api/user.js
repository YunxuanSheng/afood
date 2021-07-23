/*
 * @Description: 用户请求类
 * @Date: 2021-05-11 16:40:07
 * @LastEditors: qingmou
 * @LastEditTime: 2021-07-05 09:33:50
 */
import request from '@/utils/request'
import qs from 'qs'
export default {

  userById (id) {
    return request.get(`/user/findOne/${id}`)
  },
  userActive ({ id, status }) {
    return request.post('/user/active', { id, status })
  },
  list (params) {
    return request.get('/user/list', { params })
  },
  del (id) {
    return request.post(`/user/del/${id}`)
  },
  selectById (id) {
    return request.get(`/user/selectResourceById?id=${id}`)
  },
  saveRelation (data) {
    return request.post('/user/saveRelation', qs.stringify(data))
  },
  resetPwd (id) {
    return request.post('/user/reset-passwd', qs.stringify(id))
  },
  get () {
    return request.get('/user/current')
  },
  modifyPwd (data) {
    return request.post('/user/update/pwd', qs.stringify(data))
  }
}
