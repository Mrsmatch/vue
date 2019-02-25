<template>
    <div class="list">
        <Header>报修记录详情</Header>
        <div class="repair-list">
            <ul>
                <li>
                    <p class="left">报修物品</p>
                    <p class="right">{{arr[0].name}}</p>
                </li>
                <li>
                    <p class="left">报修描述</p>
                    <p class="right">{{arr[1].mesg}}</p>
                </li>
                <li>
                    <p class="left">申请人</p>
                    <p class="right">{{arr[2].user}}</p>
                </li>
                <li>
                    <p class="left">联系人电话</p>
                    <p class="right">{{arr[3].phone}}</p>
                </li>
            </ul>
        </div>
        <p class="message">  
            工作人员会在48小时内联系您，请保持您的手机畅通
        </p>
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
            arr: []
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
    .list {
        width: 100%;
        height: 100%;
        background: #f3f3f3;

        .repair-list {
            li {
                width: 100%;
                padding: .4rem 0;
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
        }

        .message {
            color: red;
            text-align: center;
            margin-top: .5rem;
            font-size: .24rem
        }
    }
</style>