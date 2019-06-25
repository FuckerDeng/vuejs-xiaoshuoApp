<template>
  <div id="home">
    <!-- 轮播图用Mint-ui的swipe组件完成 -->
    <mt-swipe :auto="2500">
      <mt-swipe-item v-for="item in lunbo" :key="item">
        <img :src="item">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格使用MUI的grid-default组件完成 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9 gongge">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/other/rank">
          <!-- iconfont icon-bangdan  为阿里妈妈的字体文件，在static/css/site/css中定义 -->
          <span class="mui-icon iconfont icon-bangdan"></span>
          <div class="mui-media-body">榜单</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/other/groups">
          <span class="mui-icon iconfont icon-classify_icon"></span>
          <div class="mui-media-body">分类</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/other/best">
          <span class="mui-icon iconfont icon-jingpin"></span>
          <div class="mui-media-body">精品</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/other/donebook">
          <span class="mui-icon iconfont icon-wanjie"></span>
          <div class="mui-media-body">完结</div>
        </router-link>
      </li>
    </ul>

    <!-- 展示小说内容 使用MUI的图文列表进行完成 -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media ficion" v-for="item in fictions" :key="item.id">
        <router-link to="/fiction">
          <img class="mui-media-object mui-pull-left fictionimg" src="../../static/imgs/test.png">
          <div class="mui-media-body">
            <p class="ficionName">{{item.fictionName}}</p>
            <div class="mui-ellipsis fictionDesc">{{item.fictionDesc}}</div>
            <div class="fictionBottom">
              <span>{{item.author}}</span>
              <span>{{item.fictiontype}}</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunbo: [],
      fictions: []
    };
  },
  created() {
    this.getLunBo();
    this.getTop20();
  },
  methods: {
    getLunBo() {
      this.$axios
        .get("/getLunBo")
        .then(res => {
          let urls = res.data.split(",");
          this.lunbo = [];
          for (let i = 0; i < urls.length; i++) {
            this.lunbo.push(urls[i]);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getTop20() {
      this.$axios
        .get("/getTop20")
        .then(res => {
          this.fictions = [];
          let fs = res.data;
          for (let i = 0; i < fs.length; i++) {
            this.fictions.push(fs[i]);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
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

.mint-swipe-item img {
  background-color: pink;
  width: 100%;
  height: 200px;
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border-right: 0px;
  border-bottom: 0px;
}

.gongge {
  border-bottom: 1px solid #eee;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  padding: 7px 7px;
}
.mui-table-view-cell {
  width: 90px;
  height: 90px;
}

.ficion {
  width: 100%;
}

.fictionimg {
    width: 50px;
    height: 73px;
}

.ficion .ficionName{
    font-size: 15px;
    color: #000;
    font-weight: 700;
}

.fictionBottom{
    font-size: 13px;
    color: #8f8f94;
    display:flex;
    justify-content: space-between;
    
}


.fictionDesc {
    margin: 3px 1px;
    color: #8f8f94;
    line-height: 14px;
    font-size: 12px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    letter-spacing:1px;

}
</style>