<template>
    <div>
        <Header>修改手机号</Header>
        <section>
            <div class="con">
                <p><input type="text" placeholder="请输入原手机号" v-model="val1"></p>
                <p><input type="text" placeholder="请输入新手机号" v-model="val2"></p>
                <p><input type="text" placeholder="请再输入一次手机号" v-model="val3"></p>
            </div>
             <div class="btn">
                <button type="button" @click="change">修改</button>
            </div>
            <div class="mark" v-if="flag">
                {{dialog}}
            </div>
        </section>
    </div>
</template>
<script>
import {changePwd} from "api"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            phone:"",
            val1:"",
            val2:"",
            val3:"",
            id:null,
            dialog:"",
            flag:false
        }
    },
    computed:{

    },
    methods:{
        changePhone(id,phone){
            let opt={
                params:{
                    phone:phone,
                    id:id
                }
            }
            changePwd("/changePhone",opt).then(res=>{
                console.log(res)
                if(res.data.code===0){
                     this.dialog="修改成功"
                     this.flag=true;
                     let user=JSON.parse(localStorage.getItem("user"));
                     user.userPhone=phone;
                     localStorage.setItem("user",JSON.stringify(user));
                     setTimeout(() => {
                         this.$router.push("/content/wode")
                     }, 1000);
                }
            })
        },
        change(){
            if( (/^1(3|4|5|7|8)\d{9}$/.test(this.val2))&&
             (/^1(3|4|5|7|8)\d{9}$/.test(this.val3))){
                 if(this.phone==this.val1&&this.val2==this.val3){
                    this.changePhone(this.id,this.val2)
                    }else{
                        this.dialog="修改失败";
                        setTimeout(() => {
                            this.flag=false;
                        }, 1000);
                    }
             }else{
                  this.dialog="手机号输入有误";
                  this.flag=true;
             }
           
            
        }
    },
    created(){

    },
    mounted(){
        let user=JSON.parse(localStorage.getItem("user"));
        this.id=user.userId;
        let opt={
            params:{
                id:this.id
            }
        }
        changePwd("/getUser",opt).then(res=>{
            this.phone=res.data[0].userPhone;            
        })
    }
}
</script>
<style scoped lang="scss">
.mark{
    position: fixed;
    left:50%;
    top:50%;
    width:2.5rem;
    height:.5rem;
    background:rgba(0,0,0,.8);
    color:#fff;
    font-size:.3rem;
    margin-left:-1rem;
    margin-top:-.5rem;
    text-align: center;
    line-height: .5rem;
    border-radius: .05rem;

}
section{
    p{
        width:100%;
        height:.8rem;
        text-align: center;
        line-height: .8rem;
        border-bottom:.01rem solid #ccc;
        input{
            width:90%;
            height:.6rem;
            border:0;
            border-radius: .01rem;
            outline: 0;
        }
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
</style>
