import { createStore } from 'vuex'
import categoriesPlugin from './plugins/categoriesPlugin'
import navigationPlugin from './plugins/navigationPlugin'
import productsPlugin from './plugins/productsPlugin'

export default createStore({
    plugins: [ navigationPlugin, productsPlugin, categoriesPlugin]
})