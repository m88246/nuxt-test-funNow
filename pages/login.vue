<template>
  <div>
    <Header />
    <div class="loginPage">
      <div class="loginBox">
        <div class="center">
          <div class="input-box">
            <p>NAME</p>
            <input
              type="text"
              placeholder="輸入使用者名稱"
              v-model="user.username"
            />
            <!-- <p v-if="error_message.username" class="error">
              {{ error_message.username }}
            </p> -->
          </div>
          <div class="input-box mb-20">
            <p>PASSWORD</p>
            <input type="password" placeholder="輸入密碼" v-model="user.password" />
            <!-- <p v-if="error_message.password" class="error">
              {{ error_message.password }}
            </p> -->
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
        username: "mike",
        password: "7654321"
      },
      error_message: {
        username: "",
        password: ""
      }
    };
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