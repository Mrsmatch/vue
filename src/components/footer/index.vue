<template>
    <footer>
        <router-link to="/content/home/homeList/hot"  tag="span">
            <i class="icon iconfont icon-shouye"></i>
            首页
        </router-link >
        <router-link to="/shopcar"  tag="span">
            <i class="icon iconfont icon-gouwuche-xuanzhong"></i>
            结算单
        </router-link >
        <router-link to="/content/wode"  tag="span">
            <i class="icon iconfont icon-wode"></i>
           我的
        </router-link>
    </footer>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    footer{
        width:100%;
        height:.88rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-top:.01rem solid #ccc;
        span{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color:#555;
            i.icon{
                  font-size:.48rem;
            }
            font-size:.18rem;
        }
        .router-link-active{
            color:#fa793f;
            i.icon{
                color:#fa793f;
            }
        }
    }
</style>