import productsmodule from "../modules/products"

const productsPlugin = function(store){
    store.registerModule('products', productsmodule)
}

export default productsPlugin