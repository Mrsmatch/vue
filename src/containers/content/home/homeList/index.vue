<template>
    <div class="home">
           <Header :option="opt">享悦猪</Header>
        <Banner/>
        <div class="curve">
            <img src="/static/img/1_02.498afee.png" alt="" style="height: 15px; width: 100%;">
        </div>
        <ul class="home_page_reminder_tab">
            <li>
                <router-link to="/content/home/homeList/hot">热门套餐</router-link>
            </li>
            <li>
                <router-link to="/content/home/homeList/combination">自由组合</router-link>
            </li>
            <li>
                <router-link to="/content/home/homeList/combination">精选推荐</router-link>
            </li>
        </ul>
        <section>
            <router-view></router-view>
        </section>
        <Dialog :content="content" :sure="sure"/>
    </div>
</template>
<script>
import Banner from "comp/banner";

export default {
    data(){
        return {
            content:"请登录",
            sure:"请登录",
            opt:{
                left:false
            }
        }
    },
    components:{
        Banner
    }
}
</script>
<style scoped lang="scss">
  section{
        flex:1;
        overflow: auto;
    }
    .home{
        flex:1;
        display: flex;
        flex-direction: column;
    }
    
    .home_page_reminder_tab{
        @include num(100%,.8rem);
        @include cen(.8rem);
        @include flex;
        border-bottom: thin solid #ccc;
        li{
            flex:1;
            text-align: center;
            a{
                font-size:.31rem;
            }
        }
    }
</style>