<script setup>
import youtubeicon from './../icons/youtubeicon.vue'
import uploadicon from './../icons/uploadicon.vue'
import messagesicon from './../icons/messagesicon.vue'
import accountsicon from './../icons/accountsicon.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'


const store = useStore()

const menubar = computed(() => store.getters['sidebar/slidemenu'])


const search = ""
const ChangeSearch = (e) => store.commit('products/ChangeSearch', e.target.value)

</script>

<template>
  <div class="mtavari">
    <nav class="myclass1 flex items-center justify-between flex-wrap bg-neutral-900	 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6 mydiv">

        <a class="youtubelogo" href="#">
          <youtubeicon /><span class="font-semibold text-xl tracking-tight youtube">Youtube</span>
        </a>

        <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>

          <ul class="menu__box">
            <span class="leftmenu">
              <li class="li1" v-for="slider in menubar " :key="slider">
                <component :is="{ ...slider.icon }" />
                {{ slider.title }}
              </li>
            </span>
          </ul>

        </div>

      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto mydiv2">
        <div class="text-sm lg:flex-grow">
          <input type="text" placeholder="ძიება" v-model="search" @input="ChangeSearch" class=" mysearch">
          <button type="submit" class="buttonsearch absolute  p-2.5 text-sm font-medium text-white">
            <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </div>
      </div>

      <div class="allicons">
        <div class="upload">
          <Special-Icon3 />
        </div>
        <div class="messages">
          <Special-Icon2 />
        </div>
        <div class="accounts  ">
          <Special-Icon />
        </div>
      </div>

    </nav>
  </div>
</template>

<style scoped>
.li1 {
  padding-left: 17px;
}

.youtubelogo {
  display: flex;
}

.accounts:hover {
  border: 1px solid white;
  border-radius: 10px;
}

.allicons {
  display: flex;
  gap: 30px;
}

.upload:hover {
  border: 1px solid white;
  border-radius: 10px;
}

.upload {
  width: 33px !important;
}

.messages:hover {
  border: 1px solid white;
  border-radius: 10px;
}

.messages {
  width: 33px !important;
}

.accounts {
  width: 33px !important;
  color: white !important;
}

.allicons {
  display: flex;
  color: white;
}

.buttonsearch {
  margin-left: -63px;
  height: 40px;
  width: 64px;
  border-radius: 0 40px 40px 0;
  background-color: #616161;
  border: 1px solid rgb(119, 118, 118);
}

.span1 {
  font-size: 18px;
  padding-left: 20px;
}

.icons1 {
  color: white;
  width: 27px;
  transform: translate(-11px, 30px);
}

.icons {
  color: white;
  width: 27px;
  transform: translate(-10px, 26px);
}

.mydiv2 {
  padding-right: 220px;
}

.mysearch {
  width: 495px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 20px;
  font-size: 15px;
  color: white;
  background-color: black;
  border: 1px solid rgb(119, 118, 118);
  padding-left: 20px;
}

.bi {
  color: red;
  width: 35px;
}

.youtube {
  height: 30px;
  width: 70px;
  font-size: 30px;
  padding-top: 7px;
}

.mydiv {
  padding-left: 70px;
  z-index: 5;
}

.myclass1 {
  position: fixed;
  width: 100%;
}

.mtavari {
  padding-bottom: 90px;
}

#menu__toggle {
  opacity: 0;
}

#menu__toggle:checked+.menu__btn>span {
  transform: rotate(45deg);
}

#menu__toggle:checked+.menu__btn>span::before {
  top: 0;
  transform: rotate(0deg);
}

#menu__toggle:checked+.menu__btn>span::after {
  top: 0;
  transform: rotate(90deg);
}

#menu__toggle:checked~.menu__box {
  left: 0 !important;
}

.menu__btn {
  position: fixed;
  transform: translate(10px, 10px);
  left: 30px;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.menu__btn>span,
.menu__btn>span::before,
.menu__btn>span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #616161;
  transition-duration: .25s;
}

.menu__btn>span::before {
  content: '';
  top: -8px;
}

.menu__btn>span::after {
  content: '';
  top: 8px;
}

.menu__box {
  display: block;
  position: fixed;
  top: 100px;
  left: -100%;
  width: 160px;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: black;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
  transition-duration: .25s;
  z-index: 1000 !important;
}

.menu__item {
  display: block;
  padding: 12px 24px;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: .25s;
}

.menu__item:hover {
  background-color: #3f40409d;
  border-radius: 20px;
}</style>