// 編號：CANDY-004
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

function humanReadableTimer(seconds) {
  const hh = String(Math.floor(seconds / 3600)).padStart(2, '0') // 小時：向下取整數
  const mm = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0') // 分鐘：取餘數再除 60s = 取得小時，還剩幾秒可以換分鐘
  const ss = String(seconds % 60).padStart(2, '0') // 秒：取餘數 = 取得小時、分鐘後，還剩幾秒
  // 合併！padStart(補幾位, 補什麼)
  const final = `${hh}:${mm}:${ss}`
  return final
}

console.log(humanReadableTimer(0)) // 印出 00:00:00
console.log(humanReadableTimer(59)) // 印出 00:00:59
console.log(humanReadableTimer(60)) // 印出 00:01:00
console.log(humanReadableTimer(90)) // 印出 00:01:30
console.log(humanReadableTimer(3599)) // 印出 00:59:59
console.log(humanReadableTimer(3600)) // 印出 01:00:00
console.log(humanReadableTimer(45296)) // 印出 12:34:56
console.log(humanReadableTimer(86399)) // 印出 23:59:59
console.log(humanReadableTimer(86400)) // 印出 24:00:00
console.log(humanReadableTimer(359999)) // 印出 99:59:59
