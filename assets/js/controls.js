export default function Controls({
  btnPlay,
  btnPause,
  btnSet,
  btnStop,
  btnSoundOff,
  btnSoundOn
}){

  function play(){
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    btnSet.classList.add('hide')
    btnStop.classList.remove('hide')
  }
  function reset(){
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
    btnSet.classList.remove('hide')
    btnStop.classList.add('hide')
  }


  function pause(){
    btnPlay.classList.toggle('hide')
    btnPause.classList.toggle('hide')
  }


  function getMinutes(){
    let newMinutes = prompt('Quantos minutos?')
    if(!newMinutes){
      return false
    }
    return newMinutes
  }
  
  return {
    reset,
    play,
    pause,
    getMinutes
  }

}
