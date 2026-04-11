<template>
  <!-- 把你的测试页面引进来当标签用 -->
  <SocketTest />
</template>

<script setup>
// 引入你的测试页面组件 (注意：@ 符号在 Vite 里代表 src 目录)
import SocketTest from '@/components/SocketTest.vue'
</script>

<style>
/* 全局清空一下边距，好看点 */
body {
  margin: 0;
  padding: 20px;
}
</style>