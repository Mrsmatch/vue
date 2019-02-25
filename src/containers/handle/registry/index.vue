<template>
    <div class="login">
        <div class="form">
            <label>
                <i class="icon iconfont icon-gongzuo"></i>
                <input type="text" ref="name" placeholder="请输入用户名">
            </label>
            <label>
                <i class="icon iconfont icon-anquanshezhi"></i>
                <input type="password" ref="pwd" placeholder="请输入密码">
            </label>
            <label>
                <i class="icon iconfont icon-gongzuo"></i>
                <input type="text" ref="phone" placeholder="请输入手机号">
            </label>
            <label>
                <i class="icon iconfont icon-gongzuo"></i>
                <input type="text" ref="imgUrl" placeholder="请上传头像">
            </label>
        </div>
        <div class="l_res">
            <button @click="registry">注册</button>
        </div>
    </div>
</template>

<script>
import {getRegistry} from "api";

export default {
    data(){
        return {
            
        }
    },
    methods:{
        registry(){
            let name=this.$refs.name.value.trim();
            let imgUrl=this.$refs.imgUrl.value.trim();
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
                let obj={name,pwd,phone,imgUrl};
                getRegistry("/getRegistry",obj).then(res=>{
                    if(res.data.data.code===0){
                        this.$router.push("/handle/login")
                    }else{
                        alert("手机号已经被注册，请登录");
                        this.$router.push("/handle/login")
                    }
                })
            }
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
        font-size: .32rem;
        color:rgb(228, 18, 18);
    }
    .l_res{
        @include num(100%,1rem);
        @include cen(1rem);
        padding:0 .2rem;
        margin-top:1rem;
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