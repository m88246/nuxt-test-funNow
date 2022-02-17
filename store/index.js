import { apiPostLoginRequest } from '../api'

// state
export const state = () => ({
  isLogin: false,
  username: '',
});

// actions
export const actions = {
  handIsLogin({commit}, bool) {
    commit('handIsLogin',bool)
  },
  async handAuth({commit},payload){
    // const {username, password} = payload;
    try {
      // const res = await apiPostLoginRequest({username, password});
      const res = payload
      commit('LoginAuth',res);
    }catch(error) {
      console.log(error);
    }
  }
};

// mutations
export const mutations = {
  LoginAuth(state, res) {
    const {username, password} = res;
    this.$localStorage.set('userData', { username: username , password: password });
    state.isLogin = true
  },
  handIsLogin(state, bool) {
    state.isLogin = bool
    let userData = this.$localStorage.get('userData');
    state.username = userData.username
  }
};

// getters
export const getters = {
  loginState: state => state.isLogin,
  username: state => state.username
};
