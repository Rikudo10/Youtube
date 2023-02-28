import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import state from './state'

const productsmodule = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
export default productsmodule