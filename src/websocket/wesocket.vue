<template>
  <!-- 这里是 HTML 结构区 -->
  <div class="box">
    <h2>这是我的 WebSocket 模拟测试页</h2>
    <p>当前接收到的随机数值是：<span class="num">{{ currentValue.value }}</span></p>
    <p>设备状态：{{ currentValue.status }}</p>
    <p>数据更新时间：{{ currentValue.time }}</p>
  </div>
</template>

<script setup>
// 这里是 JS 逻辑区
import { ref, onMounted, onUnmounted } from 'vue'
// 把你刚才写的那个“造数据机器”搬过来
import generateFakeData from '../utils/socket.js'

// 1. 准备一个“容器”来装数据
// ref() 是 Vue 的魔法，它能让数字变化时，页面自动跟着变
const currentValue = ref({
  value: 0,
  status: '等待中...',
  time: ''
})

// 2. 准备一个变量来存定时器的身份证号
let timerId = null

// 3. 组件挂载成功后（页面打开后），启动定时器
onMounted(() => {
  // setInterval 就是定时器，每 2000 毫秒（2秒）执行一次里面的代码
  timerId = setInterval(() => {
    // 调用你写的函数，拿到新数据
    const newData = generateFakeData()
    // 把新数据塞进容器里，页面会自动更新！
    currentValue.value = newData
  }, 2000)
})

// 4. 组件卸载时（离开这个页面时），必须清除定时器！
// 这是非常非常重要的好习惯，否则你的浏览器会卡死
onUnmounted(() => {
  if (timerId) {
    clearInterval(timerId)
  }
})
</script>

<style scoped>
/* 这里是 CSS 样式区，scoped 表示这些样式只对这个页面生效，不会污染别人 */
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
