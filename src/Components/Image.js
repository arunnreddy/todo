// // import React from 'react';
// // const dat={
// //   data:"http://docs.google.com/uc?export=open&id=1SCNj-2EAt5w5W_wLg6faLkFpfi_W2_Ry",
// //   meta:"http://docs.google.com/uc?export=open&id=1cnMVawasCQClUAXUWqy3LKvgG2Dej_Vy",
// //   seta:"http://docs.google.com/uc?export=open&id=1SCNj-2EAt5w5W_wLg6faLkFpfi_W2_Ry",
// //   peta:"http://docs.google.com/uc?export=open&id=1RKJQaCakYSPpvDd-BQGBZkts43hu0rcP",
// //   reta:"http://docs.google.com/uc?export=open&id=1jiqUAIoq2RhZfFBkGLlQ8stEzr8uMUna"
// // }

// // function Image() {
// //   return (
// //     <div>
// // <video controls>
// // <source src="https://www.youtube.com/feed/downloads" width="200px" height="320px" type="video/mp4"/>
// // </video>
// //     </div>
// //   )
// // }

// // export default Image


// import React from 'react'
// import dataa from "../dataa.mp3"
// function Image() {
//   return (
//     <div>
//       <audio controls>
// <source src={dataa}/>
//       </audio>
//     </div>
//   )
// }

// export default Image
import React from 'react';
import Mastaru from "../Mastaar.mp4"

function Image() {
  return (
    <div>
      <video controls>
      <source src={Mastaru}  />
      </video>
    </div>
  )
}

export default Image
