// 編號：CANDY-019
// 程式語言：JavaScript
// 題目：檢查是否為某個數字的平方數

function isSquare(num) {
  // 取數字平方根 - Math.sqrt() 只能應用於 >= 0 的數字
  if (num >= 0) {
    const result = Math.sqrt(num)
    return Number.isInteger(result) // 判斷結果是否為整數 => 回應 true / false
  }
  return false
}

console.log(isSquare(0)) // true
console.log(isSquare(4)) // true
console.log(isSquare(5)) // false
console.log(isSquare(100)) // true
console.log(isSquare(-4)) // false
console.log(isSquare(-1)) // false
