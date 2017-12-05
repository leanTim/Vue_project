<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img, index) in imgs" :key="index">
        <a :href="img.url">
          <img :src="img.img" alt="">
        </a>
      </mt-swipe-item>
    
    </mt-swipe>
    <!--  九宫格-->
    <my-ul>
      <my-li v-for="(router, index) in homeRouters" :key="index">
        <router-link :to="router.link.name">
          <div :class="'back-img ' + router.className">
            {{router.title}}
          </div>
        </router-link>
      </my-li>
   

    </my-ul>


  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [],
      homeRouters: [
        {className: 'news', title: '新闻列表', link: {name: '/news/list'}},
        {className: 'pic', title: '图文分享', link: {name: '/news/list'}},
        {className: 'goods', title: '商品列表', link: {name: '/news/list'}},
        {className: 'feedback', title: '留言反馈', link: {name: '/news/list'}},
        {className: 'search', title: '搜索资讯', link: {name: '/news/list'}},
        {className: 'callme', title: '联系我们', link: {name: '/news/list'}},
      ]
    };
  },
  created() {
    this.$axios
      .get("getlunbo")
      .then(res => {
        this.imgs = res.data.message;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
/* 轮播图样式 */
.mint-swipe-item img {
  width: 100%;
}
.mint-swipe {
  height: 30%;
}
/* 九宫格样式 */
/*九宫格样式*/
.back-img {
  background-size: 50px;
  background-repeat: no-repeat;
  background-position: 40px 35px;
  font-size: 20px;
  font-family: "Microsoft YaHei";
}

li a {
  color: #000;
}


/*图片*/
.news {
  background-image: url(../../static/img/news.png);
}
.pic {
  background-image: url(../../static/img/picShare.png);
}
.goods {
  background-image: url(../../static/img/goodShow.png);
}
.feedback {
  background-image: url(../../static/img/feedback.png);
}
.search {
  background-image: url(../../static/img/search.png);
}
.callme {
  background-image: url(../../static/img/callme.png);
}

</style>