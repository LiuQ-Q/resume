<template>
  <div style="height:100%;">
    <myHeader @slide-to="slideTo"></myHeader>

    <swiper ref="mySwiper" style="height:100%;" :options="swiperOption">
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

      <swiper-slide class="slide-project slide-top">
        <Project></Project>
      </swiper-slide>

      <swiper-slide class="slide-contact slide-top">
        <Contact></Contact>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import myHeader from '../components/Header.vue';
import Home from '../components/Home.vue';
import Introduce from '../components/Introduce.vue';
import Skill from '../components/Skill.vue';
import Project from '../components/Project.vue';
import Contact from '../components/Contact.vue';

export default {
  components: {
    myHeader,
    Home,
    Introduce,
    Skill,
    Project,
    Contact
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
        },
        hashNavigation: true
      }
    }
  },
  methods: {
    slideTo(slideNum) {
      // console.log(slideNum);
      this.$refs.mySwiper.swiper.slideTo(slideNum, 1000, false);
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
.slide-project {
  background: url('../assets/cover.png') #109085;
}
.slide-contact {
  background: url('../assets/cover.png') #107bb3;
}
</style>