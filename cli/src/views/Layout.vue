<template>
  <div class="layout">
    <el-row>
      <el-col :span="24">24</el-col>
    </el-row>

    <el-row>
      <el-col :span="18">24</el-col>
    </el-row>

    <el-row>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
    </el-row>

    <el-row :gutter="30">
      <el-col :span="6">
        <div style="background-color: sienna">6</div>
      </el-col>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="4">4</el-col>
      <el-col :span="4">4</el-col>
      <el-col :span="4">4</el-col>
    </el-row>


    <el-row>
      <el-col :span="4" :offset="1">4</el-col>
      <el-col :span="4" :offset="6">4</el-col>
      <el-col :span="4" :offset="4">4</el-col>
    </el-row>

<!--    经过实验发现-->
<!--    负号无效，默认为0，只能往右边偏移-->
<!--    且设置偏移量时，会带动该分栏右边的分栏一起移动-->
<!--    即不改变该分栏右边的偏移情况-->
<!--    另外需要注意和 flex center 共用时可能不是想要的效果-->

    <el-row>
      <el-col :span="4" :offset="-2">4</el-col>
      <el-col :span="4">4</el-col>
      <el-col :span="4">4</el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="4" :offset="4">4</el-col>
      <el-col :span="4">4</el-col>
      <el-col :span="4">4</el-col>
    </el-row>


  </div>
</template>

<script lang="js">
export default {
  name: "Layout"
}
</script>

<style scoped lang="scss">
.el-row{
  background-color: green;
  margin: 20px 0;
}
.el-col{
  background-color: red;
  color: white;
  padding: 10px 0;
  border-right: 1px solid white;
}
</style>