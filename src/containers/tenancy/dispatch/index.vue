<template>
    <div>
        <Header>配送安装中</Header>
        <section>
            <img src="static/img/send-03.png" alt="">
              <div class="btn">
                <button type="button" @click="mine">我的家具家电</button>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        mine(){
            this.$router.push("/lease")
        }   
     },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
img{
    width:100%;
}
.btn {
  width: 100%;
  line-height: 1.5rem;
  text-align: center;
  button {
    width: 80%;
    height: 0.8rem;
    border: 0;
    background: #fa9246;
    color: #fff;
    font-size: 0.35rem;
  }
}

</style>