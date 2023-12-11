// 方格生成
let gridHtml = ''
let row = 11
let col = 5
for (let i = 0; i < row - 1; i++) {
    $('#background').append(`
    <div class="bg-row" data-index="${i}"></div>
    `)
}

for (let i = 0; i < row; i++) {
    gridHtml += '<div class="row">'
    for (let j = 0; j < col; j++) {
        gridHtml += `<div class="box"></div>`
    }
    gridHtml += '</div>'
}
$('#hiragana').html(gridHtml)
$('#katakana').html(gridHtml)

// 放文字
$('#hiragana .box').each(function (index) {
    $(this).css('background-image', `url(../images/Hiragana/${index + 1}.png)`)
})
$('#katakana .box').each(function (index) {
    $(this).css('background-image', `url(../images/Katakana/${index + 1}.png)`)
})

// 進入遊戲
$('.bg-row').on('click', function () {
    location.href = `./${$(this).data('index')}.html`
})