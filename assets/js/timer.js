export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}){
  let timerTimeout
  let minutes = Number(minutesDisplay.textContent)

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeout)
  }

  function updateDisplay(minutes, seconds) {
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
  }


  function countdown() {
    timerTimeout = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      updateDisplay(minutes, 0)

      if (minutes <= 0) {
        reset()

        return
      }

      if (seconds <= 0) {
        seconds = 2
        --minutes
      }


      updateDisplay(minutes, String(seconds - 1))


      countdown()
    }, 1000)
  }

  function updateMinutes(newMinutes){
    minutes = newMinutes
  }

  function hold(){
    clearTimeout(timerTimeout)
  }
  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold
  }
}