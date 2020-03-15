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
        <p>熟悉HTML5，CSS3，能够手写代码，布局页面，实现各种效果</p>
        <p>熟悉JavaScript，熟悉ES6常用语法</p>
        <p>熟悉DOM、BOM、Ajax、JSON等技术</p>
        <p>熟悉Vue框架的使用</p>
        <p>熟悉Git常用命令，进行多人协作开发</p>
        <p>熟悉webpack，npm等开发工具的使用</p>
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
      skillOut: ['webpack', 'Ajax', 'JSON', 'Git', 'HTML5', 'CSS3', 'Vue']
    }
  },
}
</script>

<style>

</style>