<template>
  <div id="project">
    <b-container>
      <h2>项目</h2>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide
          v-for="(project, index) in projectList"
          :key="index"
        >
          <p class="project-name">{{ project.name }}</p>
          <p class="project-technology">{{ project.technology }}</p>
          <p class="project-abstract">{{ project.abstract }}</p>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </b-container>
  </div>
</template>

<script>
import './project.scss';

export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      projectList: [
        {
          name: "西青云统战App (答题系统)",
          technology: "vue + webpack + js",
          abstract: "西青云统战App追加功能，对内部知识进行考核，用代码将客户提供的数据转换为json数据，从中随机抽取题目，渲染答题页面，用户提交答案后，根据正确答案计算用户得分，将得分数据发送给上层进行处理，后续根据客户要求，对题库进行扩充以及简单优化界面，实际使用效果良好",
        },
        {
          name: "开源漏洞扫描平台 (前端)",
          technology: "vue + webpack + js + bootstrap-vue + highcharts",
          abstract: "与南洋理工大学合作开发，扫描指定上传文件的开源漏洞，利用南洋理工大学的线上扫描平台, 与线上服务器进行通信, 获取数据, 开发新版前端, 包括登录功能, 数据图形展示, 文件上传及下载功能，在后续实际应用中，项目表现良好",
        },
        {
          name: "安全开发管理平台 (前端)",
          technology: "vue + webpack + js + bootstrap-vue",
          abstract: "为中国银行开发一款对开发过程的安全与生命周期进行管理的平台，参与项目前端的设计与实现，与后端工程师进行数据交互，完成各个页面布局，实现登录功能，数据展示，以及项目中“将开发过程图形化”的功能等",
        },
        {
          name: "个人主页 (本网页)",
          technology: "vue + webpack + js",
          abstract: "目前为个人简历网页，仍在优化中",
        },
      ]
    }
  },
}
</script>

<style>

</style>