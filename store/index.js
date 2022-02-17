import { apiPostLoginRequest } from '../api'

// state
export const state = () => ({});

// actions
export const actions = {
  async handAuth({commit},payload){
    const {username, password} = payload;
    console.log({username, password});
    try {
      const res = await apiPostLoginRequest({username, password});
      commit('LoginAuth',res);
    }catch(error) {
      console.log(error);
    }
  }
};

// mutations
export const mutations = {
  LoginAuth(state, res) {
    console.log(res.data);
  }
};

// getters
export const getters = {};
