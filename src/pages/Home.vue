<template>
  <div style="height:100%;">
    <!-- <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">

        </b-navbar-nav>
      </b-collapse>
    </b-navbar> -->

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
export default {
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