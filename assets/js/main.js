
const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')

const btnSoundOn = document.querySelector('.sound-on')
const btnSoundOff = document.querySelector('.sound-off')

let minutes;

btnPlay.addEventListener('click', function(){
  btnPlay.classList.toggle('hide')
  btnPause.classList.toggle('hide')
  btnSet.classList.add('hide')
  btnStop.classList.remove('hide')
})

btnPause.addEventListener('click', function(){
  btnPlay.classList.toggle('hide')
  btnPause.classList.toggle('hide')
})

btnStop.addEventListener('click', function(){
  btnPause.classList.add('hide')
  btnPlay.classList.remove('hide')
  btnSet.classList.remove('hide')
  btnStop.classList.add('hide')
})


btnSoundOn.addEventListener('click', function(){
  btnSoundOn.classList.toggle('hide')
  btnSoundOff.classList.toggle('hide')
})

btnSoundOff.addEventListener('click', function(){
  btnSoundOn.classList.toggle('hide')
  btnSoundOff.classList.toggle('hide')
})