<template>
  <div class="menubar">
    {{title}}
  </div>
</template>
<script>
export default {
  data(){
      return{
          title:'WISMDM主数据管理平台'
      }
  }
}
</script>
<style scoped>
.menubar{
    height: 60px;
    line-height: 60px;
    background-color: #fff;
    color: #555;
    padding: 0 calc(50% - 665px + 30px);
    font-weight: 600;
}
</style>
