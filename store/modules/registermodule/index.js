import axios from "axios";

const registermodule = {
    namespaced: true,


    state() {
        return {
            token: null,
            user: null,
            users: [],
        }
    },
    getters: {
        getInfo(state){
            return state.user
        },
        token(state) {
            return state.token
        },
        getUserAvatar(state, getters) {
            return getters.getInfo ? state.user.avatar : null;
        },
        getUserName(state, getters) {
            return getters.getInfo ? state.user.name : null;
        },
        getEmail(state, getters) {
            return getters.getInfo ? state.user.email : null;
        },
        getUsers(state) {
            return state.users;
        }
    }, 

    mutations: {
        replaceToken(state, val){
            state.token = val
        },
        SAVE_TOKEN(state, payload) {
            state.token = payload
        },
        SAVE_USER(state, payload){
            state.user = payload
        },
        SAVE_USERS(state, users) {
            state.users = users;
        }
    },


    actions: {
        token({ commit }, {user, token}) {
            commit("SAVE_TOKEN", token)
            commit("SAVE_USER", user)
            localStorage.setItem("token", JSON.stringify(token))
        },
        async getUsers({commit, getters}) {
            const res = await axios.get(`categories`).catch(e => console.log(e));
              if (res.data.success) {
                commit("SAVE_USERS", res.data.data);
              }
        },
        async addUser({getters, dispatch}, name) {
            await axios.post(
              `categories`,
              {
                name,
                type: "news",
              },
            ).catch(e => console.log(e));
            dispatch('getUsers');
          },
          async deleteUser({getters, dispatch}, id) {
             await axios.delete(
              `categories/${id}`,

            ).catch(e => console.log(e));
            dispatch('getUsers');
          },
          async editUser({getters, dispatch}, user) {
            await axios.put(
              `categories/${user.id}`,
              {
                name: user.name,
                type: "news",
              },
            ).catch(e => console.log(e));
            dispatch('getUsers');
          },
    }
}

export default registermodule