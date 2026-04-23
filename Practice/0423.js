// Q1：尋找最小整數
// 給一個整數陣列（Array），請撰寫一個解決方案來找出其中的最小整數。

// 範例：
// 若輸入：[34, 15, 88, 2]，回傳：2

// 若輸入：[34, -345, -1, 100]，回傳：-345

// 備註：可以假設傳入的陣列絕不會是空的。

function findSmallest(arr) {
  arr.sort((a, b) => a - b)
  return arr[0]
}
console.log(findSmallest([34, -345, -1, 100]))

// Q2：計算陣列平均值
// 請撰寫一個函式，用來計算陣列中所有數字的平均值。

// 注意事項：若傳入的是空陣列（Empty array），函式應回傳 0。

function calcAvg(arr) {
  if (arr.length !== 0) {
    const total = arr.reduce((acc, crr) => (acc += crr), 0)
    const avg = total / arr.length
    return avg
  } else {
    const noVal = arr.push(0)
    return arr[0]
  }
}
