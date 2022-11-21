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
let timerTimeout


const controls = Controls()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeout,
  resetControls
})

btnPlay.addEventListener('click', function () {
  controls.play()
  timer.countdown()
})

btnPause.addEventListener('click', function () {
  controls.pause()
})

btnStop.addEventListener('click', function () {
  controls.resetControls()
  timer.resetTimer()
})


btnSet.addEventListener('click', function () {

})

btnSoundOn.addEventListener('click', function () {
  btnSoundOn.classList.toggle('hide')
  btnSoundOff.classList.toggle('hide')
})

btnSoundOff.addEventListener('click', function () {
  btnSoundOn.classList.toggle('hide')
  btnSoundOff.classList.toggle('hide')
})