import request from '@/utils/request'

export default {
  // 登录
  login(data: Object) {
    return request({
      url: '/login',
      method: 'post',
      data
    })
  },
  // 获取用户信息
  getUserInfo() {
    return request({
      url: '/userInfo',
      method: 'get'
    })
  }
}