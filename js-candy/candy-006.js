// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

function findDifferent(numbers) {
  for (let i = 0; i < numbers.length - 2; i++) {
    // 要比較三個值，假設不一樣的是 1, 一樣的是 0
    // 三種情況：...0,0,1、..0,1,0..、1,0,0..

    let a = numbers[i]
    let b = numbers[i + 1]
    let c = numbers[i + 2]
    if (a !== b && a !== c) {
      return a
    } else if (b !== a && b !== c) {
      return b
    } else if (c !== a && c !== b) {
      return c
    }
  }
}
console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])) // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])) // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])) // 印出 8
