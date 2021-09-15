<template>
  <div class="button">
    <el-row>
<!--      el-col 默认宽度是一整行-->
      <el-col :span="8">
        <el-button type="primary">按钮</el-button>
        <el-button type="danger">按钮</el-button>
      </el-col>
      <el-col :span="8">
        <el-button type="warning">按钮</el-button>
      </el-col>
      <el-col :span="8">
        <el-button type="success">按钮</el-button>
        <el-button type="info">按钮</el-button>
      </el-col>
    </el-row>

    <hr>

    <el-row>
      <el-button type="primary" plain>按钮</el-button>
      <el-button type="danger" plain>按钮</el-button>
      <el-button type="warning" circle disabled>按钮</el-button>
      <el-button type="success" circle class="el-icon-user"></el-button>
      <el-button type="info">按钮</el-button>
      <el-button type="text">按钮</el-button>
    </el-row>

    <hr>

    <el-row>
      <el-button-group>
        <el-button type="primary">上一页</el-button>
        <el-button type="primary">下一页</el-button>
      </el-button-group>
    </el-row>

    <hr>

    <el-row>
      <el-button type="primary" :loading="true">加载中</el-button>
    </el-row>

    <hr>

    <el-row>
      <el-button type="primary">加载中</el-button>
      <el-button type="primary" size="medium">加载中</el-button>
      <el-button type="primary" size="small">加载中</el-button>
      <el-button type="primary" size="mini">加载中</el-button>
    </el-row>

  </div>
</template>

<script lang="js">
export default {
  name: "Button"
}
</script>

<style scoped lang="scss">

</style>