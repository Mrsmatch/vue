<template>
    <div class="shopCar">
        <Header :option="opt">购物车</Header>
        <section>
            <div class="shopList" v-show="hotList.length" v-for="(item,index) in hotList"  :key="index">
                <h4>
                    <p>
                        <input type="checkbox" :checked="allCheck" @click="(e)=>allChange(e,'hot')" ref="allChecked">
                    </p>
                    <p>
                        <span>{{item.Name}}</span>
                        <b>编辑</b>
                    </p>
                </h4>
                <dl>
                    <h5><input type="checkbox" :checked="item.flag" @click="(e)=>checkOne(e,item)" ></h5>
                    <dt>
                        <img :src="item.PicFile" alt="">
                    </dt>
                    <dd>
                        <div class="left">
                            <h3>{{item.Name}}</h3>
                            <h6>{{item.Description}}</h6>
                            <p>
                                <b>￥{{item.PreRent}}<span> / 天</span></b>
                            </p>
                        </div>
                        <div class="right">
                            <button @click="reduceCount(item)" v-if="item.count">-</button>
                            <span>{{item.count}}</span>
                            <button @click="addCount(item)">+</button>
                        </div>
                    </dd>
                </dl>
            </div>
            <div class="shopList" v-show="combinList.length">
                 <h4>
                    <p>
                        <input type="checkbox" :checked="allChecks" @click="(e)=>allChange(e,'combin')" ref="allChecked">
                    </p>
                    <p>
                        <span>自由组合</span>
                        <b>编辑</b>
                    </p>
                </h4>
                <dl v-for="(item,index) in combinList"  :key="index">
                    <h5><input type="checkbox" :checked="item.flag" @click="(e)=>checkOne(e,item)" ></h5>
                    <dt>
                        <img :src="item.photos" alt="">
                    </dt>
                    <dd>
                        <div class="left">
                            <h3>{{item.productName}}</h3>
                            <h6>{{item.subTitle}}</h6>
                            <p>
                                <b>￥{{item.dayRent}}<span> / 天</span></b>
                            </p>
                        </div>
                        <div class="right">
                            <button @click="reduceCount(item)" v-if="item.count">-</button>
                            <span>{{item.count}}</span>
                            <button @click="addCount(item)">+</button>
                        </div>
                    </dd>
                </dl>
            </div>
        </section>
        <footer>
            <p><span>合计：</span><b>￥{{price}}</b></p>
            <button @click="submit">结算 ({{count}})</button>
        </footer>
    </div>
</template>

<script>
import {mapState} from "vuex";
import {isToken} from "api";

export default {
    data(){
        return {
            type:"",
            opt:{
                router:"/content/home/homeList/hot"
            }
        }
    },
    mounted(){
    },
    computed:{
        ...mapState({
            hotList:state=>state.shopList.hotList,
            combinList:state=>state.shopList.combinList,
            allCheck:state=>state.allCheck,
            allChecks:state=>state.allChecks
        }),
        count(){
            let count=0;
            this.hotList.map(item=>{
                if(item.flag){
                    count+=item.count;
                }
            })
            this.combinList.map(item=>{
                if(item.flag){
                    count+=item.count;
                }
            })
           
            return count;
        },
        price(){
            let price=0;
            this.hotList.map(item=>{
                if(item.flag){
                    price+=item.count*item.PreRent
                }
            })
            this.combinList.map(item=>{
                if(item.flag){
                    price+=item.count*item.dayRent
                }
            })
             this.$store.commit("updateAllPrice",price.toFixed(2))
         
            return price.toFixed(2)
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm=>{
            let token=vm.$cookie.get("token");
            if(token){
                isToken(`/isToken?token=${token}`).then(res=>{
                    if(res.data.code===0){
                        next()
                    }
                })
            }else{
                vm.$router.push("/handle/login")
            }
        }) 
    },
    methods:{
        submit(){
            this.count
            this.$router.push("/content/home/paycycle");
        },
        addCount(item){
            if(item.ID){
                this.hotList.map(i=>{
                    if(i.ID===item.ID){
                        if(!item.flag){
                            item.flag=true;
                        }
                        i.count++;
                    }
                })
                this.$store.commit("updataHotList",this.hotList);
            }else{
                this.combinList.map(i=>{
                    if(i.id===item.id){
                        if(!item.flag){
                            item.flag=true;
                        }
                        i.count++;
                    }
                })
                this.$store.commit("updataCombinList",this.combinList);
            }

            let checkAll=this.hotList.every(i=>{
                return i.flag===true
            })
            let checkAlls=this.combinList.every(i=>{
                return i.flag===true
            })
            this.$store.commit("updateChecked",checkAll);
            this.$store.commit("updateCheckeds",checkAlls);
        },
        reduceCount(item){
            if(item.ID){
                this.hotList.map(i=>{
                    if(i.ID===item.ID){
                        if(i.count==1){
                            item.flag=false;
                        }
                        if(i.count>0){
                            i.count--;
                        }
                    }
                })
                this.$store.commit("updataHotList",this.hotList);
            }else{
                this.combinList.map(i=>{
                    if(i.id===item.id){
                        if(i.count==1){
                            item.flag=false;
                        }
                        if(i.count>0){
                            i.count--;
                        }
                    }
                })
                this.$store.commit("updataCombinList",this.combinList);
            }

            let checkAll=this.hotList.every(i=>{
                return i.flag===true
            })
            let checkAlls=this.combinList.every(i=>{
                return i.flag===true
            })
            this.$store.commit("updateChecked",checkAll);
            this.$store.commit("updateCheckeds",checkAlls);
        },
        allChange(e,val){
            let flag=e.target.checked;
            if(val==="hot"){
                if(flag){
                    this.hotList.map(item=>{
                        item.flag=true;
                    })
                }else{
                    this.hotList.map(item=>{
                        item.flag=false;
                    })
                }
                this.$store.commit("updataHotList",this.hotList);
                this.$store.commit("updateChecked",flag);
            }else{
                if(flag){
                    this.combinList.map(item=>{
                        item.flag=true;
                    })
                }else{
                    this.combinList.map(item=>{
                        item.flag=false;
                    })
                }
                this.$store.commit("updataCombinList",this.combinList);
                this.$store.commit("updateCheckeds",flag);
            }
        },
        checkOne(e,item){
            let flag=e.target.checked;
            if(item.ID){
                this.hotList.map(i=>{
                    if(i.ID===item.ID){
                        i.flag=flag
                    }
                })
                this.$store.commit("updataHotList",this.hotList);
                this.$store.commit("updateChecked",flag);
            }else{
                this.combinList.map(i=>{
                    if(i.id===item.id){
                        i.flag=flag
                    }
                })
                this.$store.commit("updataCombinList",this.combinList);
                this.$store.commit("updateCheckeds",flag);
            }
        }
    }
}
</script>
<style scoped  lang="scss">
    .shopCar{
        @include num(100%,100%);
        display: flex;
        flex-direction: column;
    }
    section{
        flex:1;
        overflow-y: auto;
    }
    .shopList{
        @include num(100%,auto);
        h4{
            @include num(100%,.8rem);
            @include cen(.8rem);
            @include flex;
            padding:0 .2rem;
            background: #eee;
            border-bottom:thin solid #ccc;
            p{
                span{
                    font-size: .3rem;
                }
                b{
                    font-size: .3rem;
                }
                &:first-child{
                    width:5%;
                    input{
                        vertical-align: middle;
                    }
                }
                &:last-child{
                     width:95%;
                     @include flex;
                     padding-left: .25rem;
                }
            }
        }
        dl{
            width:100%;
            height:auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin:.1rem 0;
            padding:.2rem;
            border-bottom: thin solid #ccc;
            h5{
                padding-right:.25rem;
            }
            dt{
                flex:1;
                img{
                    width:90%;
                    height:auto;
                    margin:0 auto;
                    display: block;
                }
            }
            dd{
                flex:3;
                padding-left: .1rem;
                @include flex;
                .left{
                    width:72%;
                    h3{
                        font-size: .14rem;
                    }
                    h6{
                        @include num(90%,auto);
                        line-height: 1.8;
                        @include moretext(2);
                        font-weight: normal;
                        margin:.05rem 0;
                    }
                    p{
                        line-height: 2;
                        display: flex;
                        justify-content: space-between;
                        b{
                            font-size: .3rem;
                            color:red;
                        }
                        span{
                            font-size: .2rem;
                        }
                    }
                }
                
                .right{
                    width:28%;
                    button,span{
                        font-size: .14rem;
                    }
                    span{
                        margin:0 .05rem;
                    }
                    button{
                        outline: 0;
                        background: #fff;
                        border:thin solid #ccc;
                        padding:.02rem .05rem;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    
    footer{
        @include num(100%,1rem);
        @include cen(1rem);
        @include flex;
        border-top: thin solid #ccc;
        padding:0 .2rem;
        p{
            @include flex(flex-start);
            span{
                font-size: .3rem;
            }
            b{
                font-size: .32rem;
                color:rgb(235, 15, 15);
            }
        }
        button{
            @include num(1.6rem,.6rem);
            background: #ff8309;
            border-radius: .2rem;
            outline: 0;
            font-size: .3rem;
            color:#fff;
            border:0;
        }
    }
</style>