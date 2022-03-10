<template>
  <div>
    <div>
      <nuxt-link :to="localePath('/')">index</nuxt-link>
      <nuxt-link :to="localePath('about')">about</nuxt-link>
    </div>
    <div>
      <nuxt-link :to="switchLocalePath('en')">en</nuxt-link>
      <nuxt-link :to="switchLocalePath('fr')">fr</nuxt-link>
      <nuxt-link :to="switchLocalePath('es')">es</nuxt-link>
      <nuxt-link :to="switchLocalePath('zh-tw')">zh-tw</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
