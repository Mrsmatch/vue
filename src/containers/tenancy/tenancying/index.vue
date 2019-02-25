<template>
    <div>
        <Header>租约进行中</Header>
        <section>
            <div class="con">
                <h6>租赁人信息</h6>
                <div>
                    <p><span>租赁人：</span><span>张三</span></p>
                    <p><span>手机号码：</span><span>1123554</span></p>
                    <p><span>身份证号：</span><span>1123554</span></p>
                     <p><span>地址：</span><span>小区9-2-1</span></p>
                </div>
            </div>
             <div class="con">
                <h6>享悦猪八件套</h6>
                <ul>
                    <li>空调</li>
                    <li>洗衣机</li>
                    <li>热水器</li>
                    <li>电冰箱</li>
                    <li>衣柜</li>
                    <li>床</li>
                </ul>
                 <div>
                    <p><span>日租金：</span><span>11.8/天</span></p>
                    <p><span>租期：</span><span>1年</span></p>
                    <p><span>总租金：</span><span>224元</span></p>
                     <p><span>押金：</span><span>255元</span></p>
                    <p><span>已交租金：</span><span>612元</span></p>
                    <p><span>支付周期：</span><span>按季支付</span></p>
                    <p><span>赠送天数：</span><span>10</span></p>
                     <p><span>起租日期：</span><span>2017.1.25</span></p>
                     <p><span>租期结束：</span><span>2017.2.36</span></p>
                    <p><span>租金到期：</span><span>2017.2.36</span></p>
                     <p><span>缴费日期：</span><span>2017.1.25</span></p>
                </div>
            </div>
            <div class="btn">
                <p><button type="button">续租期</button></p>
                <p class="repair"><button type="button">报修</button></p>
            </div>
        </section>
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
    .con{
        h6{
            width:100%;
            height:.5rem;
            font-size:.3rem;
            background:#ccc;
            padding-left:.1rem;
            line-height: .5rem;
        }
        div{
            padding:.1rem;
            border:.01rem solid #ccc;
            p{
                line-height: .4rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
        ul{
            width:100%;
            display: flex;
            justify-content: space-around;
            height:.8rem;
            align-items: center;
            border:.01rem solid #ccc;
            margin-bottom:.1rem;
        }
    }
    .btn{
        p{
            text-align: center;
            margin-top:.2rem;
            button{
                width:80%;
                height:.5rem;
                border:0;
                background:orange;
                color:#fff;
                font-size:.3rem;
            }
        }
        .repair{
            button{
                 background: green;
            }
           
        }
    }
</style>