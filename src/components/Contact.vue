<template>
  <div id="contact">
    <h2>联系我</h2>
    <div class="content-info">
      <ul>
        <li>灵感</li>
        <li>代码</li>
        <li>梦想</li>
        <li>未来</li>
      </ul>
      <div>
        <p>学习是一个充实愉悦的过程</p>
        <p>喜欢尝试，期待新鲜事物</p>
        <p>前端即兴趣，兴趣即未来</p>
        <p>行路有良友，便是捷径</p>
        <p>期待有机会与您共事</p>
      </div>
      <div class="info-tel">
        <img src="images/phone.svg" alt="">
        18540225267
      </div>
      <div class="info-email">
        <img src="images/email.svg" alt="">
        545784977@qq.com
      </div>
      <span class="info-border1"></span>
      <span class="info-border2"></span>
    </div>
  </div>
</template>

<script>
import './contact.scss';

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