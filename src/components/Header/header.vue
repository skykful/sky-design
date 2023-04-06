<template>
  <el-header>
    <div class="logo">
      <img src="@/assets/logo.svg" alt="sky design" />
      <h2>Sky Design</h2>
    </div>
    <div class="operate">
      <el-input placeholder="请输入搜索内容">
        <template #suffix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
      </el-input>
      <span>
        <el-button link
          ><el-icon><Bell /></el-icon
        ></el-button>
        <el-button link
          ><el-icon><FullScreen /></el-icon
        ></el-button>
        <el-switch v-model="value2" inline-prompt :active-icon="Check" :inactive-icon="Close" />
      </span>
    </div>
  </el-header>
</template>

<script lang="ts" setup name="header">
import { Check, Close } from '@element-plus/icons-vue';
let value2 = ref<boolean>(false);
</script>

<style lang="less">
.el-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  .logo {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    img {
      height: 55px;
      margin-right: 30px;
    }
  }
  .operate {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
  }
}
</style>
