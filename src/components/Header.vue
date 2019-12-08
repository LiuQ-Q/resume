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
    <nav class="header-nav">
      <ul>
        <li
          v-for="(nav, index) in navs"
          :key="index"
        >
          <a :href="nav.href">{{ nav.title }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import './header.scss';

export default {
  data() {
    return {
      name: '刘琦',
      navs: [
        { title: '首页', href: '' },
        { title: '简历', href: '' },
        { title: '项目', href: '' },
        { title: '关于', href: '' },
      ]
    }
  },
}
</script>