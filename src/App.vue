<template>
    <div>
        <span v-text="msg" class="hello"></span>
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
        <router-view></router-view>
        <mt-button type="default">default</mt-button>
        <mt-button type="primary" size="large" @click="tishi">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
    </div>
</template>

<script>
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

