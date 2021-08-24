/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-24 14:31:22
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-24 14:36:43
 */
export const MUTATIONS = {
    SET_TODO : 'SET_TODO',
    ADD_TODO : 'ADD_TODO',
    REMOVE_TODO : 'REMOVE_TODO',
  }
  
  export const state = () => ({
    todoList: [
      {
        id: 1,
        title : "Todo 1"
       },
      {
        id: 2,
        title : "Todo 2"
       },
      {
        id: 3,
        title : "Todo 2"
       }
     ]
   })
  
  export const mutations = {
    [MUTATIONS.SET_TODO](state, todo){
     state.todoList = todo
   },
    [MUTATIONS.ADD_TODO](state, item){
     state.todoList.push(item)
   },
    [MUTATIONS.REMOVE_TODO](state, id){
      const itemIndex = state.todoList.findIndex((i) => i.id === id)
      state.todoList.splice(itemIndex,1)
   }
  }
  
  export const actions = {
     async getTodoList({ commit }) {
      const { data: todo } = await this.$axios.get(`https://jsonplaceholder.typicode.com/todos`)
      commit(MUTATIONS.SET_TODO,todo)
    },
    addTodo({ commit },item) {
      commit(MUTATIONS.ADD_TODO,item)
    },
    removeTodo({ commit },id) {
      commit(MUTATIONS.REMOVE_TODO,id)
    }
  }
  
  export const getters = {
   todoList : (state) => state.todoList
  }