<template>
  <div class="home">
    <Header>租约进行中</Header>
    <section class="section">
      <ul>
        <li>
          <div class="tip">租赁人信息</div>
        </li>
        <li>
          <ul class="lease-user">
            <li>
              <p>租赁人：</p>
              <span>{{data.userName}}</span>
            </li>
            <li>
              <p>手机号码：</p>
              <span>{{data.userPhone}}</span>
            </li>
            <li>
              <p>身份证号码：</p>
              <span>1234567891233654</span>
            </li>
            <li>
              <p>地址：</p>
              <span>宇宙银河系 1-01-001</span>
            </li>
          </ul>
        </li>
      </ul>
      <div class="hot">
        <div class="hotList" v-for="(item,i) in hotList" :key="i">
           <div class="tip tip2">{{item.Name}}</div>        
          <ul class="lease-icon">
            <li>
              <i class="icon iconfont icon-eyeoclose"></i>
              <p>空调</p>
            </li>
            <li>
              <i class="icon iconfont icon-xiaoxi"></i>
              <p>洗衣机</p>
            </li>
            <li>
              <i class="icon iconfont icon-yonghu"></i>
              <p>热水器</p>
            </li>
            <li>
              <i class="icon iconfont icon-zixun"></i>
              <p>电冰箱</p>
            </li>
            <li>
              <i class="icon iconfont icon-42"></i>
              <p>衣柜</p>
            </li>
            <li>
              <i class="icon iconfont icon-set"></i>
              <p>床</p>
            </li>
          </ul>
          <ul class="lease-user lease-list">
            <li>
              <p>日租金：</p>
              <span>{{item.Rent}}元/天</span>
            </li>
            <li>
              <p>租期：</p>
              <span>{{rentTime}}</span>
            </li>
            <li>
              <p>总租金：</p>
              <span>{{rent}}元</span>
            </li>
            <li>
              <p>押金：</p>
              <span>{{item.Deposit}}元</span>
            </li>
            <li>
              <p>已缴租金：</p>
              <span>{{rent}}元</span>
            </li>
            <li>
              <p>支付周期：</p>
              <span>{{rentComputed}}</span>
            </li>
            <li>
              <p>赠送天数：</p>
              <span>{{giveDay}}</span>
            </li>
            <li>
              <p>起租日期：</p>
              <span>2018年10月20日</span>
            </li>
          
          </ul>
        </div>    
      </div>
       <div class="combine">
         <div class="tip tip2">自由组合</div>      
        <div class="combinList">
         
          <ul class="lease-icon">
            <li v-for="(item,index) in combinList" :key="index">
              <i class="icon iconfont icon-zixun"></i>
              <p v-for="(i,index) in furniture" :key="index"> 
                  <span v-if="item.shortName.includes(i)">
                      {{i}}
                  </span>
                </p>
            </li>
          </ul>
          <ul class="lease-user lease-list">
            <li>
              <p>日租金：</p>
              <span>{{dayMoney}}元/天</span>
            </li>
            <li>
              <p>租期：</p>
              <span>{{rentTime}}</span>
            </li>
            <li>
              <p>总租金：</p>
              <span>{{rent}}元</span>
            </li>
            <li>
              <p>押金：</p>
              <span>{{allDeposit}}元</span>
            </li>
            <li>
              <p>已缴租金：</p>
              <span>{{rent}}元</span>
            </li>
            <li>
              <p>支付周期：</p>
              <span>{{rentComputed}}</span>
            </li>
            <li>
              <p>赠送天数：</p>
              <span>{{giveDay}}</span>
            </li>
            <li>
              <p>起租日期：</p>
              <span>2018年10月20日</span>
            </li>
          </ul>
        </div>    
      </div>
    </section>
     <div class="lease-btn">
            <button class="leaseTime" @click="xuzu">续租期</button>          
             <button class="throwRent" @click="throwRent">退租</button>
              <button class="repair" @click="baoxiu">报修</button>
      </div>    
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState } from 'vuex';
export default {
  data() {
    return {
      data: {
      },
      furniture:["空调","洗衣机","热水器","冰箱","衣柜","床"]
    };
  },
  mounted() {
    this.data = JSON.parse(localStorage.getItem("user"));
    new BScroll(".section", {
      overflowY: true
    });
  },
  methods: {
    xuzu() {
      this.$router.push("/leaserent");
    },
    baoxiu() {
      this.$router.push("/repairs");
    },
    throwRent(){
      this.$router.push("/throwLeaseTwo");
    }
  },
  computed:{
      ...mapState({
            hotList:state=>state.shopList.hotList,
            combinList:state=>state.shopList.combinList,
            rent:state=>state.rent,
            rentTime:state=>state.rentTime,
            rentPay:state=>state.rentPay
        }),
        rentComputed(){
          return this.rentPay.split("/")[0].split("：")[0]
        },
        giveDay(){
          return this.rentPay.split("/")[0].split("：")[1]
        },
        dayMoney(){
            let price=0;
            this.combinList.map(item=>{
              console.log(item)
                if(item.flag){
                    price+=item.dayRent
                }
            })
            this.$store.commit("updateDayRent",price);
            return price.toFixed(2)
        },
        allDeposit(){
            let deposit=0;
            this.combinList.map(item=>{
                if(item.flag){
                    deposit+=item.deposit
                }
            })
            this.$store.commit("updateAllDeposit",deposit);
            return deposit.toFixed(2);
        }
  }
};
</script>
<style scoped  lang="scss">
.home{
  width:100%;
  height:100%;
  flex:1;
  display: flex;
  flex-direction: column;
}
section {
  background: #f2f2f2;
  position: relative;
  flex:1;
  overflow: auto;
  .tip {
    @include num(100%, 0.74rem);
    background: #f2f2f2;
    border-bottom: 0.01rem solid #aaaaaa;
    padding: 0 0.2rem;
    @include flex(flex-start);
    font-size: 0.26rem;
  }
  .tip2 {
    border-top: 0.01rem solid #aaaaaa;
  }
  .lease-user {
    background: #ffffff;
    @include num(100%, auto);
    padding: 0.15rem 0.25rem;
    li {
      @include num(100%, 0.45rem);
      @include flex();
      p {
        font-size: 0.2rem;
        color: #7f7f7f;
      }
      span {
        font-size: 0.2rem;
      }
    }
  }
  .lease-icon {
    background: #fff;
    @include num(100%, auto);
    @include flex(space-around);
    border-bottom: 0.01rem solid #aaaaaa;
    padding: 0.25rem 0;
    li {
      text-align: center;
      .icon {
        margin-top: 0.05rem;
        font-size: 0.4rem;
      }
      p {
        margin-top: 0.05rem;
        font-size: 0.2rem;
      }
    }
  }
  .lease-list {
    margin-top: 0.2rem;
    border-top: 0.01rem solid #aaaaaa;
    border-bottom: 0.01rem solid #aaaaaa;
    li {
      p {
        color: #fa9246;
      }
    }
  }
 
}
 .lease-btn {
    padding: 0.2rem 0;
    @include num(100%, 3rem);
    button {
      font-size: 0.2rem;
      @include num(65%, 0.7rem);
      margin: 0.2rem auto;
      display: block;
      color: #ffff;
      border: 0;
      outline: none;
      border-radius: 5px;
    }
    .leaseTime {
      background: #fa9246;
    }
    .throwRent{
      background: #fa9246;
    }
    .repair {
      background: #86c861;
    }
  }
</style>