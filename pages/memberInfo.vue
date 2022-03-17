<template>
  <div class="memberInfoPage">
    <div>會員資訊</div>
    <div>
      <nuxt-link to="/memberInfo">index</nuxt-link>
      <nuxt-link to="/memberInfo/about">about</nuxt-link>
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
      
    };
  }
}
</script>