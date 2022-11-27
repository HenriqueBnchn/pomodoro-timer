import Controls  from "./controls.js"
import Timer  from  "./timer.js"
import Sounds  from "./sounds.js"
import { Elements } from "./elements.js"

const {
  btnPlay,
  btnPause,
  btnSet,
  btnStop,
  btnSoundOn,
  btnSoundOff,
  minutesDisplay,
  secondsDisplay
} = Elements

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
  resetControls: controls.reset
})

const sound = Sounds()

btnPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
  sound.buttonPress()
})

btnPause.addEventListener('click', function() {
  controls.pause()
  timer.hold()
  sound.buttonPress()
})

btnStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()
  sound.buttonPress()
})


btnSet.addEventListener('click', function() {
  let newMinutes = controls.getMinutes()

  if(!newMinutes){
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})

btnSoundOn.addEventListener('click', function() {
  sound.bgAudio.play()
  btnSoundOn.classList.add('hide')
  btnSoundOff.classList.remove('hide')
})

btnSoundOff.addEventListener('click', function() {
  sound.bgAudio.pause()
  btnSoundOn.classList.remove('hide')
  btnSoundOff.classList.add('hide')
})