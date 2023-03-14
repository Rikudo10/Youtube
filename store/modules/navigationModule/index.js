
import HomeIcon from '@/components/icons/Homeicon.vue'
import ShortsIcon from '@/components/icons/Shortsicon.vue'
import Subscribedicon from '@/components/icons/Subscribedicon.vue'

const navigationModule = {
    namespaced: true,
    state(){
        return {
            leftmenu: [
                {
                  id: 1,
                  title: 'მთავარი',
                  icon: HomeIcon
                },
                {
                  id: 2,
                  title: 'Shorts',
                  icon: ShortsIcon
                },
                {
                  id: 2,
                  title: 'გამომწერები',
                  icon: Subscribedicon
                }
              ]
        }
    },
    getters: {
        slidemenu(state){
            return state.leftmenu
        }
    }

}
export default navigationModule