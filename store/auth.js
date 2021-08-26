/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-26 16:20:55
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-26 16:31:50
 */
export const state = () => ({
    user: null
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
                commit('storeUser', resp.data)
            })
            .catch(function (resp) {
                console.log('User could not be found', resp)
            })
    },
    async loginUser({ commit }, details) {
        await this.$axios.post('/login', details)
            .then(function (resp) {
                commit('storeUser', resp.data.user)
                localStorage.setItem('authToken', resp.data.token)
            })
    },
    async logout({ commit }, details) {
        await this.$axios.post('/logout', details)
            .then(function () {
                commit('storeUser', null)
                localStorage.removeItem('authToken')
            })
    }
}

export const mutations = {
    storeUser (state, data) {
      state.user = data
    }
  }
