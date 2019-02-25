<template>
    <div class="wrap">
        <Header>续租</Header>
        <ul class="lease-user">
            <li>
                <p>套<b>套餐</b>餐：</p>
                <span>11.8元/天</span>
            </li>
             <li>
                <p>起租日期：</p>
                <span>2017年10月11日</span>
            </li> <li>
                <p>租期结束：</p>
                <span>2017年10月11日</span>
            </li> 
        </ul>
        <cube-select class="cube-select" v-model="value" :title="title" :options="options" :placeholder="placeholder" :auto-pop="autoPop" :disabled="disabled"></cube-select>
        <cube-select class="cube-select" v-model="values" :title="titles" :options="option" placeholder="按月支付" :auto-pop="autoPop" :disabled="disabled"></cube-select>
        <button @click="jiaozuji">去缴租金</button>
    </div>
</template>

<script>
import {Style,Button} from "cube-ui"
export default {
    data(){
        return {
            options:["一年","两年","三年","四年"],
            option:["全部支付（一年：赠送使用40天，两年：赠送使用80天","三年：赠送使用120天","四年：使用此产品期限过四年，家具家电免费送）","整年支付（赠送使用40天）","半年支付（赠送使用18天）","季度支付（赠送使用8天）","按月支付"],
            value: "",
            values:"",
            title: '续租期限',
            titles:"选择支付周期",
            placeholder:  '年+月',
            autoPop: false,
            disabled: false,

        }
    },
    methods:{
        jiaozuji(){
            this.$router.push("/paymoney")
        }
    }
}
</script>
<style scoped  lang="scss">
    .wrap{
        background: #f2f2f2;
        .lease-user{
            border-bottom:.01rem solid #dbdbdb;
            border-top:.01rem solid #dbdbdb;
            margin-top:.2rem; 
            background: #ffffff;
            @include num(100%,auto);
            padding:.15rem .25rem;
            li{
                @include num(100%,.45rem);
                @include flex();
                p{
                    font-size: .25rem;
                    color:#7f7f7f;
                    b{
                        opacity: 0;
                    }
                }
                span{
                     font-size: .25rem;
                }
            }
        }
        .cube-select{
            border-bottom:.01rem solid #dbdbdb;
            border-top:.01rem solid #dbdbdb;
            font-size: .14rem;
            margin-top:.2rem;
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