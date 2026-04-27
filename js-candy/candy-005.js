// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

function squareDigits(num) {
  let arr = num.toString() // 先把數字轉字串才能分割
  let result = arr.split('').map((el) => el * el)
  // 將每個數字字串平方，這裏會做隱式型別轉換（數字字串轉數字）
  return Number(result.join(''))
  // 拼接陣列（join會變字串），再轉數字回傳
}

console.log(squareDigits(3212)) // 印出 9414
console.log(squareDigits(2112)) // 印出 4114
console.log(squareDigits(387)) // 印出 96449
