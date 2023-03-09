const registermodule = {
    namespaced: true,


    state() {
        return {
            token: null,
            user: [],
        }
    },

    mutations: {
        TOKEN(state, payload) {
            state.token = payload
        },
        register(state, user) {
            state.user.push(user)

        }


    },
    getters: {
        info(state) {
            return state.user
        },
        getApiUrl: (state) => {
            return import.meta.env.VITE_API_URL
        }
    },


    actions: {
        token({commit}, token) {
            commit("TOKEN", token)
        },
        register({commit}, info) {
            commit("register", info)


        }
    }
}

export default registermodule