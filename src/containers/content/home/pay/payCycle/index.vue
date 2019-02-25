<template>
    <div class="payCycle">
        <Header>选择租期支付周期</Header>
        <section>
           <List :data="rentTime" :change="change" :type="type1">请选择租赁时间(一年起)</List>
            <List :data="rentPay" :change="change" :type="type2">请选择支付周期(一年起)</List>
            <p class="totle">
                <span>合计:</span>
                <b>{{allmony}}</b>
                <span>元</span>
            </p>
             <p class="agreen">
               <input type="checkbox" :checked="checked" @click="inp">
               我已经阅读<b @click="read">《家具家电租赁协议》</b>，并且同意。
            </p>
            <div class="btn">
                <button type="button" @click="btn">确定</button>
            </div>
        </section>
    </div>
</template>
<script>
import List from "./list.vue";
import {getPayCycle} from "api";
export default {
    props:{

    },
    components:{
        List
    },
    data(){
        return {
            rentTime:[],
            rentPay:[],
            type1:"rentTime",
            type2:"rentPay",
           allmony:0,
           count:0,
           checked:false,
           price:0
        }
    },
    computed:{
    },
    methods:{
      change(val){
         if(val){
            let money= val*this.price
            this.allmony=money.toFixed(2);
            this.count+=1;
         }else{
            this.count+=1 
         }
       
      },
      btn(){
          if(this.count>=2&&this.allmony&&this.checked){           
            this.$store.commit("updateRent",this.allmony)
            this.$router.push("/paymoney")
          }
      },
      inp(){
          this.checked=!this.checked;
      },
      read(){
          this.$router.push("/protocol")
      }
    },
    created(){

    },
    mounted(){
        let {rentTime,rentPay}=this.$store.state;
        getPayCycle("/getPayData").then(res=>{          
            this.rentPay=res.data.data[0].rentPay;
            this.rentTime=res.data.data[0].rentTime;
        })
        this.price=this.$store.state.allPrice;
        if(rentTime && rentPay){
            this.count=2;
        }
        if(rentPay){            
            this.allmony=this.price*rentPay.split("/")[1].toFixed(2);
        }       
    }
}
</script>
<style scoped lang="scss">
    .payCycle{
        display: flex;
        flex: 1;
        flex-direction: column;
    }
    section{
        flex:1;
        overflow: auto;
      p{
            width:100%;
            height:.9rem;
            border-top:.02rem solid #ccc;
            border-bottom:.02rem solid #ccc;
            color:#999;
            font-size:.12rem;
            margin-top:.14rem;
            line-height: .9rem;
            padding-left:.2rem;
      }
        .totle{
           span{
                font-size:.28rem;
           }
           b{
               font-size:.3rem;
               color:red;
               margin:0 .1rem;
           }
        }
        .agreen{
            color:#000;
            input{
               vertical-align: middle;
            }
            b{
                color:skyblue
            }
        }
        .btn{
            width:100%;          
            line-height: 1.5rem;
            text-align: center;
            button{
                width:80%;
                height:.8rem;
                border:0;
                background:#fa9246;
                color:#fff;
                font-size:.35rem;
            }
        }
    }
</style>