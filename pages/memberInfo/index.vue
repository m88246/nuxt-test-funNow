<template>
  <div class="memberInfoPage">
    <div v-if="!isLogin">請登入</div>
    <div v-else>會員姓名:{{username}}</div>
  </div>
</template>

<script>
export default {
  name: 'memberInfoIndex',
  data() {
    return {
      
    };
  },
  computed:{
    isLogin(){
      return this.$store.getters.loginState
    },
    username(){
      return this.$store.getters.username
    }
  },
}
</script>