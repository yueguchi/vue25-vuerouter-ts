import * as MT from '../const/mutation-types'

const state = {
  isLogin: false
}

const getters = {
  getLoginStatus: state => {
    return state.isLogin ? 'ログイン中' : 'ログインしていません'
  }
}

const mutations = {
  [MT.LOGIN_SUCCESS_MUTATION] (state) {
    state.isLogin = true
  },
  [MT.LOGOUT_SUCCESS_MUTATION] (state) {
    state.isLogin = false
  }
}

const actions = {
  doLogin (context) {
    context.commit(MT.LOGIN_SUCCESS_MUTATION)
  },
  doLogout (context) {
    context.commit(MT.LOGOUT_SUCCESS_MUTATION)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
