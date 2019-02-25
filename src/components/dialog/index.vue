<template>
    <div class="mask" v-show="flag">
        <div class="dialog">
            <h4>
                提示
                <span @click="close">&times;</span>
            </h4>
            <div class="con">{{content}}</div>
            <div class="d_footer">
                <span @click="login">{{sure}}</span>
                <span @click="close">取消</span>
                <p></p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";

export default {
    props:["content","sure"],
    data(){
        return {
        }
    },
    computed:{
        flag(){
            return this.$store.state.dialogFlag
        }
    },
    methods:{
        close(){
            this.$store.commit("updateDialog", false);
        },
        login(){
            if(this.content==="请登录"){
                this.$router.push("/handle/login");
            }else if(this.content==="退出登录"){
                this.$cookie.delete("token")
            }else{
                this.$router.push("/application");
            }
            this.$store.commit("updateDialog", false);
        }
    }
}
</script>
<style scoped  lang="scss">
    .mask{
        @include num(100%,100%);
        position: absolute;
        top:0;
        left:0;
        background: rgba(175, 173, 173, 0.37);
        @include flex(center);
        z-index: 100;
    }
    .dialog{
        @include num(75%,35%);
        background: #fff;
        border-radius: .2rem;
        display: flex;
        flex-direction: column;
        h4{
            @include num(100%,1rem);
            @include cen(1rem);
            font-size: .4rem;
            font-weight: normal;
            position: relative;
            span{
                position: absolute;
                top:.25rem;
                right:.2rem;
                font-size: .4rem;
                @include cir(.45rem);
                @include cen(.35rem);
                border:thin solid #666;
                border-radius: 100%;
            }
        }
        .con{
            @include num(100,1.6rem);
            @include cen(1.6rem);
            font-size: .5rem;
            border-bottom: thin solid #ccc;
        }
        .d_footer{
            flex:1;
            @include flex(space-around);
            position: relative;
            span{
                font-size: .3rem;
            }
            p{
                @include num(.02rem,100%);
                background: #ccc;
                position: absolute;
                top:0;
                left:50%;
                margin-left: .02rem;
            }
        }
    }
    
</style>