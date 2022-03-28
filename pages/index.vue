<template>
  <div class="indexPage">
    <div v-swiper:mySwiper="swiperOption" class="swiper-container">
      <div class="swiper-wrapper">
        <div 
          v-for="(item, index) in dataImage" 
          :key="index+1" 
          class="swiper-slide banner slideItem"
        >
          <img :src="item.imgUrl">
        </div>
      </div>
      <div class="swiper-pagination my-pagination"></div>
      <!-- <div class="swiper-button-prev my-btn"></div>
      <div class="swiper-button-next my-btn"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      banners: [1,2,3,4,5],
      swiperOption: {
        loop : true,
        centeredSlides : true,
        centeredSlidesBounds: true,
        slidesPerView : 'auto',
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        setWrapperSize :true,
        grabCursor : true,
      },
      dataImage: [
        {
          // 图片路径
          imgUrl: require("../assets/images/swiper0.jpg")
        },
        {
          imgUrl: require("../assets/images/swiper1.jpg")
        },
        {
          imgUrl: require("../assets/images/swiper2.jpg")
        },
        {
          imgUrl: require("../assets/images/swiper3.jpg")
        },
      ]
    }
  },
  mounted(){
    if(this.$localStorage.get('userData').username){
      this.$store.dispatch('handIsLogin',true)
      console.log('true')
    }
  }
}
</script>
