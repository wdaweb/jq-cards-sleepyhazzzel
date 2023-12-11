let number = $('.game').data('number')

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

let array = []
const array7 = [36, 38, 40]
const array9 = [46, 50, 51]
if (number === 7) {
    array = array7
} else if (number === 9) {
    array = array9
}

// 放圖片
$('.hira').each(function (index) {
    $(this).find('.card-front').css('background-image', `url(../images/Hiragana/${array[index]}.png)`)
})

$('.kata').each(function (index) {
    $(this).find('.card-front').css('background-image', `url(../images/Katakana/${array[index]}.png)`)
})