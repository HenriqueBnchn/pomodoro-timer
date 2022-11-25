import Controls  from "./controls.js"
import Timer  from  "./timer.js"



const btnPlay = document.querySelector('.play')

const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')

const btnSoundOn = document.querySelector('.sound-on')
const btnSoundOff = document.querySelector('.sound-off')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)


const controls = Controls({
  btnPause,
  btnPlay,
  btnSet,
  btnStop,
  btnSoundOff,
  btnSoundOn
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  reset: controls.reset,
})

btnPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
})

btnPause.addEventListener('click', function() {
  controls.pause()
  timer.hold()
})

btnStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()
})


btnSet.addEventListener('click', function() {
  let newMinutes = controls.getMinutes()

  if(!newMinutes){
    timer.reset()
    return
  }

  minutes =  newMinutes
  timer.updateDisplay(minutes, 0)
  timer.updateMinutes(minutes)
})

btnSoundOn.addEventListener('click', function() {
  btnSoundOn.classList.toggle('hide')
  btnSoundOff.classList.toggle('hide')
})

btnSoundOff.addEventListener('click', function() {
  btnSoundOn.classList.toggle('hide')
  btnSoundOff.classList.toggle('hide')
})