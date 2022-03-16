<template>
  <div class="header">
    <nuxt-link to="/">
      <img class="icon" src="../assets/images/funNowIcon.svg">
    </nuxt-link>
    <div @click="showMenu">選單</div>
    <div v-if="isLogin">{{username}} {{$t('welcome')}}</div>
    <nuxt-link to="/login" v-else>
      <p>登入</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed:{
    isLogin(){
      return this.$store.getters.loginState
    },
    username(){
      return this.$store.getters.username
    }
  },
  methods:{
    showMenu(){
      this.$bus.$emit('showMenu', true)
    }
  }
}
</script>