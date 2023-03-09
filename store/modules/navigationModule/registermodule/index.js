const registermodule = {
    namespaced: true,


    state() {
        return {
            token: null,
            user: [

            ],
        }
    },

    mutations:{
        token(state, payload){
            state.token = payload.data.token
        },
        register(state,user){
            state.user.push(user)

        }


    },
    getters: {
    info(state){
        return state.user
    },
        getApiUrl: (state) => {
          return  import.meta.env.VITE_API_URL
        }
    },


    actions:{
        token({commit}, token){
            commit("register", token)
        },
        register({commit},info){
            commit("register",info)


        }
    }
}

export default registermodule