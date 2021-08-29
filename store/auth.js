/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-26 16:20:55
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-29 20:06:30
 */
export const state = () => ({
    errors: [],
    user: null,
    authToken: null,
});

export const getters = {
    getUser: (state) => {
        return state.user
    },
    errors: state => state.errors
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
        .then((response) => {
            commit('storeUser', response.data.data.name)
            commit('setToken', response.data.data.token)
            this.$router.push("/");
        })
        .catch(error => {
          if (error.response.data.errors) {
            commit('setErrors', error.response.data.errors);
          }
        });
    },
    async logout({ commit }) {
        await this.$axios.post('/logout')
            .then(function () {
                commit('storeUser', null)
                commit('removeToken')
            })
    }
}

export const mutations = {
    setErrors(state, errors) { state.errors = errors },
    storeUser (state, data) {
      state.user = data
    },
    setToken (state,data) {
        state.authToken = data
        this.$cookies.set('authToken', data, { path: '/', maxAge: 60 * 60 * 24 * 7 })
    },
    checkToken (state){
        if(!state.authToken) {
            state.authToken = this.$cookies.get('authToken') ? this.$cookies.get('authToken') : null;
        }
    },
    removeToken (state) {
        this.$cookies.remove('authToken')
        state.authToken = null
    },
  }
