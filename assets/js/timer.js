export default function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeout,
  resetControls,
  countdown
}){

  function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeout)
  }

  function updateTimerDisplay(minutes, seconds) {
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
  }


  function countdown() {
    timerTimeout = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      updateTimerDisplay(minutes, 0)

      if (minutes <= 0) {
        resetControls()

        return
      }

      if (seconds <= 0) {
        seconds = 2
        --minutes
      }


      updateTimerDisplay(minutes, String(seconds - 1))


      countdown()
    }, 1000)
  }

  return {
    countdown,
    resetTimer,
    updateTimerDisplay
  }
}