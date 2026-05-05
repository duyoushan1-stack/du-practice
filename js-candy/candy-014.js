// 編號：CANDY-014
// 程式語言：JavaScript
// 題目：把鄰近的重複值去除，但仍照原本的順序排序
// 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

function uniqueOrder(sequence) {
  // 把字串(陣列不影響)使用 Array.from() 方法新建陣列 -> fliter 篩選出當前值與下一個值不同(也就是鄰近值刪除)的數組
  return Array.from(sequence).filter((el, index, arr) => el !== arr[index + 1])
}

console.log(uniqueOrder('AABCC')) // [ 'A', 'B', 'C']
console.log(uniqueOrder('AAABBBCCBCC')) // [ 'A', 'B', 'C', 'B', 'C']
console.log(uniqueOrder([1, 2, 1, 2, 1])) // [ 1, 2, 1, 2, 1 ]
console.log(uniqueOrder([1, 1, 1, 2, 2, 2, 1])) // [1, 2, 1]

// 筆記：
// filter(當前元素, 當前元素索引值, 當前陣列)
// Array.from() 可以根據以下內容新建立陣列：
// 【可迭代物件】可被 for..of 迭代值出來    ex: String, Set, Map, Array
// 【類陣列】有 length 屬性 + 數字索引      ex: { 0: 'a', length: 1 }, 函數內部的 arguments
