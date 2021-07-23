import request from '@/utils/request'
import qs from 'qs'
export default {
  getCaptcha () {
    return request.get('platform/noLogin/noLogin/getCaptcha')
  },
  login (data) {
    return request.post('/platform/noLogin/noLogin/login', qs.stringify(data))
  }
}
