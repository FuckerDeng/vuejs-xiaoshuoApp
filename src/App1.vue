<template>
    <div>
        <span v-text="msg" class="hello"></span>
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
        <router-view></router-view>
        <mt-button type="default">default</mt-button>
        <mt-button type="primary" size="large" @click="tishi">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
        <hr>
        			<ul class="mui-table-view mui-table-view-chevron">
				<li class="mui-table-view-cell mui-media">
					<a class="mui-navigate-right">
						<img class="mui-media-object mui-pull-left" src="../static/imgs/cbd.jpg">
						<div class="mui-media-body">
							CBD
							<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a class='mui-navigate-right' href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../static/imgs/muwu.jpg">
						<div class="mui-media-body">
							远眺
							<p class='mui-ellipsis'>静静的看这个世界，最后终于疯了</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a class="mui-navigate-right">
						<img class="mui-media-object mui-pull-left" src="../static/imgs/yuantiao.jpg">
						<div class="mui-media-body">
							幸福
							<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
						</div>
					</a>
				</li>
			</ul>
    </div>
</template>

<script>
//minit-ui的js组件，在哪里使用，就需要在哪里导入对应的js组件，css组件直接在main.js中导入后，
//项目中的所有组件都可以再template中使用了
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            msg:"hello world!"
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

