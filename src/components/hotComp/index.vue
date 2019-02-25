<template>
    <div class="taocan_xunhuna">
        <div class="hotImg" @click="detail">
            <img :src="item.PicFile" alt="">
        </div>
        <div class="hotDec">
            <h6>{{item.Name}}</h6>
            <p>{{item.Description}}</p>
            <div class="addShop">
                <h5>￥{{item.PreRent}}/天 <span>{{item.Rent}}/天</span> </h5>
                <button @click="addShop(item)">加入购物车</button>
            </div>
        </div>
    </div>
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
            hotList:state=>state.shopList.hotList
        })
    },
    methods:{
        detail(){
            this.$router.push({
                name:"shoplist",
                params:{
                    item:this.item
                }
            })
        },
        addShop(item){
            let token=this.$cookie.get("token");
            if(token){
                isToken(`/isToken?token=${token}`).then(res=>{
                    if(res.data.code===0){
                        let hotList=this.hotList;
                        let hasItem=hotList.filter(i=>{
                            return i.ID===item.ID;
                        })
                        if(hasItem.length<1){
                            hotList.push({...item,flag:true,count:1});
                        }
                        this.$store.commit("updataHotList",hotList);
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
    .taocan_xunhuna{
        @include num(100%,auto);
        padding:.35rem .25rem;
        border-bottom: thin solid #ccc;
    }
    .hotImg{
        @include num(100%,auto);
        img{
            @include num(100%,auto);
            display: block;
        }
    }
    .hotDec{
        @include num(100%,auto);
        margin-top:.1rem;
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