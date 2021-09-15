<template>
  <div class="iconlink">
    <i class="el-icon-edit"></i>
    <el-button type="primary">搜索</el-button>
<!--    icon 会和字体一起变大-->
    <el-button type="primary" class="el-icon-search">搜索</el-button>

    <hr>

    <el-link type="primary">链接</el-link>
    <el-link type="success">链接</el-link>
<!--    icon 样式的优先级更高-->
    <el-link type="danger" class="el-icon-edit">链接</el-link>
    <el-link href="http://www.baidu.com" type="warning" target="_blank" disabled>链接</el-link>
    <el-link type="info" :underline="false">链接</el-link>


  </div>
</template>

<script lang="js">
export default {
  name: "IconLink"
}
</script>

<style scoped lang="scss">
.el-icon-edit{
  font-size: 30px;
  color: #42b983;
}
.el-button{
  font-size: 20px;
  color: #eee;
}
.el-icon-search{
  font-size: 30px;
  color: #eee;
}
.el-link{
  margin-left: 10px;
}
</style>