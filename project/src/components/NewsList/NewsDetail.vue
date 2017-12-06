<template>
    <div>
      <navBar title="新闻详情"></navBar>
      <div class="news-title">
        <p>{{newsData.title}}</p>
        <div>
          <span>{{newsData.click}}次点击</span>
          <span>分类:民生经济</span>
          <span>添加时间:{{newsData.add_time | convert-time}}</span>
        </div>
      </div>
      <div class="news-content" v-html="newsData.content"></div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        newsData: {}
      }
    },
    created () {
      var id = this.$route.query.id
      this.$axios.get('getnew/' + id)
      .then(res => {
        console.log(res.data.message[0])
        this.newsData = res.data.message[0]
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
</script>
<style scoped>
.news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
}

.news-title span {
    margin-right: 30px;
}

.news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}


/*主体文章的左右距离*/

.news-content {
    padding: 10 5;
}
</style>
