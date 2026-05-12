// 編號：CANDY-017
// 程式語言：JavaScript
// 題目：計算數字的 2 進位裡有幾個 1
// 範例：5 -> 101 -> 2 個 1

function countBits(num) {
  // 1. 建一個空陣列
  let result = []
  // 2. 數字除 2 (商) 大於 0 就一直執行內部動作
  while (num / 2 > 0) {
    result.unshift(num % 2) // 計算結果塞到陣列前面(先加入還未除2的數字結果)
    num = Math.floor(num / 2) // 不斷除 2 取商
  }
  return result.filter((el) => el == 1).length // 3. 篩選 1, 算有幾個
}
//  Math.floor(11 / 2) = 5 餘 1 ,  11 % 2
//  Math.floor(5 / 2) = 2 餘 1,    (11 / 2) % 2
//  Math.floor(2 / 2) = 1 餘 0 ,   ((11 / 2) / 2) % 2
//  Math.floor(1 / 2) = 0 餘 1,    (((11 / 2) / 2)/ 2) % 2
// => 1101(結果要將餘數倒過來看)

console.log(countBits(1234)) // 5
console.log(countBits(1450)) // 6
console.log(countBits(9527)) // 8
