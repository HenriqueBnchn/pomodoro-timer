import Controls  from "./controls.js"
import Timer  from  "./timer.js"
import Sounds  from "./sounds.js"
import Events from "./events.js"
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

Events({controls, timer, sound})