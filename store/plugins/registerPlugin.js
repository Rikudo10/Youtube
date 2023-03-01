import registermodule from "../modules/navigationModule/registermodule";

const registerPlugin = function(store){
    store.registerModule('register', registermodule)
}
export default registerPlugin