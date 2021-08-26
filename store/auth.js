/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-26 16:20:55
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-26 17:31:05
 */
export const state = () => ({
    user: null,
    authToken: null,
});

export const getters = {
    getUser: (state) => {
        return state.user
    }
}
export const actions = {
    async loadUser({ commit }) {
        await this.$axios.get('/user')
            .then(function (resp) {
                commit('storeUser', resp.data.data.name)
            })
            .catch(function (resp) {
                console.log('User could not be found', resp)
            })
    },
    loginUser({ commit }, details) {
        this.$axios.post('/login', details)
            .then(function (resp) {
                commit('storeUser', resp.data.data.name)
                commit('storeToken', resp.data.data.token)
            })
    },
    async logout({ commit }, details) {
        await this.$axios.post('/logout', details)
            .then(function () {
                commit('storeUser', null)
                commit('storeToken', null)
            })
    }
}

export const mutations = {
    storeUser (state, data) {
      state.user = data
    },
    storeToken (state, data) {
        state.authToken = data
        // console.log(state.authToken);
    }
  }
