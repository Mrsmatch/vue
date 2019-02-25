<template>
    <div class="list">
        <Header>商品详情</Header>
        <div class="count">
            <div class="img">
                <img :src="item.PicFile" alt="">
            </div>
            <div class="message">
                <div class="left">
                    <h3>
                        {{item.Name}}
                    </h3>
                    <p>
                        {{item.Description}}
                    </p>
                </div>
                <div class="right">
                    <p @click="addShop(item)">加入结算单</p>
                </div>
            </div>
            <div class="list-mesg">
                <p class="lef"> <span></span> 日租金：￥{{item.PreRent}}元 </p>
                <p class="rig"><span></span> 押金： {{item.Deposit}}元</p>
            </div>
            <div class="styleList">
                <ul>
                    <li>
                        <p>长度</p>
                        <p>123厘米</p>
                    </li>
                    <li>
                        <p>长度</p>
                        <p>123厘米</p>
                    </li>
                    <li>
                        <p>长度</p>
                        <p>123厘米</p>
                    </li>
                    <li>
                        <p>长度</p>
                        <p>123厘米</p>
                    </li>
                </ul>
                <div class="style-mesg">
                    <p>
                        睡前时光是阅读的好时候！床头板采用倾斜设计，
                        让你可以舒适的坐在床上看书。这是在入睡前充分
                        放松的好方法，可搭配YRLUSY特里索系列其他的家具
                    </p>
                    <em></em>
                    <em></em>
                    <em></em>
                    <em></em>
                    <em></em>
                    <em></em>
                    <em></em>
                    <em></em>
                </div>
            </div>
        </div>
        <Footer></Footer>
        <Dialog :content="content" :sure="sure"/>
    </div>
</template>
<script>
import {isToken} from "api";
import {mapState} from "vuex";

export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            item:null,
            content:"请登录",
            sure:"请登录"
        }
    },
    computed:{
        ...mapState({
            hotList:state=>state.shopList.hotList
        })
    },
    methods:{
        addShop(item){
            let token=this.$cookie.get("token");
            if(token){
                isToken(`/isToken?token=${token}`).then(res=>{
                    if(res.data.code===0){
                        let hotList=this.hotList;
                        let hasItem=hotList.filter(i=>{
                            return i.ID===item.ID;
                        })
                        if(hasItem.length<1){
                            hotList.push({...item,flag:true,count:1});
                        }
                        this.$store.commit("updataHotList",hotList);
                    }
                })
            }else{
                this.$store.commit("updateDialog", true);
            }
        }
    },
    created(){
        this.item=this.$route.params.item;
    }
}
</script>
<style scoped lang="scss">
    .list {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background: #f8f8f8;

        .count {
            width: 100%;
            flex: 1;
            overflow-y: auto;

            .img{
                width: 100%;
                height: 3.26rem;
                border-bottom: .01rem solid #cccccc;
                border-top: .01rem solid #cccccc;
                margin-top: .1rem;
                background: #ffffff;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .message {
                width: 100%;
                height: 1.43rem;
                border-bottom: .01rem dotted #cccccc;
                background: #ffffff;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .left {
                    padding:0 .2rem;
                    h3 {
                        font-size: .24rem;
                        font-weight: bold;
                        margin-top:.1rem;
                    }

                    p {
                        @include num(90%,auto);
                        line-height: 1.5;
                        @include moretext(2);
                        color: #888;
                        margin-top:.1rem;
                    }
                }
                .right {
                    p{
                        width: 1.6rem;
                        height: .55rem;
                        background: #fc7b04;
                        text-align: center;
                        line-height: .55rem;
                        color: #ffffff;
                        border-radius: .1rem;
                        margin-right: .2rem;
                    }
                }
            }
            
            .list-mesg {
                width: 100%;
                height: .82rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: .01rem solid #ccc;
            }

            .styleList {
                width: 100%;
                padding: .1rem 0;
                background: #ffffff;

                ul {
                    li {
                        width: 95%;
                        height: .5rem;
                        border-bottom: .01rem dotted #cccccc;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin: 0 auto;
                    }
                }

                .style-mesg {
                    width: 95%;
                    height: auto;
                    margin: .2rem auto;
                    border: .01rem solid #fc7b04;
                    position: relative;
                    
                    em {
                        position: absolute;
                    }
                    em:first-of-type{
                        top: -.04rem;
                        left: -.03rem;
                        display: block;
                        width: .43rem;
                        height: .08rem;
                        background: #e68d19
                    }
                    em:nth-of-type(2){
                        top: -.04rem;
                        left: -.03rem;
                        display: block;
                        height: .43rem;
                        width: .08rem;
                        background: #e68d19
                    }
                    em:nth-of-type(3){
                        top: -.04rem;
                        right: -.03rem;
                        display: block;
                        height: .43rem;
                        width: .08rem;
                        background: #e68d19
                    }
                    em:nth-of-type(4){
                        top: -.04rem;
                        right: -.03rem;
                        display: block;
                        width: .43rem;
                        height: .08rem;
                        background: #e68d19
                    }

                    em:nth-of-type(5){
                        bottom: -.04rem;
                        right: -.03rem;
                        display: block;
                        height: .43rem;
                        width: .08rem;
                        background: #e68d19
                    }
                    em:nth-of-type(6){
                        bottom: -.04rem;
                        right: -.03rem;
                        display: block;
                        width: .43rem;
                        height: .08rem;
                        background: #e68d19
                    }
                    em:nth-of-type(7){
                        bottom: -.04rem;
                        left: -.03rem;
                        display: block;
                        width: .43rem;
                        height: .08rem;
                        background: #e68d19
                    }
                    em:nth-of-type(8){
                        bottom: -.04rem;
                        left: -.03rem;
                        display: block;
                        height: .43rem;
                        width: .08rem;
                        background: #e68d19
                    }

                    p {
                        padding: .2rem;
                        line-height: .45rem;
                        font-size: .24rem;
                        font-weight: bolder;
                    }
                }
            }
        }
    }
</style>