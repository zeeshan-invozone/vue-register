import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    todolist: [],
  },

  getters: {
    allTodos: (state) => state.todolist,
  },

  actions: {
    async addTodo({ commit }, todo) {
      commit('newTodo', todo);
    },
    async deleteTodo({ commit }, id) {
      commit('delTodo', id);
    },
  },
  mutations: {
    newTodo: (state, todo) => {
      console.log('state', state);
      console.log('todo', todo);
      state.todolist.unshift(todo);
    },
    delTodo: (state, id) => {
      console.log('id', id);
      state.todolist.filter((todo) => todo.id != id);
    },
  },
});

export default store;
