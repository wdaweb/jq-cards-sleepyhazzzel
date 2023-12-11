let number = $('.game').data('number')

// 產生 10 張卡片
for (let i = 0; i < 5; i++) {
    $('.game').append(`
        <div class="card card-close hira" data-index="${i}">
            <div class="card-front"></div>
            <div class="card-back"></div>
        </div>
    `)
    $('.game').append(`
        <div class="card card-close kata" data-index="${i}">
            <div class="card-front"></div>
            <div class="card-back"></div>
        </div>
    `)
}

// 放圖片
$('.hira').each(function (index) {
    $(this).find('.card-front').css('background-image', `url(../images/Hiragana/${(number * 5) + (index + 1)}.png)`)
})

$('.kata').each(function (index) {
    $(this).find('.card-front').css('background-image', `url(../images/Katakana/${(number * 5) + (index + 1)}.png)`)
})