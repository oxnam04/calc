const $ = document.querySelector.bind(document)
const $All = document.querySelectorAll.bind(document)


const btn = $All('.text'),
    start = $('#start'),
    finish = $('#finish'),
    clock = $('.clock-times');


function setTime() {
    const date = new Date()
    let hour = date.getHours();
    let min = date.getMinutes();
    hour = upDate(hour)
    min = upDate(min)
    clock.innerHTML = `${hour}:${min}`
    const t = setTimeout(() => {
        setTime()
    }, 1000)
}

function upDate(k) {
    if (k < 10) {
        return '0' + k
    }
    return k
}

setTime()

let sim = ['*', '/', '+', '-', '%']

btn.forEach(el => {
    el.addEventListener('click', () => {
        if (el.id === 'clear') {
            start.innerHTML = ''
            finish.innerHTML = '0'
        } else if (el.id === 'backspace') {
            let str = start.innerHTML.toString()
            start.innerHTML = str.slice(0, -1)
        } else if (el.id !== '' && el.id !== '=') {
            start.innerHTML += el.id
        } else if (el.id === '=') {
            let res = eval(start.innerHTML)
            if (res === Infinity) {
                finish.innerHTML = 'Ошибка!'
                finish.style.fontSize = '3.5rem'
                start.innerHTML = ''
            } else {
                finish.innerHTML = res
                start.innerHTML = res
            }
        }
    })
})