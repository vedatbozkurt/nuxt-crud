/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-26 15:24:45
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-26 15:34:19
 */
export const state = () => ({
    ibans: [],
    iban: {}
});

export const getters = {
    allIbans(state) {
        return state.ibans
    },
    singleIban(state) {
        return state.iban
    }
};

export const actions = {
    async fetchIbans({ commit }) {
        const response = await this.$axios.get('/ibans');
        commit('setIbans', response.data);
    },
    async addIban({ commit }, iban) {
        const response = await this.$axios.post('/ibans/create', iban);
        commit('newIban', response.data);
    },
    async fetchIban({ commit }, ibanid) {
        const response = await this.$axios.get(`/ibans/edit/${ibanid}`);
        commit('setIban', response.data);
    },
    async updateIban({ commit }, iban) {
        const response = await this.$axios.put(`/ibans/update/${iban.id}`, iban);
        // console.log(response.data);
        commit('updateSingleIban', response.data);
    },
    async deleteIban({ commit }, id) {
        await this.$axios.delete(`/ibans/delete/${id}`);
        commit('removeIban', id);
    },
};


export const mutations = {
    setIbans(state, ibans) { state.ibans = ibans },
    setIban(state, iban) { state.iban = iban },
    newIban(state, iban) { state.ibans.unshift(iban) },
    updateSingleIban: (state, updIban) => {
        const index = state.ibans.findIndex(iban => iban.id === updIban.id);
        if (index !== -1) {
            state.ibans.splice(index, 1, updIban);
        }
    },
    removeIban(state, id) {
        let i = state.ibans.map(item => item.id).indexOf(id);
        state.ibans.splice(i, 1)
    },
};