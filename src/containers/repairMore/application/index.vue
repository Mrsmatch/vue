<template>
  <div>
    <Header>申请成功</Header>
    <div class="img">
      <img src="static/img/success_03.png" alt>
    </div>
	<p>工作人员会在48小时之内联系您</p>
	<p>请保持您的手机畅通</p>
  </div>
</template>
<script>
import Header from "comp/header/index";

export default {
	props: {},

	components: {
		Header
	},

	data() {
		return {};
	},

	computed: {},

	methods: {},

	created() {},

	mounted() {
		let that=this;
		setTimeout(()=>{
			that.$router.push("/repairList")
		},1000)
	}
};
</script>
<style scoped lang="scss">
	.img{
		width: 1.54rem;
		height: 2.08rem;
		margin: .74rem auto;
		
		img{
			width: 100%;
		}
	}
	p{
		text-align: center;
		font-size: .24rem
	}
</style>