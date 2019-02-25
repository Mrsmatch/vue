<template>
    <div class="throw">
        <Header>退租</Header>
        <div class="repair-list">
            <ul>
                <li>
                    <p class="left">套餐:</p>
                    <p class="right"></p>
                </li>
                <li>
                    <p class="left">申请日期:</p>
                    <p class="right">空调</p>
                </li>
                <li>
                    <p class="left">联系人:</p>
                    <p class="right">空调</p>
                </li>
                <li>
                    <p class="left">联系电话:</p>
                    <p class="right">空调</p>
                </li>
                <li>
                    <p class="left">退租状态:</p>
                    <p class="right">空调</p>
                </li>
            </ul>
        </div>
        <div class="mesg">
            <p>请保持您的手机畅通</p>
            <p>工作人员会在五个工作日内联系您</p>
            <p>工作人员接收完家电家具会在五个工作日内退还押金</p>
        </div>
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
    .throw {
        width: 100%;
        height: 100%;
        background: #f3f3f3;

        .repair-list {
            margin-top: .1rem;
            li {
                width: 100%;
                padding: .3rem 0;
                background: #ffff;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: .01rem solid #cccccc;

                .left {
                    margin: 0 .3rem;
                    font-size: .24rem
                }
                .right {
                    margin: 0 .3rem;
                    font-size: .24rem
                }
            }

            li:first-child{
                border-top: .01rem solid #cccccc;
            }
        }
        .mesg {
            width: 100%;
            height: 1.01rem;
            background: #fff4dd;

            p {
                color: #fc7b04;
                margin: .06rem .3rem;
            }
        }
    }
</style>