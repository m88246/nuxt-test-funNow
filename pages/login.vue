<template>
  <div>
    <Header />
    <div class="loginPage">
      <div class="loginBox">
        <div class="center" v-if="isLogin">
          <p>會員姓名: {{username}}</p>
        </div>
        <div class="center" v-else>
          <div class="input-box">
            <p>NAME</p>
            <input
              type="text"
              placeholder="輸入使用者名稱"
              v-model="user.username"
            />
          </div>
          <div class="input-box mb-20">
            <p>PASSWORD</p>
            <input type="password" placeholder="輸入密碼" v-model="user.password" />
          </div>
          <button class="btn" @click="LoginFn">登入</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      user: {
        username: "Bob",
        password: "0000"
      },
      error_message: {
        username: "",
        password: ""
      }
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
  mounted(){
    if(this.$localStorage.get('userData').username){
      this.$store.dispatch('handIsLogin',true)
      console.log('true')
    }
  },
  methods: {
    LoginFn() {
      this.$store.dispatch('handAuth', {
        username: this.user.username,
        password:this.user.password
      });
    }
  }
}
</script>