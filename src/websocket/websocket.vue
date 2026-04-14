<template>
  <!-- 这里是 HTML 结构区 -->
  <div class="box">
    <h2>这是我的 WebSocket 模拟测试页</h2>
    <p>当前接收到的随机数值是：<span class="num">{{ currentValue.value }}</span></p>
    <p>设备状态：{{ currentValue.status }}</p>
    <p>数据更新时间：{{ currentValue.time }}</p>
    <p>接收用户数：{{ wsData?.userCount }}</p>
    <p>cpu使用率：{{wsData?.cpuUsage}}</p>
    <p>当前时间:{{ wsData?.time }}</p>
    <button @click="updata">更新</button>
  </div>
</template>

<script setup>
// 这里是 JS 逻辑区
import { ref, onMounted, onUnmounted } from 'vue'
import generateFakeData from "@/websocket/socket.js"
import { initWebSocket, wsData } from './socket.js';
onMounted(() => {
  console.log('大屏组件加载完毕，准备连接 WebSocket...');
  initWebSocket();
});
const currentValue = ref({
  value: 0,
  status: '等待中...',
  time: ''
})
let timerId = null
function updata(){
  const data=generateFakeData()
  currentValue.value=generateFakeData()
}
// 3. 组件挂载成功后（页面打开后），启动定时器
onMounted(() => {
  timerId = setInterval(() => {
    const newData = generateFakeData()
    currentValue.value = newData
  }, 2000)
})


onUnmounted(() => {
  if (timerId) {
    clearInterval(timerId)
  }
})
</script>

<style scoped>
.box {
  border: 2px dashed #409eff;
  padding: 20px;
  border-radius: 8px;
  background-color: #f0f9ff;
}
.num {
  color: red;
  font-size: 24px;
  font-weight: bold;
}
</style>
