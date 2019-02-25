<template>
    <div class="home">
        <header>
            <i class="icon iconfont icon-xiangzuo" @click="goBack"></i>
            <div class="h_img">
                <img src="/static/img/touxiang.png" alt="">
                <p></p>
            </div>
            <div class="h_abi">
                <router-link to="/handle/login">登录</router-link>
                <router-link to="/handle/registry">注册</router-link>
            </div>
        </header>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>

export default {
    data(){
        return {

        }
    },
    methods:{
        goBack(){
            this.$router.push("/content/home/homeList/hot")
        }
    }
}
</script>
<style scoped  lang="scss"> 
    .home{
        @include num(100%,100%);
        display: flex;
        flex-direction: column;
    }
    header{
        @include num(100%,3.2rem);
        background:-webkit-linear-gradient(left,#fc6e26,#ef5e43);
        padding:.15rem .2rem 0; 
        position: relative;
        i.icon{
            position: absolute;
            top:.2rem;
            left:.2rem;
            color:#fff;
        }
    }
    .h_img{
        @include num(100%,2.1rem);
        img{
            @include num(1.72rem,1.72rem);
            display: block;
            margin:0 auto;
        }
        p{
            @include num(100%,auto);
            text-align: center;
            margin-top:.05rem;
            color:#fff;
        }
    }
    .h_abi{
        @include num(100%,1rem);
        @include flex(space-around);
        padding:0 .2rem;
        a{
            font-size:.4rem;
            color:#ccc;
            &.router-link-active{
                color:#fff;    
            }
        }
    }
    section{
        flex:1;
        background: #eee;
    }
</style>