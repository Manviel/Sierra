export const state = () => ({
  token: null
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = null;
  }
};

export const actions = {
  async login({ commit, dispatch }, formData) {
    const token = await new Promise(resolve => resolve("mock"));

    dispatch("setToken", token);
  },
  async setToken({ commit }, token) {
    await commit("setToken", token);
  },
  async logout({ commit }) {
    await commit("clearToken");
  }
};

export const getters = {
  isAuth: state => Boolean(state.token)
};
