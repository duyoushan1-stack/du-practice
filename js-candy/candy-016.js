// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

function toCamelCase(str) {
  // 1. 先拆為字串陣列(依據"_"來拆)
  const splitStr = str.split('_')
  // 2. 判斷要首字母大寫情況：陣列長度是否大於等於 2 和 非陣列的第一個索引值
  return (
    splitStr
      .map((el, index, arr) => {
        if (el.length >= 2 && el !== arr[0]) {
          // 3. 陣列元素(字串)的第一個索引值要大寫，再加上從第二索引截取到最後的字元
          return el[0].toUpperCase() + el.substring(1, el.length)
        } else {
          // 陣列只有一個值就回傳吧，不用首字大寫
          return el
        }
      })
      // 4. 再將所有陣列內字串組合起來
      .join('')
  )
}

console.log(toCamelCase('book')) // book
console.log(toCamelCase('book_store')) // bookStore
console.log(toCamelCase('get_good_score')) // getGoodScore
