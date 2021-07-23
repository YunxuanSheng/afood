/*
 * @Description: 设计
 * @Date: 2021-05-11 16:40:07
 * @LastEditors: qingmou
 * @LastEditTime: 2021-06-25 16:44:59
 */
import request from '@/utils/request'
import { convertFilter } from '@/utils'
import qs from 'qs'
export default {
  list (params) {
    params = convertFilter(params)
    return request.get('/design/list', {
      params,
      paramsSerializer: params => qs.stringify(params)
    })
  },
  del (id) {
    return request.post('/design/del/' + id)
  },
  save (data) {
    return request.post('/design/save', data)
  },
  findOne (id) {
    return request.get('/design/findOne/' + id)
  },
  findByCode (params) {
    return request.get('/design/findByCode', { params })
  }
}
