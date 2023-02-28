import navigationModule from "../modules/navigationModule/index"

const navigationPlugin = function(store){
    store.registerModule('sidebar', navigationModule)
}
export default navigationPlugin