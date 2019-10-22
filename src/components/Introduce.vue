<template>
  <div class="introduce">
    <b-container>
      <h2>自我介绍</h2>
      <b-row class="introduce-content">
        <b-col xl="2" cols="0"></b-col>
        <b-col
          v-for="(content, index) in contents" :key="index"
          xl="2" cols="6"
        >
          <div class="content-img">
            <img :src="content.src">
          </div>
          <p>{{ content.message }}</p>
        </b-col>
      </b-row>
      <div class="introduce-info">
        <p>对计算机感兴趣,渴望从事IT行业,自学前端技术</p>
        <p>希望通过努力可以跨越专业不符的障碍</p>
        <p>有一定自学能力,能快速接受新知识</p>
        <p>可以良好的分析与自我管理;有良好的团队协作和沟通能力</p>
      </div>
    </b-container>
  </div>
</template>

<script>
import './introduce.scss';

export default {
 data() {
   return {
     contents: [
       { src: require('../assets/education.png'), message: '学历/本科' },
       { src: require('../assets/age.png'), message: '年龄/24岁' },
       { src: require('../assets/location.png'), message: '坐标/天津' },
       { src: require('../assets/status.png'), message: '状态/求职' },
     ]
   }
 },
}
</script>

<style>

</style>