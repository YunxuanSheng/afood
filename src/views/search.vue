
<template>
  <div class="search">
    <div class="head">
      <form action="/">
        <van-search class="top-search"
          v-model="value"
          show-action
          placeholder="搜索词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>

    <van-row type="flex" justify="space-between" class="tag-header">
      <van-col>历史搜索</van-col>
      <van-col class="right-head"><van-icon name="delete" class="icon"/></van-col>
    </van-row>
    <van-row class="tag-row">
      <van-tag mark color="#F5F5F9" text-color="#686C78" class="tag">大米</van-tag>
      <van-tag mark color="#F5F5F9" text-color="#686C78" class="tag">面粉</van-tag>
      <van-tag mark color="#F5F5F9" text-color="#686C78" class="tag">军供站</van-tag>
      <van-tag mark color="#F5F5F9" text-color="#686C78" class="tag">杭州市第七中学</van-tag>
      <van-tag mark color="#F5F5F9" text-color="#686C78" class="tag">食用油</van-tag>
     </van-row>
    <van-row type="flex" justify="space-between" class="tag-header">
      <van-col>热门搜索</van-col>
      <van-col class="right-head">
        <van-icon name="replay" class="icon"/>
        &nbsp;换一换
      </van-col>
    </van-row>
    <van-row class="tag-row">
      <van-tag mark color="#F5F5F9" text-color="#686C78" class="tag">军供站</van-tag>
      <van-tag mark color="#F5F5F9" text-color="#686C78" class="tag">杭州军供站</van-tag>
     </van-row>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Search',
  data () {
    return {
      value: '',
      active: 'search'
    }
  }
}

</script>
<style lang="scss" scoped src='../assets/scss/search.scss'>
</style>
