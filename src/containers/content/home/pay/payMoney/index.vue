<template>
    <div>
        <Header>支付</Header>
        <section>
            <div class="money">
                <span>支付金额</span>
                <b>￥{{all}}</b>
            </div>
            <div class="detail">
                <span>支付详情</span>
                <div>
                    <p>押金：<b>￥{{deposit}}</b></p>
                    <p>租金：<b>￥{{rent}}</b></p>
                    <p>(租期结束押金退还)</p>
                </div>
            </div>
            <div class="applation">
                <p>支付方式</p>
                <div>
                    <p>微信<span><input type="radio" name="apply" @click="inp"></span></p>
                    <p>支付宝<span><input type="radio" name="apply" @click="inp"></span></p>
                    <p>一网通(支持所有信用卡)<span><input type="radio"  @click="inp" name="apply"></span></p>
                </div>
            </div>
            <div class="btn">
                <button type="button" @click="pay">支付</button>
            </div>
            <div class="mark" v-if="flag">
                <p>√</p>
                支付成功
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
            flag:false,
            input:false,
            rent:0,
            deposit:0,
            all:0
        }
    },
    computed:{

    },
    methods:{
        pay(){
            if(this.input){
                this.flag=!this.flag
                setTimeout(()=>{
                    this.$router.push("/dispatch")
                },1000)
            }
        },
        inp(){
            this.input=true
        }
    },
    created(){

    },
    mounted(){
        this.rent=this.$store.state.rent;
        this.deposit=this.rent*0.5.toFixed(2);
        this.all=(this.rent*1+this.deposit).toFixed(2);        
    }
}
</script>
<style scoped lang="scss">
.money,.detail{
    padding:.2rem .1rem;
    display: flex;
    justify-content:space-between;
    border-top:.01rem solid #ccc;
    border-bottom:.01rem solid #ccc;
    margin-top:.2rem;
    span{
        font-size:.25rem;
    }
}
.applation{
    &>p{
        padding:.2rem .1rem;
        line-height: .5rem;
        font-size:.25rem;
        border-bottom:.01rem solid #ccc;
    }
    div{
        p{
            padding:.2rem .1rem;
            line-height: .3rem;
            font-size:.25rem;
            display: flex;
            justify-content: space-between;
        }
    }
}
.mark{
    position: fixed;
    left:50%;
    top:50%;
    width:1.5rem;
    height:1.5rem;
    background:rgba(0,0,0,.8);
    color:#fff;
    font-size:.3rem;
    margin-left:-.5rem;
    margin-top:-.5rem;
    text-align: center;
    p{
        color:#fff;
        font-size:.35rem;
        line-height: .8rem;
        text-align: center;
    }

}
.btn {
  width: 100%;
  line-height: 1.5rem;
  text-align: center;
  button {
    width: 80%;
    height: 0.8rem;
    border: 0;
    background: #fa9246;
    color: #fff;
    font-size: 0.35rem;
  }
}
</style>