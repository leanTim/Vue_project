<template>
    <div>
      <navBar title="新闻列表"></navBar> 
			<div class="demo">
				<ul>
						<li v-for="message in content" :key="message.id">
							<router-link :to="{name: 'news.detail', query: {id: message.id}}">
								<img class="" :src="message.img_url">
								<div >
									<span>{{message.title | convert-title(14)}}</span>
									<div class="news-desc">
										<p>点击数:{{message.click}}</p>
										<p>发表时间:{{message.add_time|convert-time}}</p>
									</div>
								</div>
							</router-link>
						</li>
						<li class="line"></li>
					</ul>
			</div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      content: []
    };
  },
  created() {
    this.$axios.get("getnewslist").then(res => {
      console.log(res.data.message);
      this.content = res.data.message;
    });
  }
};
</script>
<style scoped>
.demo a {
  display: block;
  width: 100%;
  height: 44px;
  color: #000;
  padding: 10px 0px 10px 10px;
}
.demo img {
  float: left;
  width: 42px;
  height: 42px;
  margin-right: 20px;
}
.demo a div {
  float: left;
  width: 250px;
}
.demo span {
  display: block;
  width: 100%;
  font-size: 17px;
  line-height: 21px;
  /*    white-space: nowrap;
    overflow: hidden;*/
}
.demo a p {
  float: left;
  color: #0bb0f5;
  font-size: 14px;
  line-height: 21px;
}
.demo p:nth-child(2) {
  float: right;
  padding-right: 15px;
}
.line {
  margin-left: 16px;
  transform: scaleY(0.5);
  border-bottom: 1px solid #c8c7cc;
}
</style>