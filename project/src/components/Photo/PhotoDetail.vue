<template>
    <div>  
				<nav-bar title="图文详情"></nav-bar>
        <div class="photo-title">
            <p>{{imgInfo.title}}</p>
            <span>发起日期：{{imgInfo.add_time | convert-time}}</span>
            <span>{{imgInfo.click}}次浏览</span>
            <span>分类：民生经济</span>
        </div>
        <my-ul>
            <my-li v-for="(item, index) in imgList" :key="index">
                 <img class="preview-img" :src="item.src"  @click="$preview.open(index, imgList)">
            </my-li>    
        </my-ul>
        <div class="photo-desc">
            <p v-html="imgInfo.content"></p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      imgInfo: {},
      imgList: []
    };
  },
  created() {
    var id = this.$route.params.id;
    this.$axios
      .get("getimageInfo/" + id)
      .then(res => {
        this.imgInfo = res.data.message[0];
      })
      .catch(err => {
        console.log(err);
      });

    //获取图片
    this.$axios
      .get("getthumimages/" + id)
      .then(res => {
        this.imgList = res.data.message;
        this.imgList.forEach(ele => {
          ele.w = 600;
          ele.h = 400;
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
img {
  width: 100%;
}
li {
  list-style: none;
}

ul {
  margin: 0;
  padding: 0;
}

.photo-title {
  overflow: hidden;
}

.photo-title,
.photo-desc {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 5px;
  margin-bottom: 5px;
  padding-left: 5px;
}

.photo-title p {
  color: #13c2f7;
  font-size: 20px;
  font-weight: bold;
}

.photo-title span {
  margin-right: 20px;
}

.photo-desc p {
  font-size: 18px;
}
</style>
