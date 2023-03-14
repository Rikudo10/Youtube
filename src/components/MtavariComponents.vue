<script setup>
import DropDownMenu from "@/components/DropDownMenu.vue";
import Search from "@/components/Search.vue";
import youtubeicon from './icons/Youtubeicon.vue'
import {useStore} from 'vuex'
import {computed} from 'vue'

const store = useStore()


const getAvatar = computed(() => store.getters['register/getUserAvatar']);

const menubar = computed(() => store.getters['sidebar/slidemenu'])
</script>
<template>
  <nav class="myclass1 flex items-center justify-between flex-wrap bg-neutral-900	 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6 mydiv">
      <a class="youtubelogo" href="#">
        <youtubeicon/>
        <span class="font-semibold text-xl tracking-tight youtube">Youtube </span>
      </a>
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox"/>
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <ul class="menu__box">
            <span class="leftmenu">
              <li class="li1" v-for="slider in menubar " :key="slider">
                <component :is="{ ...slider.icon }"/>
                {{ slider.title }}
              </li>
            </span>
          <li class="accounts1"><router-link to="/dashboard">categorys</router-link></li>
        </ul>
      </div>
    </div>
    <Search/>
    <div class="allicons">
      <div class="upload">
        <Special-Icon3/>
      </div>
      <div class="messages">
        <Special-Icon2/>
      </div>
      <div class="accounts">
        <DropDownMenu />
      </div>
    </div>

  </nav>
</template>

<style scoped>
.accounts1 {
  padding-top: 20px;
}
.li1 {
  padding-left: 17px;
}

.youtubelogo {
  display: flex;
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

.allicons {
  display: flex;
  color: white;
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

#menu__toggle:checked + .menu__btn > span {
  transform: rotate(45deg);
}

#menu__toggle:checked + .menu__btn > span::before {
  top: 0;
  transform: rotate(0deg);
}

#menu__toggle:checked + .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}

#menu__toggle:checked ~ .menu__box {
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

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #616161;
  transition-duration: .25s;
}

.menu__btn > span::before {
  content: '';
  top: -8px;
}

.menu__btn > span::after {
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
}
</style>

