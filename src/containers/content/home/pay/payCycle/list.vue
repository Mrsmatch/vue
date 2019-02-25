<template>
  <div>
    <p>
      <slot v-if="!con"></slot>
      <span v-else>{{con}}</span>
      <em @click="show"></em>
    </p>
    <div class="tit" v-if="tit">{{data.tit}}</div>
    <ul v-show="flag">
      <li v-for="(item,i) in data.list" :key="i" @click="eventClick(item)">{{item.con}}</li>
    </ul>
  </div>
</template>

<script>

export default {
    props:["data","change","type"],
  data() {
    return {
      flag: false,
      tit:true,
      con:"",
      newData:[],
     
      
    };
  },
  mounted(){
    if(this.type=="rentTime"){
        this.con=this.$store.state.rentTime;
      }else if(this.type=="rentPay"){
        this.con=this.$store.state.rentPay  
          
     } 
     if(this.con){
       this.tit=false;
     } 
  },
  methods: {
    show() {
      this.flag = !this.flag;
    },
    eventClick(item){
        this.con=item.con;
        this.flag=!this.flag;
        if(this.con){
          this.tit=false;
        }else{
           this.tit=!this.tit
        }
        if(item.con.length>2){
           this.change(item.day) 
        }else{
           this.change() 
        }
        if(this.type=="rentTime"){
          this.$store.commit("updateRentTime",item.con)       
        }else if(this.type=="rentPay"){
          let rentpay=item.con+"/"+item.day;
          this.$store.commit("updateRentPay", rentpay)        
        }      
    }
    
  },
};
</script>
<style scoped  lang="scss">
p {
  width: 100%;
  height: 0.9rem;
  border-top: 0.02rem solid #ccc;
  border-bottom: 0.02rem solid #ccc;
  color: #999;
  font-size: 0.12rem;
  margin-top: 0.14rem;
  line-height: 0.9rem;
  padding-left: 0.2rem;
  position: relative;
  em {
    width: 0.1rem;
    height: 0.1rem;
    border: 0.1rem solid transparent;
    border-top-color: #999;
    position: absolute;
    right: 0.1rem;
    top: 0.4rem;
  }
}
ul {
  background: #ccc;
  li {
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.25rem;
    padding-left: 0.2rem;
  }
}
.tit{
  color:#fa9246;
  font-size:.12rem;
  text-align: right;
  line-height: .3rem;
}
</style>