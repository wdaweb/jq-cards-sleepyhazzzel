let number = $('.game').data('number')
// 前後關連結
if (number < 1) {
    $('.back').addClass('transparent')
} else if (number > 8) {
    $('.next').addClass('transparent')
}
$('.back').attr('href', `../game/${number - 1}.html`)
$('.next').attr('href', `../game/${number + 1}.html`)


// 產生 6 張卡片
for (let i = 0; i < 3; i++) {
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
    $(this).find('.card-front').css('background-image', `url(../images/Hiragana/${(number * 5) + (index * 2 + 1)}.png)`)
})

$('.kata').each(function (index) {
    $(this).find('.card-front').css('background-image', `url(../images/Katakana/${(number * 5) + (index * 2 + 1)}.png)`)
})

// 打亂
for (let i = 0; i < 6; i++) {
    const randomA = Math.round(Math.random() * 3)
    const randomB = Math.round(Math.random() * 3)
    $('.card').eq(randomA).insertAfter($('.card').eq(randomB))
}

// 翻牌
$('.card').on('click', function () {
    if (
        // .card 沒有 .card-close 代表被翻開
        // 如果已翻開數小於兩張
        $('.card:not(.card-close)').length < 2 &&
        // 且這張牌還沒翻開
        $(this).hasClass('card-close') &&
        // 這張牌還沒配對
        !$(this).hasClass('card-ok')
    ) {
        $(this).removeClass('card-close')
    }

    // 如果翻開兩張了
    if ($('.card:not(.card-close)').length === 2) {
        // 如果兩張一樣
        if (
            $('.card:not(.card-close)').eq(0).data('index') ===
            $('.card:not(.card-close)').eq(1).data('index')
        ) {
            $('.card:not(.card-close)').addClass('card-ok')
            $('.card:not(.card-close)').fadeTo(1000, 0)
        }

        setTimeout(function () {
            // 翻回來
            $('.card:not(.card-close)').addClass('card-close')
        }, 800)
    }
})


