<template>
  <div class="wrap">
    <Header>报修</Header>
    <cube-select
      class="cube-select"
      v-model="value"
      :title="title"
      :options="options"
      :placeholder="placeholder"
      :auto-pop="autoPop"
      :disabled="disabled"
    ></cube-select>
    <div class="tip">请上传图片</div>
    <div class="uploadImg">
      <p>物品大图</p>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="80%" :src="dialogImageUrl" alt>
      </el-dialog>
    </div>
    <div class="uploadImg">
      <p>细节损坏处</p>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="80%" :src="dialogImageUrl" alt>
      </el-dialog>
    </div>
    <cube-textarea
      class="textarea"
      v-model="values"
      placeholder="我们盼着您给我们些建议. . . . ."
      :disabled="disabled"
    ></cube-textarea>
    <input type="text" placeholder="联系人" class="phone" v-model="nameValue">
    <input type="text" placeholder="请输入手机号" class="phone" v-model="phoneValue">
    <button @click="btn">提交</button>
    <Dialog :content="content" :sure="sure"/>
  </div>
</template>

<script>
import { Style, Button } from "cube-ui";
export default {
  data() {
    return {
      options: ["空调", "冰箱", "洗衣机", "暖气"],
      value: "",
      values: "",
      nameValue: "",
      phoneValue: "",
      title: "报修物品",
      placeholder: "选择需要报修的物品",
      autoPop: false,
      disabled: false,
      dialogImageUrl: "",
      dialogVisible: false,
      content:"确定保修吗?",
      sure:"确定",
      arr: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    btn(){
      this.$store.commit("updateDialog", true);
      this.arr.push({name:this.value},{mesg:this.values},{user:this.nameValue},{phone:this.phoneValue})
      console.log(this.arr)
      this.$store.commit("updateRepair",this.arr)
    }
  }
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.el-upload {
  width: 50px;
  height: 50px;
  line-height: 60px;
}
.el-upload-list--picture-card .el-upload-list__item {
  width: 50px !important;
  height: 50px !important;
}
.el-upload-list__item-thumbnail {
  width: 50px !important;
  height: 50px !important;
}
.el-upload-list__item .el-icon-close-tip {
  width: 60px !important;
  height: 60px !important;
}
</style>
<style scoped  lang="scss">
.wrap {
  background: #f2f2f2;
  .cube-select {
    border-bottom: 0.01rem solid #dbdbdb;
    border-top: 0.01rem solid #dbdbdb;
    font-size: 0.14rem;
    margin-top: 0.2rem;
  }
  .tip {
    @include num(100%, 0.8rem);
    background: #f2f2f2;
    border-bottom: 0.01rem solid #dbdbdb;
    padding: 0 0.2rem;
    @include flex(flex-start);
    font-size: 0.26rem;
  }
  .cube-upload-def clear-fix {
    background: red;
    @include num(80%, auto);
    border: 2px solid red;
  }
  .uploadImg {
    padding: .15rem 0;
    p {
      font-size: 12px;
    }
    margin-bottom: 0.2rem;
    border-bottom: 0.01rem solid #dbdbdb;
    border-top: 0.01rem solid #dbdbdb;
    @include num(100%, auto);
    @include flex(space-around);
    background: #fff;
  }
  .textarea {
    margin-top: 0.2rem;
    font-size: 0.14rem;
    height: 2.5rem;
    outline: none;
    border-bottom: 0.01rem solid #dbdbdb;
    border-top: 0.01rem solid #dbdbdb;
  }
  .phone {
    margin-top: 0.2rem;
    @include num(100%, 0.8rem);
    border-bottom: 0.01rem solid #dbdbdb;
    border-top: 0.01rem solid #dbdbdb;
    text-indent: 0.12rem;
    font-size: 0.14rem;
    outline: none;
    ::-moz-placeholder {
      color: #cccc;
    }
  }
  button {
    @include num(70%, 0.8rem);
    margin: 0.2rem auto;
    background: #fa9246;
    color: #fff;
    border-radius: 5px;
    font-size: 0.2rem;
    border: 0;
    outline: none;
  }
}
</style>