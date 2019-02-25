<template>
    <div class="wrap">
        <Header>续租记录</Header>
        <ul class="rentHistory-list">
            <li>
                <p>套<b>套餐</b>餐：</p>
                <span>11.8/天</span>
            </li>
            <li>
                <p>租<b>套餐</b>期：</p>
                <span>1年</span>
            </li>
            <li>
                <p>支付租金：</p>
                <span>587元</span>
            </li>
            <li>
                <p>租<b>套餐</b>金：</p>
                <span>按季支付</span>
            </li>
            <li>
                <p>赠送天数：</p>
                <span>十天</span>
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
                <p>租金日期：</p>
                <span>2017年10月20日</span>
            </li>
            <li>
                <p>缴租日期：</p>
                <span>2017年10月20日</span>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return {

        }
    }
}
</script>
<style scoped  lang="scss">
    .wrap{
        background:#f2f2f2;
        .rentHistory-list{
            margin-top:.1rem;
            background: #ffffff;
            @include num(100%,auto);
            li{
                font-size: .23rem;
                border-bottom:.01rem solid #dbdbdb;
                @include num(100%,.78rem);
                @include flex();
                p{
                    margin-left:.25rem;
                    font-size: .2rem;
                    color:#7f7f7f;
                    b{
                        opacity: 0;
                    }
                }
                span{
                     margin-right:.25rem;
                     font-size: .2rem;
                }
            }
        }
    }
</style>