// 編號：CANDY-013
// 程式語言：JavaScript
// 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
// https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

function isValidVatNumber(vat) {
  const multiplyArr = [1, 2, 1, 2, 1, 2, 4, 1] // 邏輯乘數
  const numArr = vat.split('')
  // 計算乘積之和
  const calc = () => {
    let total = 0
    for (let i = 0; i < numArr.length; i++) {
      const n = numArr[i] * multiplyArr[i] // 取乘積
      total += Math.floor(n / 10) + (n % 10) // 乘積大於 10 要再拆解: 向下取整(不要進位)+餘數
      // 面對陣列倒數第二數字為 7，7 * 4 = 28 => 2 + 8 = 10 可選 + 1 或 0，本函式會統一計為 +1+0
      // 可額外判斷 +0 (也就是總數 - 1 是否可整除 5)
    }
    return total
  }
  if (numArr[numArr.length - 2] === '7') {
    return (calc() - 1) % 5 === 0 || calc() % 5 === 0
  } else {
    return calc() % 5 === 0
  }
}

console.log(isValidVatNumber('10458575')) // true
console.log(isValidVatNumber('88117125')) // true
console.log(isValidVatNumber('53212539')) // true
console.log(isValidVatNumber('88117126')) // false
