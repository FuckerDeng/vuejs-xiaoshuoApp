<template>
    <div>
        <!-- 1.利用mint-ui中的header组件完成头部 -->
        <!-- <mt-header fixed title="傍午小说"></mt-header> -->
        <!-- 2.利用view-router 提供路由站位符 -->
        <router-view></router-view>
        <!-- 3.利用mint-ui中的tabbar组件完成固定底部 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">书城</span>
			</router-link>
			<router-link class="mui-tab-item" to="/bookshelf">
				<span class="mui-icon iconfont icon-shujia"></span>
				<span class="mui-tab-label">书架</span>
			</router-link>
			<router-link class="mui-tab-item" to="/feedback">
				<span class="mui-icon iconfont icon-fankui"></span>
				<span class="mui-tab-label">反馈</span>
			</router-link>
			<router-link class="mui-tab-item" to="/myself">
				<span class="mui-icon iconfont icon-jiaose"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
//minit-ui的js组件，在哪里使用，就需要在哪里导入对应的js组件，css组件直接在main.js中导入后，
//项目中的所有组件都可以再template中使用了
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            msg:"hello world!哈哈"
        }
    },
    methods: {
        tishi(){
            Toast('老子好心提醒你！');
        }
    },
    created() {

    },
}
</script>

<style scoped>

    .hello {
        color:red;
    }
</style>

