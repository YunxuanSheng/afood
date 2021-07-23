import request from '@/utils/request'
import qs from 'qs'
export default {
  getCaptcha () {
    return request.get('platform/noLogin/noLogin/getCaptcha')
  },
  login (data) {
    return request.post('/platform/noLogin/noLogin/login', qs.stringify(data))
  },

  // 用户主页信息获取
  getNews () {
    return request.get('/afood/cmsContent/auth/queryMiniListPage')
  },

  // 订单信息获取
  getTransactions () {
    return request.get('/afood/busiSupplyOrder/auth/queryMiniListPage')
  },

  // 关闭订单
  closeOrder (data) {
    console.log(qs.stringify(data))
    return request.post('/afood/busiSupplyOrder/closeOrder', qs.stringify(data))
  },

  // 完成订单
  completeOrder (data) {
    return request.post('/afood/busiSupplyOrder/completeOrder', qs.stringify(data))
  },

  // 获取配送列表
  getTaskList () {
    return request.get('/afood/busiStationDelivery/auth/queryMiniListPage')
  },

  // 开始运输
  startTransport (data) {
    return request.post('/afood/busiStationDelivery/startDelivery', qs.stringify(data))
  }
}
