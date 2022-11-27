import { Elements } from "./elements.js"

const {
  btnPause,
  btnPlay,
  btnSet,
  btnStop,
  btnSoundOn,
  btnSoundOff
} = Elements

export default function Events({
  controls,
  timer,
  sound,
}){

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
}