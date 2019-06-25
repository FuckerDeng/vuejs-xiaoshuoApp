<template>
  <div id="home">
    <!-- 轮播图用Mint-ui的swipe组件完成 -->
    <mt-swipe :auto="2500">
      <mt-swipe-item v-for="item in lunbo" :key="item">
          <img :src="item" >
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
    data(){
        return {
            lunbo:[
                "../../static/imgs/muwu.jpg",
                "../../static/imgs/shuijiao.jpg",
                "../../static/imgs/yuantiao.jpg"
            ]
        };
    }
};
</script>

<style scoped>
.mint-swipe {
    width: 100%;
    height: 200px;
}

.mint-swipe-item {

        width: 100%;
    height: 200px;
}

.mint-swipe-item img{
        background-color: pink;
            width: 100%;
    height: 200px;
}


</style>