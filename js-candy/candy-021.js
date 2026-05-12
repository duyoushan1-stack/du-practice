// 編號：CANDY-021
// 程式語言：JavaScript
// 題目：實作 Stack 資料結構

class Stack {
  constructor() {
    this.arr = [] // 建立空陣列, 準備接值
    this.size = this.arr.length // 回應陣列長度
  }
  // stack.push()
  push(num) {
    // 如果有值才加
    if (num) {
      this.arr.push(num)
      this.size += 1
    }
  }
  // stack.pop()
  pop() {
    this.size -= 1
    return this.arr.pop()
  }
}

const stack = new Stack()

stack.push(123)
stack.push(456)
stack.push()
console.log(stack.size) // 印出 2

const item = stack.pop() // 取出元素
console.log(item) // 印出 456

stack.pop() // 繼續取出元素
console.log(stack.size) // 印出 0
