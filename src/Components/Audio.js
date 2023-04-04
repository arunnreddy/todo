import React from 'react'
import music from  "../music.mp3"
function Audio() {
  return (
    <div>
     <audio controls>
<source src={music} type="audio/ogg"/>
     </audio>
    </div>
  )
}

export default Audio
