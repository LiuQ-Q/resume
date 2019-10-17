<template>
  <div style="height:100%;">
    <myHeader></myHeader>

    <swiper  style="height:100%;" :options="swiperOption">
      <swiper-slide class="slide-home">
        <div class="home-cover slide-top">
          <Home></Home>
        </div>
      </swiper-slide>
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
import Home from '../components/Home.vue';

export default {
  components: {
    myHeader,
    Home
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

<style lang="scss">
.slide-top {
  padding-top: 150px;
}
.slide-home {
  background-image: url('../assets/bg1.jpg');
  background-size: 100% 100%;

  .home-cover {
    height: 100%;
    width: 100%;
    background-color: rgba(222,222,222,0.5);
  }
}
</style>