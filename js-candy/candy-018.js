// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數

function randomNumber(min, max) {
  // Math.random() 會回傳 0 <= num < 1 的數字
  if (max === undefined) {
    max = min
    // 參數只有一個, 回應 0 ~ 引數之間的數字
    return Math.floor(Math.random() * max)
  } else {
    // 參數有兩個, 回應 引數 (min) ~ 引數 (max) 之間的數字
    return Math.floor(Math.random() * (max - min) + min)
  }
}

// 等式相乘
// 0 * (max - min) + min <= num * (max - min) + min < 1 * (max - min) + min
// 帶入 (5,30): 0 * (30 - 5) + 5 <= num * (max - min) + min < 1 * (30 - 5) + 5

console.log(randomNumber(50)) // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)) // 隨機印出 5 ~ 29 之間的任何一個數字
