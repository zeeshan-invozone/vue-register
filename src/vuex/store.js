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
      commit('ADD_NEW_TODO', todo);
    },
    async deleteTodo({ commit }, id) {
      commit('DELETE_TODO', id);
    },
  },
  mutations: {
    ADD_NEW_TODO: (state, todo) => {
      state.todolist.unshift(todo);
    },
    DELETE_TODO: (state, id) => {
      state.todolist = state.todolist.filter((todo) => todo.id !== id);
    },
  },
});

export default store;
