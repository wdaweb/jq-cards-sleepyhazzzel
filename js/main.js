// 前後關連結
if (number < 1) {
    $('.back').attr('disabled', true)
        .css('pointer-events', 'none')
        .addClass('transparent')
} else if (number > 8) {
    $('.next').attr('disabled', true)
        .css('pointer-events', 'none')
        .addClass('transparent')
}
$('.back').attr('href', `../game/${number - 1}.html`)
$('.next').attr('href', `../game/${number + 1}.html`)

// 打亂
for (let i = 0; i < 10; i++) {
    const randomA = Math.round(Math.random() * 8)
    const randomB = Math.round(Math.random() * 8)
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

    if ($('.card-ok').length === $('.card').length) {

        setTimeout(function () {
            if (number < 9) {
                location.replace(`../game/${number + 1}.html`)
            } else if (number === 9) {
                location.replace('../game/summary.html')
            }
        }, 800)

    }
})