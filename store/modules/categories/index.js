import state from "./state";
import getters from "./getters";
import actions from "./actions";

const categories = {
    namespaced: true,
    state,
    getters,
    actions
}

export default categories
