<template>
    <div class="mine">
        <header>
            <p class="left">
                <i class="icon iconfont icon-angle-left" @click="goBack"></i>
            <div class="center-prot">
                <p class="prot">
                    <span>
                        <b v-show="!data.userName" @click="login">请登录</b>
                        <img :src="data.userImg" alt="">
                    </span>
                </p>
            </div>
            <p class="right"> 
                 <i class="icon iconfont icon-naozhong"></i>
            </p>
        </header>
        <section>
            <ul class="top">
                <router-link to="" tag="li">
                    <p class="left">
                        <span><i class="icon iconfont icon-yonghu"></i></span>
                        <span>{{data.userName}}</span>
                    </p>
                    <p class="right">
                        <i class="icon iconfont icon-angle-right"></i>
                    </p>
                </router-link>
                <router-link to="/changephone" tag="li">
                    <p class="left">
                        <span><i class="icon iconfont icon-shouji1"></i></span>
                        <span>{{data.userPhone}}</span>
                    </p>
                    <p class="right">
                        <i class="icon iconfont icon-angle-right"></i>
                    </p>
                </router-link>
                <router-link to="/changepwd" tag="li">
                    <p class="left">
                        <span><i class="icon iconfont icon-anquanshezhi"></i></span>
                        <span>修改密码</span>
                    </p>
                    <p class="right">
                        <i class="icon iconfont icon-angle-right"></i>
                    </p>
                </router-link>
            </ul>
            <ul class="bottom">
                <router-link to="/lease" tag="li">
                    <p class="left">
                        <span><i class="icon iconfont icon-yonghu"></i></span>
                        <span>我的租约</span>
                    </p>
                    <p class="right">
                        <i class="icon iconfont icon-angle-right"></i>
                    </p>
                </router-link>
                <router-link to="/rent" tag="li">
                    <p class="left">
                        <span><i class="icon iconfont icon-yonghu"></i></span>
                        <span>缴租管理</span>
                    </p>
                    <p class="right">
                        <i class="icon iconfont icon-angle-right"></i>
                    </p>
                </router-link>
                <router-link to="/question" tag="li">
                    <p class="left">
                        <span><i class="icon iconfont icon-yonghu"></i></span>
                        <span>问题咨询</span>
                    </p>
                    <p class="right">
                        <i class="icon iconfont icon-angle-right"></i>
                    </p>
                </router-link>
                <router-link to="/feedback" tag="li">
                    <p class="left">
                        <span><i class="icon iconfont icon-shouji1"></i></span>
                        <span>信息反馈</span>
                    </p>
                    <p class="right">
                        <i class="icon iconfont icon-angle-right"></i>
                    </p>
                </router-link>
                <router-link to="" tag="li">
                    <p class="left">
                        <span><i class="icon iconfont icon-anquanshezhi"></i></span>
                        <span @click="close">退出登录</span>
                    </p>
                </router-link>
            </ul>
        </section>
        <Dialog :content="content" :sure="sure"/>
    </div>
</template>

<script>
import "common/fonts/iconfont.css";

export default {
    data(){
        return {
            content:"退出登录",
            sure:"确定",
            data:{}
        }
    },
    mounted(){
        if(localStorage.getItem("user")){
            this.data=JSON.parse(localStorage.getItem("user"));
        }
    },
    methods:{
        close(){
            this.$store.commit("updateDialog", true);
            this.content="退出登录",
            this.sure="确定"
            this.$router.push("/content/home/homeList/hot");
            localStorage.setItem("user","");
            this.data={}
        },
        login(){
            this.$store.commit("updateDialog", true);
            this.content="请登录",
            this.sure="请登录"
        },
        goBack(){
            this.$router.push("/content/home/homeList/hot");
        }
    }
}
</script>
<style scoped  lang="scss">
    .mine{
        width: 100%;
        background: #f2f2f2;
        flex: 1;
        display: flex;
        flex-direction: column;
        header{ 
            width: 100%;
            height: 2.74rem;
            display: flex;
            justify-content: space-between;
            background: #f96c27;
            
            .left {
                margin: .3rem 0 0 .3rem;
                .iconfont {
                    font-size: .34rem;
                    color:#fff;
                }
            }
            .right {
                margin: .3rem .3rem 0 0;
                .iconfont {
                    font-size: .34rem;
                    color:#fff;
                }
            }
            .center-prot {
                margin-top: .5rem;
                .prot{
                    width: 1.78rem;
                    height: 1.78rem;
                    background: rgba(255, 255, 255, .3);
                    border-radius: 50%;
                    position: relative;

                    span{
                        display: block;
                        width: 1rem;
                        height: 1rem;
                        background: #ffffff;
                        border-radius: 50%;
                        left: 50%;
                        top: 50%;
                        margin-top: -.5rem;
                        margin-left: -.5rem;
                        position: absolute;
                        color:#000;
                        text-align: center;
                        line-height: 1rem;
                        img{
                            @include num(100%,auto);
                            border-radius: 100%;
                            display:block;
                        }
                    }
                }
            }
           
        }

        .top{
            margin-top: .3rem;
            background: #ffffff;
            li{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: .78rem;
                border-bottom: .01rem solid #cccccc;

                .left{
                    margin-left: .3rem;

                    span{
                        font-size: .24rem;
                        display: inline-block;
                        margin-left: .1rem;

                        .iconfont {
                            font-size: .24rem;
                            color: #f96c27;
                        }
                    }
                }

                .right{
                    margin-right: .3rem;
                    .iconfont {
                        font-size: .24rem;
                    }
                }
            }
        }
        .bottom{
            margin-top: .8rem;
            background: #ffffff;
            li{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: .78rem;
                border-bottom: .01rem solid #cccccc;

                .left{
                    margin-left: .3rem;

                    span{
                        font-size: .24rem;
                        display: inline-block;
                        margin-left: .1rem;

                        .iconfont {
                            font-size: .24rem;
                            color: #f96c27;
                        }
                    }
                }

                .right{
                    margin-right: .3rem;
                    .iconfont {
                        font-size: .24rem;
                    }
                }
            }
        }
    }
    section{
        flex:1;
        overflow-y: auto;
    }
</style>