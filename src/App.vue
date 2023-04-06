<template>
  <el-container direction="vertical">
    <Header />
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main><RouterView /></el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/components/Header/header.vue';
</script>
