export default {
    addItemToCartAction(context, itemId){
        setTimeout(context.commit('addItemToCart', itemId ), 10000)
    },
}
