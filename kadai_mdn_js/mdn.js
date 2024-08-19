//日付の表示形式 2023年8月22日
//日付の表示方法 console.logで表示


const today = new Date();
console.log(today.getFullYear() + '年' + (today.getMonth() +1) + '月' + today.getDate() + '日');
