<template>
    <div class="combinList">
        <CombinComp v-for="item in dataList" :key="item.id" :item="item"/>
    </div>
</template>

<script>
import {getCombination} from "api";
import CombinComp from "comp/combinComp";

export default {
    data(){
        return {
            dataList:[]
        }
    },
    components:{
        CombinComp
    },
    mounted(){
        getCombination("/getCombination").then(res=>{
            this.dataList=res.data.data
        })
    }
}
</script>
<style scoped  lang="">

</style>