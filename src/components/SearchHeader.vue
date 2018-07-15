<template>
  <div class="navbar">
    <div class="logo">
      <h3>标引平台</h3>
    </div>
    <div v-if="ifSearch" class="input-wrapper">
      <slot name="input"></slot>
    </div>
    <div class="dropdown-wrapper">
      <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        用户名<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>排行榜</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchHeader',
  props: [
    'ifSearch'
  ]
}
</script>
<style>
  .navbar{
    height: 54px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 80px;
    overflow: hidden;
  }
  .navbar .logo h3{
    line-height: 54px;
    padding: 0;
    margin: 0;
    color: #007fff;
    font-size: 25px;
    float: left;
  }
  .navbar .input-wrapper{
    margin: 5px 0 0 180px;
    float: left;
  }
  .navbar .dropdown-wrapper{
    margin-top: 15px;
    float: right;
  }
  .el-dropdown-link{
    cursor: pointer;
  }
</style>
