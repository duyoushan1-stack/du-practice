// for (let i = 1; i <= 5; i++) {
//     console.log('*'.repeat(i));
// }

// for (let i = 0; i < 5; i++) {
//     console.log(' '.repeat(4 - i) + '*'.repeat(i * 2 + 1));
// }
// for (let i = 0; i < 2; i++) {
//     console.log(' '.repeat(4) + '*');
// }

// 倒聖誕樹
for (let i = 0; i < 5; i++) {
    console.log(' '.repeat(i) + '*'.repeat(9 - 2 * i));
}

// 菱形
for (let i = 0; i < 5; i++) {
    console.log(' '.repeat(4 - i) + '*'.repeat(i * 2 + 1));
}
for (let i = 0; i < 4; i++) {
    console.log(' '.repeat(i + 1) + '*'.repeat(7 - 2 * i));
}

// 空心聖誕樹
function hollowXmasTree() {
    const top = ' '.repeat(4) + '*';
    console.log(top);
    for (let i = 0; i < 3; i++) {
        console.log(' '.repeat(3 - i) + '*' + ' '.repeat(i * 2 + 1) + '*');
    }
    const bottom = '*'.repeat(9)
    console.log(bottom);
}
hollowXmasTree();

// 豪華聖誕樹
// for (let i = 1; i < 6; i++) {
//     let row = ' '.repeat(5-i);
//     for (let j = 1; j < i + 1; j++) {
//         row += (j % 2 === 1 ? '%' : '*')+' ';
//     }
//     console.log(row);
// }
// for (let i = 0; i < 2; i++) {
//     console.log(' '.repeat(4) + '*');
// }

// for (let i = 1; i <= 5; i++) {
//     // 1. 處理前導空格 (置中關鍵)
//     let row = ' '.repeat(5 - i);

//     // 2. 內層迴圈拼接符號
//     for (let j = 1; j <= i; j++) {
//         // 判斷該位置是 % 還是 *，並在後面加一個空格
//         let symbol = j % 2 === 1 ? '%' : '*';
//         row += symbol + ' '; 
//     }
//     console.log(row);
// }

// // 樹幹部分
// for (let i = 0; i < 2; i++) {
//     console.log(' '.repeat(5 - 1) + '*');
// }