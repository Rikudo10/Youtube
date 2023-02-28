export default {
    addItemToCart(state, itemId){
        let item = state.products.find(product => product.id === +itemId)
        state.cart.push(item)
        state.products.splice(state.products.indexOf(item),1)
    },
    removeItemFromCart(state, itemId){
        let item = state.cart.find(product => product.id === +itemId)
        state.products.push(item)
        state.cart.splice(state.cart.indexOf(item), 1)
    },
    ChangeSearch(state, srch){
        state.search = srch;
    },
    GET_PRODUCT_BY_ID(state, payload){
        state.activeProduct = state.products.find(item => item.id === +payload)
    },
    changeCategoryId(state, id){
        state.categoryId = id
    }
}