/* eslint-disable no-unused-vars */
import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
    state: {
        // todos: [
        //     {
        //         id: 1,
        //         title: 'Todo One'
        //     },
        //     {
        //         id: 2,
        //         title: 'Todo Two'
        //     }
        // ]
        todos: []
    },
    getters: {
        allTodos(state) {
            return state?.todos
        }
    },
    actions: {
        async fetchTodos({ commit }) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            console.log('res', response.data);
            commit('setTodos', response.data)
        },
        async addTodo({ commit }, title) {
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, copleted: false });
            commit('newTodo', response.data)
        },
        async deleteTodo({ commit }, id) {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            commit('removeTodo', id)
        },
        async filterTodo({ commit }, e) {
            const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
            console.log('res', limit);
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
            commit('setTodos', response.data);
        },
        async updateTodo({ commit }, updTodo) {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo);
            console.log('updateTodo', response.data);
            commit('updateTodo', response.data)
        }
    },
    mutations: {
        setTodos: (state, todos) => (state.todos = todos),
        newTodo: (state, todo) => state.todos.unshift(todo),
        removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
        updateTodo: (state, updTodo) => {
            const index = state.todos.findIndex(todo => todo.id === updTodo.id)
            if (index !== -1) {
                 state.todos.splice(index, 1, updTodo);
            }
        }
    }

})



