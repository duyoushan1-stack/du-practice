function highestScoreWord(input) {
  // 1. 先拆句子為 "詞語" 陣列
  const wordArr = input.split(' ')
  // 2. 映射 "詞語" 陣列的值，新建一個計算每一個詞語分數的陣列
  const scoreArr = wordArr.map((el) => {
    const char = el.split('') // 3. 再將每一個詞語拆成 "單字" 陣列
    let sum = 0
    for (let i = 0; i < char.length; i++) {
      // 利用 Unicode - 96 來計算分數, 得到題目要求的分數計算方式
      sum += char[i].charCodeAt() - 96
    }
    return sum
  })
  // 4. 找出分數陣列中 "最大分數" 的索引值位置，提供給詞語陣列
  const resultIndex = scoreArr.indexOf(Math.max(...scoreArr))
  return wordArr[resultIndex]
}

console.log(highestScoreWord('lorem ipsum dolor sit amet')) // 印出 ipsum
console.log(highestScoreWord('heyn i need a rubygem up to build this')) // 印出 rubygem
console.log(highestScoreWord('in time machine there are some bugs')) // 印出 there
