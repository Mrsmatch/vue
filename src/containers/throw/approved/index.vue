<template>
    <div class="success">
        <Header>申请成功</Header>
        <div class="img">
            <img src="static/img/success_03.png" alt>
        </div>
        <div class="repair-list">
            <ul>
                <li>
                    <p class="left">套餐:</p>
                    <p class="right">{{data.Name}}</p>
                </li>
                <li>
                    <p class="left">申请日期:</p>
                    <p class="right">{{data.CreateDate}}</p>
                </li>
                <li>
                    <p class="left">联系人:</p>
                    <p class="right">{{userName}}</p>
                </li>
                <li>
                    <p class="left">联系电话:</p>
                    <p class="right">{{userPhone}}</p>
                </li>
                <li>
                    <p class="left">退租状态:</p>
                    <p class="right">已退租</p>
                </li>
            </ul>
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
            data: {},
            list: {},
            userName: "",
            userPhone: ""
        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){      
        console.log(this.$store.state.repairMesg)
        console.log(this.$store.state.shopList.hotList)
        this.$store.state.shopList.hotList.map(item => {
            this.data = item
        })
        this.$store.state.shopList.hotList.map(data => {
            this.list = data
        })
        let user = JSON.parse(localStorage.getItem("user"))
        this.userName = user.userName
        this.userPhone = user.userPhone
    }
}
</script>
<style scoped lang="scss">
    .success {
        width: 100%;
        height: 100%;
        background: #f3f3f3;

        .img {
            width: 100%;
            padding: .6rem 0;
            background: #ffff;

            img {
                display: block;
                width: 1.47rem;
                margin: 0 auto;
            }
        }

        .repair-list {
            margin-top: .3rem;
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
        }
    }
</style>