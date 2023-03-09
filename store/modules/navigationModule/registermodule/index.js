const registermodule = {
    namespaced: true,


    state() {
        return {
            user: [

            ],
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
    },
        getApiUrl: (state) => {
          return  import.meta.env.VITE_API_URL
        }
    },


    actions:{
        register({commit},info){
            commit("register",info)


        }
    }
}

export default registermodule