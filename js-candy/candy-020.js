// 編號：CANDY-020
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

function xxoo(str) {
  // 字串統一轉為小寫並切為陣列，再篩出兩組陣列比較數量是否一致
  const arr = str.toLowerCase().split('')
  console.log(arr)

  const Oarr = arr.filter((el) => el == 'o').length
  const Xarr = arr.filter((el) => el == 'x').length
  return Oarr === Xarr
}

console.log(xxoo('ooxx')) // true
console.log(xxoo('xxoo')) // true
console.log(xxoo('xxooo')) // false
console.log(xxoo('xoox')) // true
console.log(xxoo('ooAA')) // false
console.log(xxoo('xoXoA')) // true
