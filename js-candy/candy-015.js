// 編號：CANDY-015
// 程式語言：JavaScript
// 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// 範例：
//      "abcdef" -> ['ab', 'cd', 'ef']
//      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

function splitString(str) {
  let charArr = []
  for (let i = 0; i < str.length; i++) {
    // 用 substring(起始索引, 結束索引(會返回上一個)) 拆字串
    let el = str.substring(i * 2, i * 2 + 2)
    // 觀察拆到的字串索引是：0,2、2,4、4,6... 剛好是 2 倍數, 2 倍數 + 2
    if (el !== '' && el.length == 2) {
      // 正常兩字元塞進新陣列
      charArr.push(el)
    } else if (el.length == 1) {
      // 不足兩字元加底線
      charArr.push(el + '_')
    }
  }
  return charArr
}

console.log(splitString('abcdef')) // ["ab", "cd", "ef"]
console.log(splitString('abcdefg')) // ["ab", "cd", "ef", "g_"]
console.log(splitString('')) // []
