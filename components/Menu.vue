<template>
  <transition name="menu-slide-fade">
    <div class="menuWrap" v-show="showMenuWrap">
      <div class="title">
        <div @click="showMenuWrap=false">選單</div>
        <div class="closeBtn" @click="showMenuWrap=false">X</div>
      </div>
      <div class="languageWrap">
        <div class="languageItem" @click="showSelectWrap=!showSelectWrap">
          <img class="icon" src="../assets/images/ball.svg">
          <div class="languageText">{{activeLanguage.name}}</div>
        </div>
        <transition name="select-slide-fade">
          <div class="languageSelectWrap" v-show="showSelectWrap">
            <nuxt-link 
              :to="switchLocalePath(switchItem.key)" 
              v-for="(switchItem,switchIndex) in menu" 
              :key="switchIndex"
              class="languageItem"
              :class="{active: switchItem.name===activeLanguage.name}"
              @click.native="changeLanguage(switchItem)">
              {{switchItem.name}}
            </nuxt-link>
          </div>
        </transition>
        <nuxt-link :to="localePath('about')" class="languageItem" @click.native="showMenuWrap=!showMenuWrap">{{$t('about')}}</nuxt-link>
      </div>
      
      <!-- <div>
        <nuxt-link :to="localePath('/','zh-tw')">index</nuxt-link>
        <nuxt-link :to="localePath('/')">index</nuxt-link>
        <nuxt-link :to="localePath('about')">about</nuxt-link>
      </div> -->
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      activeLanguage:{
        name: '繁體中文',
        key: 'zh-tw'
      },
      menu:[
        {
          name: '繁體中文',
          key: 'zh-tw'
        },
        {
          name: 'English',
          key: 'en'
        }
      ],
      showMenuWrap: false,
      showSelectWrap: false,
    };
  },
  created(){
    this.$bus.$on('showMenu', (event) => {
      this.showMenuWrap = event
    })
  },
  methods: {
    changeLanguage(item){
      this.activeLanguage = item
      this.showSelectWrap = false
    }
  },
}
</script>