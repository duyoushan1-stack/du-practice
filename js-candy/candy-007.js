// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

function findSomeDifferent(numbers) {
  // 篩選出奇數或偶數陣列，並且用 Math.abs() 將餘數轉正 --> 不然篩不到負數
  const even = numbers.filter((el) => Math.abs(el % 2) == 0)
  const odd = numbers.filter((el) => Math.abs(el % 2) == 1)
  // 只要兩者陣列只有一個元素的時候，就是不合群的數
  return even.length == 1 ? even[0] : odd[0]
}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])) // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])) // 印出 160

// function findSomeDifferent(numbers) {
//   // 1. 抓前三個比較
//   const firstThree = numbers.slice(0, 3)
//   // 2. 定義 majority 判斷多數是偶數 or 奇數
//   // 假設 E = even, O = Odd, 位置有 8 種可能：EEE,OOO,EOO,OOE,OEO,EOE,EEO,OEE
//   const majority =
//     firstThree[0] % 2 == firstThree[1] % 2 ||
//     firstThree[0] % 2 == firstThree[2] % 2
//       ? firstThree[0] % 2 // 符合情況：EEE, OOO, OEO, EOE -> 回傳一定是多數
//       : firstThree[1] % 2 // 符合情況：EOO, OOE, EEO, OEE -> 回傳一定是多數
//   // 3. 找出不同
//   const isDifferent = numbers.find((el) => el % 2 !== majority)
//   return isDifferent
// }
