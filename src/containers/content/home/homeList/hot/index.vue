<template>
    <div class="hotList">
        <HotComp v-for="item in dataList" :key="item.ID" :item="item"/>
    </div>
</template>

<script>
import {getHotList} from "api";
import HotComp from "comp/hotComp"; 

export default {
    data(){
        return {
            dataList:[]
        }
    },
    components:{
        HotComp
    },
    mounted(){
        getHotList("/getHotList").then(res=>{
            this.dataList=res.data.data
        })
    }
}
</script>
<style scoped  lang="">

</style>