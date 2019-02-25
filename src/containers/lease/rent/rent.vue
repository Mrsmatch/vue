<template>
    <div class="wrap">
        <Header>缴租金管理</Header>
        <div class="tip">缴租信息</div>
        <ul class="rent-time">
            <li>
                <p>套餐：</p>
                <span>11.8/天</span>
            </li>
            <li>
                <p>起租日期：</p>
                <span>2017年10月20日</span>
            </li>
            <li>
                <p>租期结束：</p>
                <span>2017年10月20日</span>
            </li>
            <li>
                <p>租金到期：</p>
                <span>2017年10月20日</span>
            </li>
        </ul>
        <cube-select class="cube-select" v-model="value" :title="title" :options="options" :placeholder="placeholder" :auto-pop="autoPop" :disabled="disabled"></cube-select>
        <div class="rentAll">
            合计：<b>2580</b> 元
        </div>
        <button>缴租金</button>
    </div>
</template>

<script>
import {Style,Button} from "cube-ui"
export default {
    data(){
        return {
            options:["全部","一年","半年","季度"],
            value: 2016,
            title: '支付周期',
            placeholder:  '请选择支付周期(全部/一年/整年/半年/季度)',
            autoPop: false,
            disabled: false
        }
    }
}
</script>
<style scoped  lang="scss">
    .wrap{
        background:#f2f2f2;
        .tip{
            @include num(100%,.74rem);
            background:#f2f2f2;
            border-bottom:.01rem solid #aaaaaa;
            padding:0 .2rem;
            @include flex(flex-start);
            font-size: .26rem;
        }
         .rent-time{
            border-bottom:.01rem solid #aaaaaa;
            background: #ffffff;
            @include num(100%,auto);
            padding:.15rem .25rem;
            li{
                @include num(100%,.45rem);
                @include flex();
                p{
                    font-size: .2rem;
                    color:#7f7f7f;
                }
                span{
                     font-size: .2rem;
                }
            }
        }
        .cube-select{
            border-bottom:.01rem solid #aaaaaa;
            border-top:.01rem solid #aaaaaa;
            font-size: .14rem;
            margin-top:.2rem;
        }
        .rentAll{
            border-bottom:.01rem solid #aaaaaa;
            border-top:.01rem solid #aaaaaa;
            margin-top:.2rem;
            @include num(100%,.74rem);
            background: #fff;
            @include flex(flex-start);
            padding: 0 .2rem;
            font-size: .2rem;
            b{
                 font-size: .25rem;
                 color:#fa9246;
            }
        }
        button{
            @include num(70%,.8rem);
            margin:.2rem auto;
            background: #fa9246;
            color:#fff;
            border:0;
            outline: 0;
            font-size:.25rem; 
            border-radius: 5px;
        }
    }
</style>