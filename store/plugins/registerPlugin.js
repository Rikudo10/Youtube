import registermodule from "../modules/registermodule";

const registerPlugin = function(store){
    store.registerModule('register', registermodule)
}
export default registerPlugin