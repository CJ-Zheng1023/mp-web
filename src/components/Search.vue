<template>
  <div class="page page-search">
    <search-header :ifSearch=false ></search-header>
    <div class="main">
      <el-card>
        <el-form :model="form" :inline="true" ref="form" label-width="80px">
          <el-form-item label="IPC号">
            <el-input v-model="form.ipc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">检 索</el-button>
          </el-form-item>
        </el-form>
        <div class="tags">
          <el-tag type="success">标签二</el-tag>
          <el-tag type="success">标签二</el-tag>
          <el-tag type="success">标签二</el-tag>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import SearchHeader from './SearchHeader'
export default {
  data () {
    return {
      form: {
        ipc: ''
      }
    }
  },
  components: {
    SearchHeader
  },
  methods: {
    onSubmit () {
      this.$router.push({path: `/search/${this.form.ipc}`})
    }
  }
}
</script>
<style scoped>
  .el-form{
    text-align: center;
    margin-top: 100px;
  }
  .el-input{
    width: 400px;
  }
  .tags{
    text-align: center;
    margin-bottom: 100px;
  }
</style>
