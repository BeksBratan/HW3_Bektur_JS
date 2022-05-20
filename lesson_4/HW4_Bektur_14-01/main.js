// #HW:
// Сделать Counter:
// то есть сделать две кнопки + и -
// будет let num = 0
// при клике на кнопку + добавлять к num 1
// при клике на кнопку - отнимать к num 1
// и сверстать все красиво!

let inc = document.getElementsByClassName('increment'),
    dec = document.getElementsByClassName('decrement'),
    state = document.getElementsByTagName("h1"),
    restart = document.getElementsByClassName('res')

let label = 0

inc[0].onclick = () => {
    label++
    state[0].innerText = label
    state[0].style.color = 'green'
}

dec[0].onclick = () => {
    label --
    state[0].innerText = label
    state[0].style.color = 'red'
}

restart[0].onclick = () => {
    state[0].innerText = label = 0
    state[0].style.color = 'black'
}