<template>
    <div class="list">
         <Header>套餐详情</Header>
        <div class="count">
            <dl>
                <dt>
                    图片
                </dt>
                <dd>
                    床
                </dd>     
            </dl>
            <dl>
                <dt>
                    图片
                </dt>
                <dd>
                    床
                </dd>     
            </dl>
            <dl>
                <dt>
                    图片
                </dt>
                <dd>
                    床
                </dd>     
            </dl>
            <dl>
                <dt>
                    图片
                </dt>
                <dd>
                    床
                </dd>     
            </dl>
            <dl>
                <dt>
                    图片
                </dt>
                <dd>
                    床
                </dd>     
            </dl>
            <dl>
                <dt>
                    图片
                </dt>
                <dd>
                    床
                </dd>     
            </dl>
            <dl>
                <dt>
                    图片
                </dt>
                <dd>
                    床
                </dd>     
            </dl>
            <dl>
                <dt>
                    图片
                </dt>
                <dd>
                    床
                </dd>     
            </dl>
            <dl>
                <dt>
                    图片
                </dt>
                <dd>
                    床
                </dd>     
            </dl>
            <dl>
                <dt>
                    图片
                </dt>
                <dd>
                    床
                </dd>     
            </dl>
            <dl>
                <dt>
                    图片
                </dt>
                <dd>
                    床
                </dd>     
            </dl>
            <dl>
                <dt>
                    图片
                </dt>
                <dd>
                    床
                </dd>     
            </dl>
        </div>
        <Footer></Footer>
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

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .list {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background: #f0eff4;

        .count {
            width: 100%;
            flex: 1;
            overflow-y: auto;
            display: flex;
            flex-wrap: wrap;

            dl {
                width: 2.71rem;
                height: 2.10rem;
                margin-top: .3rem;

                dt {
                    width: 100%;
                    height: 1.66rem;
                    background: #fff;
                }
                dd{
                    text-align: center;
                    line-height: .6rem
                }
            }

           
            dl:nth-of-type(odd) {
                margin-left: .3rem;
            }
             dl:nth-of-type(even) {
                margin-left: .3rem;
            }
        }
    }
</style>