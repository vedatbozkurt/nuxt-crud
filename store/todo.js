/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-24 14:31:22
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-26 14:45:48
 */
export const state = () => ({
    todoList: [
        {
            id: 1,
            title: "Todo 1"
        },
        {
            id: 2,
            title: "Todo 2"
        },
        {
            id: 3,
            title: "Todo 3"
        }
    ]
})

export const mutations = {
    SET_TODO(state, todo) {
        state.todoList = todo
    },
    ADD_TODO(state, item) {
        state.todoList.push(item)
    },
    REMOVE_TODO(state, id) {
        const itemIndex = state.todoList.findIndex((i) => i.id === id)
        state.todoList.splice(itemIndex, 1)
    }
}

export const actions = {
    async getTodoList({ commit }) {
        const { data: todo } = await this.$axios.get(`https://jsonplaceholder.typicode.com/todos`)
        commit('SET_TODO', todo)
    },
    addTodo({ commit }, item) {
        commit('ADD_TODO', item)
    },
    removeTodo({ commit }, id) {
        commit('REMOVE_TODO', id)
    }
}

export const getters = {
    todoList: (state) => state.todoList
}