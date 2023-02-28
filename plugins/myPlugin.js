import accountsicon from '../src/components/icons/accountsicon.vue'
import messagesicon from '../src/components/icons/messagesicon.vue'
import uploadicon from '../src/components/icons/uploadicon.vue'

export  default {
    install(app, options){
        app.component('Special-Icon', accountsicon)
        app.component('Special-Icon2', messagesicon)
        app.component('Special-Icon3', uploadicon)
    },
}