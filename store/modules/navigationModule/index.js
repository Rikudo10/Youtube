
import HomeIcon from '../../../src/components/icons/HomeIcon.vue'
import ShortsIcon from '../../../src/components/icons/ShortsIcon.vue'
import Subscribedicon from '../../../src/components/icons/Subscribedicon.vue'

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