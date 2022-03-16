import Vue from 'vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// 在6.0以上版本，分页器、前进后退按钮需单独引入才能使用

import swiper, { Navigation, Pagination } from 'swiper'

swiper.use([Navigation, Pagination])

export default () => {

    Vue.use(VueAwesomeSwiper)

}