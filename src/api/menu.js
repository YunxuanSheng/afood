/*
 * @Description: 用户请求类
 * @Date: 2021-05-11 16:40:07
 * @LastEditors: qingmou
 * @LastEditTime: 2021-06-30 10:00:37
 */
import request from '@/utils/request'
import qs from 'qs'
export default {

  findOne (id) {
    return request.get(`/menu/findOne/${id}`)
  },
  list () {
    return request.get('/menu/list')
  },
  del (id) {
    return request.post(`/menu/del/${id}`)
  },
  tree (params) {
    return request.get('/menu/tree', { params })
  },
  menuDesignTree () {
    return request.get('/menu/queryMenuDesignTree')
  },
  bindDesign (data) {
    return request.post('/menu/bindDesign', qs.stringify(data))
  }
}
