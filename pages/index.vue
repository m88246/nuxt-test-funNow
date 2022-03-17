<template>
  <div class="indexPage">
    <div v-swiper:mySwiper="swiperOption" class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in banners" :key="index+1" class="swiper-slide banner slideItem">
          {{item}}
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
      // dataImage: [
      //   {
      //     // 图片路径
      //     imgUrl: require("./images/banner/banner2.png")
      //   },
      //   {
      //     imgUrl: require("./images/banner/banner3.png")
      //   },
      //   {
      //     imgUrl: require("./images/banner/banner4.png")
      //   },
      //   {
      //     imgUrl: require("./images/banner/banner5.png")
      //   },
      // ]
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
