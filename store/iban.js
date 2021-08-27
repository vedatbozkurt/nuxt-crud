/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-26 15:24:45
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-27 17:15:19
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
        const response = await this.$axios.get('/iban');
        commit('setIbans', response.data.ibans.data);
    },
    async addIban({ commit }, iban) {
        const response = await this.$axios.post('/iban/store', iban);
        // commit('newIban', response.data);
    },
    async fetchIban({ commit }, ibanid) {
        const response = await this.$axios.get(`/iban/${ibanid}`);
        commit('setIban', response.data);
    },
    async updateIban({ commit }, iban) {
        iban.status = iban.status_id;
        const response = await this.$axios.put(`/iban/${iban.id}`, iban)
        .then((response) => {
            // commit('updateSingleIban', response.data);
        })
        .catch(error => {
            console.log(error.response)
        //   if (error.response.data.errors) {
        //     this.errors = error.response.data.errors;
        //   }
        });
    },
    async deleteIban({ commit }, id) {
        await this.$axios.delete(`/iban/${id}`);
        commit('removeIban', id);
    },
};


export const mutations = {
    setIbans(state, ibans) { state.ibans = ibans },
    setIban(state, iban) { state.iban = iban },
    // newIban(state, iban) { state.ibans.unshift(iban) },
    // updateSingleIban: (state, updIban) => {
    //     const index = state.ibans.findIndex(iban => iban.id === updIban.id);
    //     if (index !== -1) {
    //         state.ibans.splice(index, 1, updIban);
    //     }
    // },
    removeIban(state, id) {
        let i = state.ibans.map(item => item.id).indexOf(id);
        state.ibans.splice(i, 1)
    },
};
