<template>
  <div>
    <Header>协议</Header>
    <section>
      几个节点机房上课上课就是
      几个节点机房上课上课就是
      几个节点机房上课上课就是
      几个节点机房上课上课就是
      几个节点机房上课上课就是
    </section>
    <div class="btn">
      <button type="button" @click="btn">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    btn() {
      this.$router.go("-1");
    }
  }
};
</script>
<style scoped  lang="scss">
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