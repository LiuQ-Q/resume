<template>
  <header id="my-header">
    <div class="header-logo">
      <div class="logo-img">
        <img src="../assets/logo.jpg" alt="">
      </div>
      <div class="logo-resume">
        <p class="resume-p1">{{ name }}</p>
        <p class="resume-p2">个人简历</p>
      </div>
    </div>
    <nav class="header-nav d-none d-md-block">
      <ul>
        <li
          v-for="(nav, index) in navs"
          :key="index"
        >
          <a @click="target(nav.target)">{{ nav.title }}</a>
        </li>
      </ul>
    </nav>
    <!-- <nav class="header-nav d-xl-none">
      <ul>
        <li>
          <a @click="target('resume')">简历</a>
        </li>
      </ul>
    </nav> -->
  </header>
</template>

<script>
import './header.scss';

export default {
  data() {
    return {
      name: '刘琦',
      navs: [
        { title: '首页', target: 'main' },
        { title: '简历', target: 'resume' },
        { title: '项目', target: 'project' },
        { title: '关于', target: 'about' },
      ]
    }
  },
  methods: {
    target(target) {
      if (target === 'main') {
        //  window.location.href = 'http://www.baidu.com'
        this.$emit('slide-to', 0)
      } else if (target === 'resume') {
        this.$router.push('/resume')
      } else if (target === 'project') {
        this.$emit('slide-to', 3)
      } else if (target === 'about') {
        this.$emit('slide-to', 4)
      }
    }
  }
}
</script>