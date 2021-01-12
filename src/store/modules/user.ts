import { getToken, setToken } from '@/utils/auth'
import api from '@/api/user'

const user = {
  state: {
    token: getToken(),
  },

  mutations: {
    SET_TOKEN: (state: any, token: String) => {
      state.token = token
    },
  },

  actions: {
    // 登录
    Login(context: any, userInfo: { username: String, password: String }) {
      return new Promise((resolve, reject) => {
        api.login(userInfo).then((res: any) => {
          if (res.code === 200) {
            setToken(res.data)
            context.commit('SET_TOKEN', res.data)
          }
          resolve('success')
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}

export default user