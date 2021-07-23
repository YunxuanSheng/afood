/*
 * @Description:
 * @Date: 2021-06-30 17:00:17
 * @LastEditors: qingmou
 * @LastEditTime: 2021-07-08 14:56:48
 */
import request from '@/utils/request'
import qs from 'qs'
import { convertFilter } from '@/utils'
export default {
  getListByParentId ({ prefix, parentId }) {
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
    return request.get(`/${prefix}/list`, {
      params: convertFilter(params),
      paramsSerializer: params => qs.stringify(params)
    })
  },
  list ({ prefix, params }) {
    return request.get(`/${prefix}/list`, {
      params: convertFilter(params),
      paramsSerializer: params => qs.stringify(params)
    })
  },
  publish ({ type, tip }) {
    return request.get('/file/releaseJson', { params: { isRelease: true, tip, type } })
  },
  /**
   * 智能亚运置顶
   * @param {*} param0
   * @returns
   */
  toTopByIntelligence ({ id, type }) {
    return request.post(`/agIntelligence/toTop/${id}?type=${type}`)
  },
  /**
   * 亚运视频置顶
   * @param {*} param0
   * @returns
   */
  toTopByVideo ({ id }) {
    return request.post(`/agVideo/toTop/${id}`)
  }
}
