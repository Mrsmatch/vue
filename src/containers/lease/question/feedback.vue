<template>
    <div class="wrap">
        <Header>信息反馈</Header>
       <section>
            <cube-textarea class="textarea"
        v-model="value"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :readonly="readonly"
        :disabled="disabled"
        :autofocus="autofocus"
        ></cube-textarea>
        <input type="text" placeholder="请输入手机号/邮箱" class="phone">
        <div class="marks"  v-show="flag">
            <i class="icon iconfont icon-dui"></i>
            <p>提交成功</p>
        </div>
        <button @click="submit">提交</button>
       </section>
    </div>
</template>

<script>

export default {
    data(){
        return {
            value: '',
            placeholder: '我们盼着您给我们些建议. . . . .',
            readonly: false,
            maxlength: 100,
            disabled: false,
            autofocus:false,
            flag:false
        }
    },
    methods: {
        submit(){
            this.flag=!this.flag
            setTimeout(() => {
                this.flag=!this.flag
                this.$router.push("/success")
            }, 2000)
        }
    }
}
</script>

<style scoped  lang="scss">
    .wrap{
        background: #f2f2f2;
        section{
            padding: 0 .15rem;
        }
        .textarea{
            margin-top:.2rem; 
            font-size: .14rem;
            height: 3rem;
            outline: none;
            border-bottom:.01rem solid #dbdbdb;
            border-top:.01rem solid #dbdbdb;
        }
        .phone{
            margin-top:.2rem; 
            @include num(100%,.8rem);
            border-bottom:.01rem solid #dbdbdb;
            border-top:.01rem solid #dbdbdb;
            text-indent: .12rem;
            font-size: .14rem;
            outline: none;
            ::-moz-placeholder{
                color: #cccc
            }
        }
        button{
            display: block;
            @include num(70%,.74rem);
            margin:.2rem auto;
            background: #fa9246;
            color:#fff;
            border-radius: 5px;
            font-size: .2rem;
            border:0;
            outline: none;
        }
        .marks{
             @include num(40%,15%);
            position: fixed;
            top:15%;
            left:40%;
            margin-left:-10%; 
            margin-top:7%;
            background: rgba(0,0,0,.4);
            @include flex(center);
            border-radius: 5px;
            p{
                font-size: 12px;
                color: #ffff;
            }
            .icon{
                font-size: 16px;
                color:#fa9246;
            }
        }
    }
    
</style>
