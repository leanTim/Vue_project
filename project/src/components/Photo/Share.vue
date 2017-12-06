<template>
    <div>
        <!-- 引入返回导航 -->
        <div class="photo-header">
          <ul>
            <li v-for="category in categories" :key="category.id">
              <a href="javascript:;" @click="changePage(category.id)">{{category.title}}</a>
            </li>
              
          </ul>
        </div>
        <div class="photo-list">
          <ul>
            <li v-for="imgData in images" :key="imgData.id">
              <router-link :to="{name: 'photo.detail', params:{id: imgData.id}}">
                <img :src="imgData.img_url">
                <p>
                  <span>{{imgData.title}}</span>
                  <br>
                  <span>{{imgData.zhaiyao}}</span>
                </p>
              </router-link>
            </li>
          </ul>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    changePage(id) {
      this.$axios
        .get("getimages/" + id)
        .then(res => {
          
          this.images = res.data.message;
          if (this.images.length === 0) {
            return this.$toast({
              message: "没有图片",
              duration: 2000
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  data() {
    return {
      categories: [],
      images: []
    };
  },
  created() {
    let id = this.$route.params.categoryId;
    this.$axios
      .all([
        this.$axios.get("getimgcategory"),
        this.$axios.get("getimages/" + id)
      ])
      .then(
        this.$axios.spread((categoryRes, imgsRes) => {
          this.categories = categoryRes.data.message;

          this.categories.unshift({
            id: 0,
            title: "全部"
          });
          this.images = imgsRes.data.message;
          
        })
      )
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style>
.photo-header li {
  list-style: none;
  display: inline-block;
  margin-left: 10px;
  height: 30px;
}

.photo-header ul {
  /*强制不换行*/
  white-space: nowrap;
  overflow-x: auto;
  padding-left: 0px;
  margin: 5;
}

/*下面的图片*/

.photo-list li {
  list-style: none;
  position: relative;
}

.photo-list li img {
  width: 100%;
  height: 230px;
  vertical-align: top;
}

.photo-list ul {
  padding-left: 0px;
  margin: 0;
}

.photo-list p {
  position: absolute;
  bottom: 0px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 0px;
}

.photo-list p span:nth-child(1) {
  font-weight: bold;
  font-size: 16px;
}
</style>
