export default function Controls(){

  function resetControls(){
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
    btnSet.classList.remove('hide')
    btnStop.classList.add('hide')
  }

  function play(){
    btnPlay.classList.toggle('hide')
    btnPause.classList.toggle('hide')
    btnSet.classList.add('hide')
    btnStop.classList.remove('hide')
  }

  function pause(){
    btnPlay.classList.toggle('hide')
    btnPause.classList.toggle('hide')
  }

  function stop(){

  }

  function set(){
    let newMinutes = prompt('Quantos minutos?')
    if(!minutes){
      return false
    }
    minutes = newMinutes
  }
  
  return {
    resetControls,
    play,
    pause,
    stop,
    set
  }

}
