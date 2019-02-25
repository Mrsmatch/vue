<template>
    <div class="box">
        <p class="tit">尊敬的用户你好，您正在使用共享家具，还有7天缴费，请及时缴费</p>
        <img src="" alt="">
        <ul>
            <li><span>套餐：安居六间</span></li>
            <li><span>起租日期：2017.1.1</span></li>
            <li><span>租金到期：2017.10.5</span><button type="button">去缴租</button></li>
        </ul>
    </div>
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
    .box{
        width:90%;
        border:.01rem solid #ccc;
        border-radius: .05rem;
        margin:.2rem auto;
        padding:.2rem;
       p,span{
           font-size:.25rem;
       }
       ul{
           li{
               line-height: .4rem;
               display: flex;
               justify-content: space-between;
               button{
                   border:0;
                   background:orange;
                   color:#fff;
                   padding:.1rem;
               }
           }
       }
    }
</style>