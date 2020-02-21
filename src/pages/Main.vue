<template>
  <div style="height:100%;">
    <myHeader></myHeader>

    <swiper style="height:100%;" :options="swiperOption">
      <swiper-slide class="slide-home">
        <div class="home-cover slide-top">
          <Home></Home>
        </div>
      </swiper-slide>

      <swiper-slide class="slide-introduce slide-top">
        <Introduce></Introduce>
      </swiper-slide>

      <swiper-slide class="slide-skill slide-top">
        <Skill></Skill>
      </swiper-slide>

      <swiper-slide style="background:gray;">Slide 4</swiper-slide>
      <swiper-slide style="background:black;">Slide 5</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import myHeader from '../components/Header.vue';
import Home from '../components/Home.vue';
import Introduce from '../components/Introduce.vue';
import Skill from '../components/Skill.vue';

export default {
  components: {
    myHeader,
    Home,
    Introduce,
    Skill
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
  background-image: url('../assets/bg.jpg');
  background-size: 100% 100%;

  .home-cover {
    height: 100%;
    width: 100%;
    background-color: rgba(222,222,222,0.5);
  }
}
.slide-introduce {
  background: url('../assets/cover.png') #107bb3;
}
.slide-skill {
  background: url('../assets/cover.png') #DEDEDE;
}
</style>