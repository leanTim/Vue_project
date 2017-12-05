<template>
  <div>

    <mt-header title="信息管理中心"></mt-header>
    <router-view class="tmpl"></router-view>
    <!-- 底部导航 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="Home">
        <img slot="icon" src="../static/img/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="Members">
        <img slot="icon" src="../static/img/vip.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="ShopCart">
        <img slot="icon" src="../static/img/shopcart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="Find">
        <img slot="icon" src="../static/img/find.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: '',
      }
    },
    watch: {
      selected (newV) {
        this.$router.push({
          name: newV
        })
      }
    }
  }
</script>

<style scoped>

</style>