function generateFakeData() {
     const fakeNumber = (Math.random() * 100).toFixed(2);
      const status = Math.random() > 0.5 ? '在线' : '离线';
      return {
    value: fakeNumber,
    status: status,
    time: new Date().toLocaleTimeString() // 
  };
}
export default generateFakeData;