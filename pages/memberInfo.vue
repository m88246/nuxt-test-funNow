<template>
  <div class="memberInfoPage">
    <div class="navsWrap">
      <nuxt-link 
        class="navsItem" 
        :class="{active: activeNav === navsIndex}"
        v-for="(navsItem,navsIndex) in navsGroup"
        :key="navsIndex"
        :to="navsItem.url"
        @click.native="clickNavs(navsIndex)"
      >
        {{navsItem.name}}
      </nuxt-link>
      <!-- <nuxt-link class="navsItem" to="/memberInfo">index</nuxt-link>
      <nuxt-link class="navsItem" to="/memberInfo/about">about</nuxt-link> -->
    </div>
    <div>
      <NuxtChild />
    </div>
  </div>
</template>

<script>
export default {
  name: 'memberInfo',
  data() {
    return {
      activeNav: 0,
      navsGroup: [
        {
          name: 'index',
          url: '/memberInfo'
        },
        {
          name: 'about',
          url: '/memberInfo/about'
        }
      ]
    };
  },
  methods:{
    clickNavs(index){
      this.activeNav = index
    }
  }
}
</script>