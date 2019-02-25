<template>
    <div class="repair">
        <Header>报修记录</Header>
        <ul>
            <li>
                <p class="left">{{arr[0].name}}</p>
                <p class="right">2017/15/12</p>
            </li>
        </ul>
    </div>
</template>
<script>
import Header from "comp/header/index";

export default {
    props:{

    },
    components:{
        Header
    },
    data(){
        return {
            arr: [],
        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){
        this.$store.state.repairList.map(item => {
            this.arr.push(item)
        })
    }
}
</script>
<style scoped lang="scss">
    .repair {
        width: 100%;
        height: 100%;
        background: #f3f3f3;
    }
    ul {
        width: 100%;
        margin-top: .3rem;

        li{
            width: 100%;
            height: 1rem;
            background: #ffffff;
            margin: .1rem 0;
            border-top: .01rem solid #cccccc;
            border-bottom: .01rem solid #cccccc;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            p{
                font-size: .24rem;
            }
            .left {
                margin: 0 .5rem;
            }
            .right {
                color: #999;
                margin: 0 .2rem;
            }
        }
    }
</style>