<template>
  <div class="aboutPage">
    這是關於頁面<br>
    這是練習作品不做營利使用<br>
    如內容有雷同純屬意外
    <!-- <div>
      <nuxt-link :to="localePath('/')">index</nuxt-link>
      <nuxt-link :to="localePath('about')">about</nuxt-link>
    </div>
    <div>
      <nuxt-link :to="switchLocalePath('en')">en</nuxt-link>
      <nuxt-link :to="switchLocalePath('fr')">fr</nuxt-link>
      <nuxt-link :to="switchLocalePath('es')">es</nuxt-link>
      <nuxt-link :to="switchLocalePath('zh-tw')">zh-tw</nuxt-link>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
<style lang="scss">
.aboutPage {
  text-align: center;
  line-height: normal;
}
</style>
