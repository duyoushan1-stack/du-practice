// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ['a', 'b', 'c', 'd', 'f', 'g']
const chars2 = ['O', 'Q', 'R', 'S', 'T']

// function charNum(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i].charCodeAt())
//   }
// }
// charNum(chars2)

function missingChar(chars) {
  for (let i = 0; i < chars.length - 1; i++) {
    let currentChar = chars[i].charCodeAt()
    let nextChar = chars[i + 1].charCodeAt()

    if (nextChar - currentChar > 1) {
      let missChar = String.fromCharCode(nextChar - 1)
      return missChar
    }
  }
}

console.log(missingChar(chars1)) // 印出 e
console.log(missingChar(chars2)) // 印出 P
