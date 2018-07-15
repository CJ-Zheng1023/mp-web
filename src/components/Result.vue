<template>
  <div class="page page-search">
    <search-header :ifSearch=true >
      <div slot="input">
        <el-form :inline=true :model="form">
          <el-form-item>
            <el-input placeholder="请输入IPC号" prefix-icon="el-icon-search" v-model="form.ipc"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">检 索</el-button>
          </el-form-item>
        </el-form>
      </div>
    </search-header>
    <div class="main">
      <el-row :gutter="30">
        <el-col :sm="{span: 8}">
          <div class="ipc-explain">
            <el-card class="box-card">
              <span slot="header" class="card-header-ipc">{{ipcResult.IC}}的中文含义</span>
              <div class="card-body">
                {{ipcResult.UTCN}}
              </div>
            </el-card>
            <el-card class="box-card">
              <span slot="header" class="card-header-ipc">{{ipcResult.IC}}的英文含义</span>
              <div class="card-body">
                {{ipcResult.UTEN}}
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :sm="{span: 16}">
          <div class="patent-list">
            <el-row :gutter="15">
              <el-col v-for="patent in patentList" :key="patent.NRD_AN" :sm="{span: 8}">
                <el-card class="box-card">
                  <div class="card-body">
                    <p class="an">{{patent.NRD_AN}}</p>
                    <el-tooltip placement="bottom-start">
                      <span slot="content">{{patent.TI}}</span>
                      <p class="ti">{{patent.TI}}</p>
                    </el-tooltip>
                  </div>
                </el-card>
              </el-col>
            </el-row>
            <el-row :gutter="15">
              <el-col :sm="{span: 24}">
                <div class="pagination">
                  <el-pagination
                    @current-change="clickPagination"
                    background
                    layout="prev, pager, next"
                    :page-size="pagination.size"
                    :total="pagination.total">
                  </el-pagination>
                </div>
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
import { mapState, mapActions } from 'vuex'
import cache from '../assets/scripts/cache'
export default {
  name: 'Result',
  data () {
    return {
      form: {
        ipc: ''
      }
    }
  },
  computed: {
    ...mapState('searchModule', [
      'ipcResult',
      'patentList',
      'pagination'
    ])
  },
  methods: {
    clickPagination (curPage) {
      this.searchPatentList({
        ipc: this.form.ipc,
        size: this.pagination.size,
        start: (curPage - 1) * this.pagination.size
      })
    },
    onSubmit () {
      let ipc = this.form.ipc
      this.search(ipc).then(() => {
        cache.cacheIpc(ipc)
        this.$router.push({path: `/search/${ipc}`})
      })
    },
    ...mapActions('searchModule', [
      'searchPatentList',
      'search'
    ])
  },
  components: {
    SearchHeader
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.form.ipc = to.params.ipc
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.form.ipc = to.params.ipc
    this.search(this.form.ipc).then(() => {
      cache.cacheIpc(this.form.ipc)
      next()
    })
  }
}
</script>
<style scoped>
  .patent-list, .ipc-explain{
    padding: 15px;
    background-color: rgba(233, 233, 233, .5);
    border-radius: 7px;
  }
  .box-card{
    margin-bottom: 20px;
  }
  .card-body .an, .card-header-ipc{
    color: #0366d6;
    font-size: 16px;
    font-weight: 600;
  }
  .card-body{
    font-size: 14px;
  }
  .card-body .ti{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .pagination{
    text-align: right;
  }
</style>
