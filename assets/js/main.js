

let btnPlay = document.querySelector('.play')
let btnPause = document.querySelector('.pause')
let btnStop = document.querySelector('.stop')
let btnSet = document.querySelector('.set')


btnPlay.addEventListener('click', togglePlayPause)
btnPause.addEventListener('click', togglePlayPause)

function togglePlayPause(){
  btnPlay.classList.toggle('hide')
  btnPause.classList.toggle('hide')
}

