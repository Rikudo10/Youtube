import accountsicon from '@/components/icons/Accountsicon.vue'
import messagesicon from '@/components/icons/Messagesicon.vue'
import uploadicon from '@/components/icons/Uploadicon.vue'

export  default {
    install(app, options){
        app.component('Special-Icon', accountsicon)
        app.component('Special-Icon2', messagesicon)
        app.component('Special-Icon3', uploadicon)
    },
}