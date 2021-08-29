/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-26 15:24:45
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-29 20:11:46
 */
export const state = () => ({
    errors: [],
    ibans: [],
    iban: {}
});

export const getters = {
    allIbans(state) { return state.ibans },
    singleIban(state) { return state.iban },
    errors: state => state.errors
};

export const actions = {
    async fetchIbans({ commit }) {
        const response = await this.$axios.get('/iban');
        commit('setIbans', response.data.ibans.data);
    },
    async addIban({ commit }, iban) {
        await this.$axios.post('/iban/store', iban)
        .then((response) => {
            this.$router.push("/ibans");
        })
        .catch(error => {
          if (error.response.data.errors) {
            commit('setErrors', error.response.data.errors);
          }
        });
        // commit('newIban', response.data);
    },
    async fetchIban({ commit }, ibanid) {
        const response = await this.$axios.get(`/iban/${ibanid}`);
        commit('setIban', response.data);
    },
    async updateIban({ commit }, iban) {
        iban.status = iban.status_id;
        await this.$axios.put(`/iban/${iban.id}`, iban)
        .then((response) => {
            this.$router.push("/ibans");
        })
        .catch(error => {
          if (error.response.data.errors) {
            commit('setErrors', error.response.data.errors);
          }
        });
    },
    async deleteIban({ commit }, id) {
        await this.$axios.delete(`/iban/${id}`)
        .then((response) => {
            commit('removeIban', id);
        })
        .catch(error => {
          if (error.response.data.errors) {
            commit('setErrors', error.response.data.errors);
          }
        });
        
    },
};

export const mutations = {
    setErrors(state, errors) { state.errors = errors },
    setIbans(state, ibans) { state.ibans = ibans },
    setIban(state, iban) { state.iban = iban },
    removeIban(state, id) {
        let i = state.ibans.map(item => item.id).indexOf(id);
        state.ibans.splice(i, 1)
    },
};
