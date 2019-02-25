<template>
    <div class="login">
        <div class="form">
            <label>
                <i class="icon iconfont icon-gongzuo" @click="goBack"></i>
                <input type="text" ref="phone" placeholder="请输入手机号">
            </label>
            <label>
                <i class="icon iconfont icon-anquanshezhi"></i>
                <input type="password" ref="pwd" placeholder="请输入6-12位密码">
            </label>
        </div>
        <p><button @click="updatePwd">忘记密码?</button></p>
        <div class="l_login">
            <button @click="login">登录</button>
        </div>
    </div>
</template>

<script>
import {getLogin,forgetPwd} from "api";

export default {
    data(){
        return {

        }
    },
    methods:{
        login(){
            let phone=this.$refs.phone.value.trim();
            let pwd=this.$refs.pwd.value.trim();
            if(!(/^1[34578]\d{9}$/.test(phone))){ 
                alert("手机号码有误，请重新输入");  
                return false; 
            } 
            else if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(pwd))){
                alert("密码输入错误,请重新输入")
            }
            else{
                let obj={phone,pwd};
                getLogin("/getLogin",obj).then(res=>{
                    if(res.data.code===0){
                        this.$cookie.set("token",res.data.data.token);
                        localStorage.setItem("user",JSON.stringify(res.data.data));
                        this.$router.push("/content/home/homeList/hot");
                    }
                })
            }
        },
        updatePwd(){
            let phone=this.$refs.phone.value.trim();
            if(!(/^1[34578]\d{9}$/.test(phone))){ 
                alert("手机号码有误，请重新输入");  
                return false; 
            } else{
                let obj={
                    params:{
                        phone
                    }
                };
                forgetPwd("/forgetPwd",obj).then(res=>{
                    console.log(res.data)
                    if(res.data.data){
                        this.$router.push({name:"forgetPwd",params:{id:res.data.data.userId}})
                    }else{
                        alert("用户不存在")
                        this.$refs.phone.value="";
                    }  
                })
                
            }
            
        },
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped  lang="scss">
    .login{
        @include num(100%,auto);
        margin-top: .25rem;
    }
    .form{
        @include num(100%,auto);
        background: #fff;
    }
    label{
        @include num(100%,1rem);
        @include cen(1rem);
        display: block;
        border-bottom: thin solid #ccc;
        position: relative;
        i.icon{
            position: absolute;
            top:0rem;
            left:.6rem;
            font-size: .4rem;
        }
        input{
            @include num(100%,.88rem);
            text-indent: 1.2rem;
            outline:0;
            border:0;
            font-size: .32rem;
        }
    }
    p{
        @include num(100%,1rem);
        line-height: 1rem;
        text-align: right;
        padding-right: .3rem;
        
        button{
            font-size: .32rem;
            color:rgb(228, 18, 18);
            outline: 0;
            border: 0;
            background: #eee;
        }
    }
    .l_login{
        @include num(100%,1rem);
        @include cen(1rem);
        padding:0 .2rem;
        button{
            @include num(100%,100%);
            background: #ec6709;
            border-radius: .2rem;
            font-size: .35rem;
            color:#fff;
            outline: 0;
            border: 0;
        }
    }
</style>