<template>
   <swiper class="ms" :options="swiperOption">
        <swiperSlide class="slide" v-for="item in imgList" :key="item.id">
            <img :src="item.image" alt="">
        </swiperSlide>       
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import {getBannList} from "api";
export default {
    components:{
        swiper,
        swiperSlide
    },
    data(){
        return {
            imgList:[],
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    },
    mounted(){
        getBannList("/getBannList").then(res=>{
            this.imgList=res.data.data
        })
    }
}
</script>
<style scoped lang="scss">
    .ms{
        width:100%;
        height:2.24rem;
    }
    .slide{
        width:100%
    }
    img{
        width:100%;
        height:100%;
    }
    .swiper-pagination{
        
    }
    .swiper-pagination .swiper-pagination-bullet{
        width:.15rem!important;
        height:.15rem!important;
    }
    .swiper-pagination-bullet-active{
        background: #fff!important;
    }
</style>
