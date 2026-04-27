// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 0, '900', 1, 0, -1, 2, 0, 1, 3, 'a']

function moveZerosToEnd(arr) {
  const zero = arr.filter((z) => z === 0) // 篩 0 陣列
  const noZero = arr.filter((z) => z !== 0) // 非 0 陣列
  const final = zero.concat(noZero) // 設定變數組合陣列
  return final // return 組合陣列
}

let result = moveZerosToEnd(list)
console.log(result) // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]
