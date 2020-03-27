<template>
  <div id="resume">
    <div 
      class="return"
      @click="returnMain()"
    >返回</div>
    <img src="../assets/resume.jpg">
  </div>
</template>

<script>
export default {
  methods: {
    returnMain () {
      this.$router.push('/main');
    }
  }
}
</script>

<style lang="scss">
  #resume {
    background: url('../assets/cover.png') #107bb3;
    text-align: center;

    .return {
      position: fixed;
      font-size: 25px;
      cursor: pointer;
      margin: 20px 0 0 40px;

      &:hover {
        color: blue;
      }
    }

    img {
      width: 1000px;
    }
  }
</style>