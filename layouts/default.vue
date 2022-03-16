<template>
  <div id="app">
    <Menu />
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Menu from "../components/Menu.vue";
export default {
  components: {
    Header,
    Menu,
  },
  methods: {
    changeLanguage(item){
      this.activeLanguage = item
    }
  },
};
</script>
