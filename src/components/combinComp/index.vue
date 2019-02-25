<template>
    <dl class="zuxuan_xunhuan">
        <dt class="zuxuanImg">
            <img :src="item.photos" alt="">
        </dt>
        <dd class="zuxuanDec">
            <h6>{{item.productName}}</h6>
            <p>{{item.subTitle}}</p>
            <div class="addShop">
                <b>￥{{item.dayRent}}/天 </b>
                <button @click="addShop(item)">加入购物车</button>
            </div>
        </dd>
    </dl>
</template>

<script>
import {isToken} from "api";
import {mapState} from "vuex";

export default {
    props:{
        item:Object
    },
    data(){
        return {
            
        }
    },
    computed:{
        ...mapState({
            combinList:state=>state.shopList.combinList
        })
    },
    
    methods:{
        addShop(item){
            let token=this.$cookie.get("token");
            if(token){
                isToken(`/isToken?token=${token}`).then(res=>{
                    if(res.data.code===0){
                        let combinList=this.combinList;
                        let hasItem=combinList.filter(i=>{
                            return i.id===item.id;
                        })
                        if(hasItem.length<1){
                            combinList.push({...item,flag:true,count:1});
                        }
                        this.$store.commit("updataCombinList",combinList);
                    }
                })
            }else{
                this.$store.commit("updateDialog", true);
            }
        }
    }
}
</script>
<style scoped  lang="scss">
    .zuxuan_xunhuan{
        @include num(100%,auto);
        @include flex;
        padding:.2rem;
        border-bottom: thin solid #ccc;
    }
    .zuxuanImg{
        @include num(2rem,1.4rem);
        img{
            @include num(100%,100%);
            display: block;
        }
    }
    .zuxuanDec{
        flex:1;
        margin-left:.1rem;
        h6{
            @include num(100%,.4rem);
            line-height: .4rem;
            font-size: .3rem;
            font-weight: bold;
        }
        p{
            line-height: 1.5;
            @include num(100%,auto);
            @include moretext(2);
        }
    }
    .addShop{
        @include num(100%,.75rem);
        @include cen(.75rem);
        @include flex;
        button{
            padding:.1rem .4rem;
            border-radius: .1rem;
            background: #ED6A02;
            color:#fff;
            outline: 0;
            border: 0;
        }
    }
</style>