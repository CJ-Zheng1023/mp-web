<template>
  <div class="page page-search">
    <search-header :ipc="ipc" :ifSearch=true ></search-header>
    <div class="main">
      <el-row :gutter="30">
        <el-col :sm="{span: 8}">
          <div class="ipc-explain">
            <el-card class="box-card">
              <span slot="header">{{ipcResult.IC}}的中文含义</span>
              {{ipcResult.UTCN}}
            </el-card>
            <el-card class="box-card">
              <span slot="header">{{ipcResult.IC}}的英文含义</span>
              {{ipcResult.UTEN}}
            </el-card>
          </div>
        </el-col>
        <el-col :sm="{span: 16}">
          <div class="patent-list">
            <el-row :gutter="15">
              <el-col :sm="{span: 8}">
                <el-card class="box-card">
                  123
                </el-card>
              </el-col>
              <el-col :sm="{span: 8}">
                <el-card class="box-card">
                  123
                </el-card>
              </el-col>
              <el-col :sm="{span: 8}">
                <el-card class="box-card">
                  123
                </el-card>
              </el-col>
              <el-col :sm="{span: 8}">
                <el-card class="box-card">
                  123
                </el-card>
              </el-col>
              <el-col :sm="{span: 8}">
                <el-card class="box-card">
                  123
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import SearchHeader from './SearchHeader'
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      ipc: ''
    }
  },
  computed: {
    ...mapState('searchModule', [
      'ipcResult'
    ])
  },
  methods: {
    ...mapActions('searchModule', [
      'searchIpc'
    ])
  },
  components: {
    SearchHeader
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.searchIpc(to.params.ipc)
      vm.ipc = to.params.ipc
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.searchIpc(to.params.ipc)
    this.ipc = to.params.ipc
    next()
  }
}
</script>
<style scoped>
  .box-card{
    margin-bottom: 20px;
  }
</style>
