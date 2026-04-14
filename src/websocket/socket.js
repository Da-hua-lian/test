import { ref } from 'vue'
function generateFakeData() {
     const fakeNumber = (Math.random() * 100).toFixed(2);
      const status = Math.random() > 0.5 ? '在线' : '离线';
      return {
    value: fakeNumber,
    status: status,
    time: new Date().toLocaleTimeString() // 
  };
}
// src/websocket/socket.js



let socket = null;
export const wsData = ref(null); 
export function initWebSocket() {
    if (socket) return; // 防止重复连接

    // 1. 建立连接
    socket = new WebSocket('wss://marauding-pull-sublime.ngrok-free.dev/');

    // 2. 连接成功时的回调
    socket.onopen = function() {
        console.log('✅ WebSocket 连接成功，准备接收数据...');
    };

    // ⭐⭐⭐ 3. 核心：接收后端信息的回调 ⭐⭐⭐
    socket.onmessage = function(event) {
        console.log('📥 收到后端原始数据:', event.data);

        // 【极度重要】后端发来的通常是 字符串，前端必须解析成 JSON 对象才能用！
        try {
            const jsonData = JSON.parse(event.data);
            if (jsonData.type === 'bigScreenData') {
            // ⭐ 核心动作：把后端的数据，塞进这个 ref 变量里！
            wsData.value = jsonData.data; 
            }
            // 解析成功后，你可以根据后端规定的类型来分发数据
            if (jsonData.type === 'heartbeat') {
                console.log('收到心跳包，证明连接活着');
            } else if (jsonData.type === 'bigScreenData') {
                console.log('收到大屏业务数据啦：', jsonData.data);
            }
        } catch (error) {
            console.warn('收到的不是JSON格式数据，原始内容是:', event.data);
        }
    };

    // 4. 连接关闭的回调
    socket.onclose = function() {
        console.log('❌ WebSocket 连接已关闭');
    };

    // 5. 报错的回调
    socket.onerror = function(error) {
        console.error('⚠️ WebSocket 发生错误:', error);
    };
}

export default generateFakeData;