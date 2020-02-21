<template>
  <div id="skill">
    <!-- <b-container> -->
      <h2>技能</h2>
      <div class="content-skill">
        <ul class="skill-in">
          <li
            v-for="(skill, index) in skillIn" :key="index"
          >{{ skill }}</li>
        </ul>
        <ul class="skill-out">
          <li
            v-for="(skill, index) in skillOut" :key="index"
          >{{ skill }}</li>
        </ul>
      </div>

      <div class="content-info">
        <p>熟悉css+div布局，熟悉JavaScript，了解HTML语义化</p>
        <p>熟悉浏览器的兼容，前端性能优化</p>
        <p>熟悉HTML5，熟悉响应式布局，百分比自适应布局</p>
        <p>熟悉CSS3动画技术，Animate.css动画库</p>
        <p>熟悉AJAX，JSON，熟悉正则表达式，JSONP跨域请求</p>
        <p>熟悉jQuery框架的使用，了解jQuery的DOM操作及事件处理</p>
        <p>熟悉node.js，熟悉vue框架的使用</p>
        <p>熟悉Sublime，WebStorm，Fireworks，Photoshop等开发工具</p>
      </div>
    <!-- </b-container> -->
  </div>
</template>

<script>
import './skill.scss';

export default {
 data() {
   return {
     skillIn: ['HTML', 'CSS', 'JS'],
     skillOut: ['jQuery', 'Ajax', 'JSON', 'PS', 'HTML5', 'CSS3', 'Vue']
   }
 },
}
</script>

<style>

</style>