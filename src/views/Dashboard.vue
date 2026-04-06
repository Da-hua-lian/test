<template>
  <div class="dashboard">
    <div class="left-panel">
      <div class="card">雷达探测区域</div>
      <div class="card">无人机目标列表</div>
    </div>
    <div class="center-panel">
      <div class="card">雷达扫描图</div>
    </div>
    <div class="right-panel">
      <div class="card">系统状态</div>
      <div class="card">实时告警</div>
      <div class="card">反制记录</div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  gap: 16px;
  padding: 20px;
  height: 100vh;
  background: #0a0f2a;
}
.left-panel, .right-panel {
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.center-panel {
  width: 50%;
}
.card {
  background: rgba(15, 25, 55, 0.7);
  border-radius: 16px;
  border: 1px solid rgba(0, 255, 255, 0.3);
  padding: 16px;
  color: #00ffff;
}
</style>