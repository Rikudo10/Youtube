const registermodule = {
    namespaced: true,


    state() {
        return {
            user: [

            ],
            api_key: import.meta.env.VITE_API_URL,

        }
    },

    mutations:{
        register(state,user){
            state.user.push(user)

        }


    },
    getters: {
    info(state){
        return state.user
    }
    },


    actions:{
        register({commit},info){
            commit("register",info)


        }
    }
}

export default registermodule