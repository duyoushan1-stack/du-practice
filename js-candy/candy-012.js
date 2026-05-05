// 編號：CANDY-012
// 程式語言：JavaScript
// 題目：把數字加總，最終濃縮成個位數
// 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
//      1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1

const numberReducer = (num) => {
  // 建立迴圈不斷進行：拆解成數字字串陣列 -> 一一轉換為數字 -> 加總計算
  // 判斷是否加總值大於 10，是就重複執行直到不大於 10
  while (num >= 10) {
    num = String(num)
      .split('')
      .map((el) => Number(el))
      .reduce((acc, crv) => acc + crv)
  }
  return num
}

console.log(numberReducer(9527)) // 印出 5
console.log(numberReducer(1450)) // 印出 1
console.log(numberReducer(5566108)) // 印出 4
console.log(numberReducer(1234567890)) // 印出 9
