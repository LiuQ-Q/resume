<template>
  <div style="height:100%;">
    <myHeader></myHeader>

    <swiper  style="height:100%;" :options="swiperOption">
      <swiper-slide style="background:red;">Slide 1</swiper-slide>
      <swiper-slide style="background:blue;">Slide 2</swiper-slide>
      <swiper-slide style="background:green;">Slide 3</swiper-slide>
      <swiper-slide style="background:gray;">Slide 4</swiper-slide>
      <swiper-slide style="background:black;">Slide 5</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import myHeader from '../components/Header.vue';

export default {
  components: {
    myHeader
  },
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style>

</style>