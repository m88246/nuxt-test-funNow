<template>
  <div class="header">
    <nuxt-link to="/">
      <img class="icon" src="../assets/images/funNowIcon.svg">
    </nuxt-link>
    <nuxt-link to="/login" >
      <p>登入</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>