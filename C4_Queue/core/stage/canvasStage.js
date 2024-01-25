// 用 canvas 做出的打字機的笑果，例如字串 'Hello World', 會一個字一個字的出現在畫面上
// 舉例: Hello 的效果會是 H -> He -> Hel -> Hell -> Hello
const wordsQueue = new Queue()
wordsQueue.enqueue("厲害了")
wordsQueue.enqueue("我的媽")

const word = "厲害了"
// const word = "abcdefghijklmnopqrstuvwxyz"
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const fontSize = 14
const lineHeight = 1.3
const font = `${fontSize}px Courier New`
const queue = new Queue()
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.font = font
ctx.textBaseline = 'middle'
ctx.fillStyle = '#fff'

// TextMetrics 物件是由 canvas.measureText(text) 所回傳的，它包含了一些有關文字的度量資訊。以下是 TextMetrics 物件的所有屬性：

// width: 文字的寬度（以像素為單位）。
// actualBoundingBoxLeft: 從文字的基線點到最左邊的點的距離（以像素為單位）。
// actualBoundingBoxRight: 從文字的基線點到最右邊的點的距離（以像素為單位）。
// fontBoundingBoxAscent: 從基線到最高點的距離（以像素為單位）。
// fontBoundingBoxDescent: 從基線到最低點的距離（以像素為單位）。
// actualBoundingBoxAscent: 從基線到實際的最高點的距離（以像素為單位）。
// actualBoundingBoxDescent: 從基線到實際的最低點的距離（以像素為單位）。
// emHeightAscent: 從基線到 em 方塊的頂部的距離（以像素為單位）。
// emHeightDescent: 從基線到 em 方塊的底部的距離（以像素為單位）。
// alphabeticBaseline: 基線的位置（以像素為單位）。


// q: ctx 有 line height 嗎？
// a: 沒有，但是有 textBaseline
// q: textBaseline 是什麼？
// a: textBaseline 是文字的基準線，有 top, middle, bottom, alphabetic, hanging, ideographic, mathematical
// q: 那假如我需要讓文字換行呢？要怎麼知道文字的高度
// a: 可以用 measureText 來取得文字的高度
// q: 那我要怎麼知道文字的寬度呢？
// a: 可以用 measureText 來取得文字的寬度
// q: 是使用 ctx.measureText(text) 嗎？
// a: 是的，ctx.measureText(text) 會回傳一個 TextMetrics 物件，裡面有 width 屬性，可以取得文字的寬度
// q: 我要如何用 TextMetrics 物件 來算出文字的高度？
// a: 可以用 TextMetrics 物件 的 fontBoundingBoxAscent 屬性，來取得文字的高度
// q: 有需要加上 fontBoundingBoxDescent 屬性嗎？




for (let i = 0; i < word.length; i++) {
  queue.enqueue(word[i])
}

let timerDelay = 60; // 設置初始的延遲時間
let letterSpacing = 0; // 設置字與字之間的間隔
let letterX = 0
let letterY = 10
let resultStr = ''


let timer = setInterval(() => {
  if (queue.isEmpty()) {
    clearInterval(timer);
    return;
  }

  
  const letter = queue.dequeue();
  resultStr += letter;
  console.log(resultStr)
  console.log(ctx.measureText(resultStr).width)
  letterX += ctx.measureText(letter).width + letterSpacing; // Add letterSpacing calculation
  // letterY += fontSize * lineHeight;
  
  // q: 為什麼 letterX 要乘以 0.6？
  // a: 因為文字的寬度不是等於 fontSize，所以要乘以 0.6，才會讓文字的間距跟字體大小一樣
  // q: 能夠用 ctx.measureText(letter).width 來取得文字的寬度嗎？
  // a: 可以，但是要注意，ctx.measureText(letter).width 會回傳一個數字，所以要用 letterX += ctx.measureText(letter).width + letterSpacing
  // q: 那還需要乘以 0.6 嗎？
  // a: 不需要，因為 ctx.measureText(letter).width 已經是文字的寬度了
  ctx.fillText(letter, letterX, letterY);
}, timerDelay);


// q: canvas 有可能會有捲軸嗎？什麼時候會出現？
// a: 有可能，當 canvas 的寬度或高度超過畫面時，就會出現捲軸
// q: canvas 的高度，會因為內容隨之變高嗎？
// a: 不會，canvas 的高度是固定的，不會因為內容隨之變高
// q: 那我怎麼讓 canvas 的高度隨著內容變高呢？
// a: 可以用 canvas 的 height 屬性，來設定 canvas 的高度
// q: 那我要怎麼知道 canvas 內容的高度呢？ 而不是取得 canvas 的固定高度
// a: 可以用 canvas 的 scrollHeight 屬性，來取得 canvas 的內容高度
// q: canvas 的 scrollHeight 屬性，會因為內容隨之變高嗎？
// a: 會，canvas 的 scrollHeight 屬性，會因為內容隨之變高