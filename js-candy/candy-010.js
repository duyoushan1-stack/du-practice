// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {
  const numArr = String(num).split('')
  let tenArr = []
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] !== '0') {
      const numLast = numArr.length - 1 // 建立變數代表陣列最後數的索引
      const pow = Math.pow(10, numLast - i) // 建立變數計算以 10 為基底的次方
      // 判斷最後一個數不要顯示 '1 x 數'，其餘正常顯示
      const el = i == numLast ? numArr[numLast] : `${pow} x ${numArr[i]}`
      tenArr.push(el)
    }
  }
  return tenArr.join(' + ')
}

// 註：pow 的規律來自觀察 [1,4,8]
// 1: index 0, 10^2,4: index 1, 10^1, 8: index 2, 10^0, 次方所得來自陣列長度 - index - 1, 如：3-0-1=2, 3-1-1=1
