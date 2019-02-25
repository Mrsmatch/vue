<template>
    <header>
       <span :style="{opacity:opacity}"> <i class="icon iconfont icon-xiangzuo" @click="goBack" ></i></span>
        <p><slot></slot></p>
        <i class="icon iconfont icon-gengduo"></i>
    </header>
</template>

<script>

export default {
    props:["option"],
    data(){
        return {
            opacity:1,
        }
    },
    methods:{
        goBack(){
            if(this.opacity){
                if(this.option!==undefined&&this.option.router!==undefined){
                    this.$router.push(this.option.router);
                }else{
                    this.$router.go(-1);
                }
            }
        }
    },
    mounted(){
        if(this.option!==undefined&&this.option.left!==undefined){
            this.opacity=0;
        }
    }
}
</script>
<style scoped  lang="scss">
    header{
        @include num(100%,.88rem);
        @include flex;
        background:-webkit-linear-gradient(left,#fc6e26,#ef5e43);
        i.icon,p{
                color:#fff;
                font-size:.28rem;
        }
        p{
            font-size:.34rem;
        }
        padding:0 .2rem;
    }
</style>