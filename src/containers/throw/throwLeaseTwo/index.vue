<template>
    <div class="throwlease">
        <Header>退租</Header>
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
            </ul>
        </div>

        <div class="classcount">
            <p><span><i class="icon iconfont icon-yonghu"></i></span> <input type="date" v-model="throwDate"></p>
            <p><span><i class="icon iconfont icon-yonghu"></i></span> <input type="text" placeholder="请输入租赁人" v-model="throwName"></p>
            <p><span><i class="icon iconfont icon-yonghu"></i></span> <input type="text" placeholder="请输入租赁人电话号码" v-model="throwPhone"></p>
            <p class="message">需与公租局签订的合同资料信息相同</p>
        </div>
        <textarea class="text" name="" id="" cols="30" rows="10" placeholder="请输入退租原因" v-model="throwMesg"></textarea>
        <div @click="throws">
            <el-button type="text" @click="centerDialogVisible = true">退租</el-button>
        </div>
        <el-dialog title="提醒" :visible.sync="centerDialogVisible" width="30%" center>
            <span>您是否确定退租？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <div @click="flag">
                    <el-button type="primary" @click="centerDialogVisible = false">
                        确定
                    </el-button>
                </div>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import Header from "comp/header/index";
import "common/fonts/iconfont.css"

export default {
    props:{

    },
    components:{
        Header
    },
    data(){
        return {
            centerDialogVisible: false,
            center:true,
            data: {},
            userName: "",
            throwDate: "",
            throwName: "",
            throwPhone: "",
            throwMesg: "",
            arr: []
        }
    },
    computed:{

    },
    methods:{
        flag() {
            this.$router.push("/approved")
        },
        throws() {
           this.arr.push({throwDate:this.throwDate},{throwName:this.throwName},{throwPhone:this.throwPhone},{throwMesg:this.throwMesg})
            console.log(this.arr)
            this.$store.commit("updateRepairMesg",this.arr)
        }
    },
    created(){

    },
    mounted(){
        this.$store.state.shopList.hotList.map(item => {
            this.data = item
        })
        let user = JSON.parse(localStorage.getItem("user"))
        this.userName = user.userName
    }
}
</script>
<style scoped lang="scss">
    .throwlease {
        width: 100%;
        height: 100%;
        background: #f3f3f3;

        .repair-list {
            margin-top: .15rem;
            li {
                width: 100%;
                padding: .1rem 0;
                background: #ffff;
                display: flex;
                justify-content: space-between;
                align-items: center;

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

        .classcount {
            width: 100%;
            background: #ffff;
            margin: .2rem 0;

            p{
                display: flex;
                justify-content: space-around;
                align-items: center;
                position: relative;

                span{
                    position: absolute;
                    top: .4rem;
                    left: .4rem;
                }

                input {
                    outline: none;
                    border: none;
                    border-bottom: .01rem solid #cccccc;
                    width: 95%;
                    height: .93rem;
                    margin-left: .16rem;
                    text-indent: 4em
                }
            }
        }   
    }
    .message{
        width: 100%;
        height: 0.6rem;
        color: #fc7b04;
        background: #fff4dd;
        text-align: center;
    }
    .text {
        width: 100%;
        text-indent: 2em
    }
    .el-dialog__wrapper {
        width: 600px;
        height: 300px;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-left: -300px;
        margin-top: -150px;
        overflow: auto;
    }
    .el-button{
        width: 80%;
        height: .82rem;
        background: #fa9246;
        margin: .3rem auto;
        display: block;
        font-size: .24rem;
        color: #ffffff
    }
</style>