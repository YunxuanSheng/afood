/*
 * @Description: 用户请求类
 * @Date: 2021-05-11 16:40:07
 * @LastEditors: qingmou
 * @LastEditTime: 2021-06-30 10:00:52
 */
import request from '@/utils/request'
import qs from 'qs'
import { convertFilter } from '@/utils'
export default {

  findOne (id) {
    return request.get(`/dict/findOne/${id}`)
  },
  list (params) {
    return request.get('/dict/list', { params })
  },
  tree (params) {
    return request.get('/dict/tree', { params })
  },
  del (id) {
    return request.post(`/dict/del/${id}`)
  },
  getListByParentId (parentId) {
    const params = {
      pageNumber: 1,
      pageSize: 1000,
      filters: {
        parentId: {
          operator: 'eq',
          val: parentId
        }
      }
    }
    return request.get('/dict/list', {
      params: convertFilter(params),
      paramsSerializer: params => qs.stringify(params)
    })
  }
}
