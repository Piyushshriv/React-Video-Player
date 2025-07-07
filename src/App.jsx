import React from "react";
import "./App.css";
import VideoJSPlayer from "./components/videojs-player";
import ImageKitBasicPlayer from "./components/imagekit-player";
import BasicVideoPlayer from "./components/video-player";

function App() {
  const playerRef = React.useRef(null);

   const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'https://ik.imagekit.io/ouh9u1vh8/sample-video.mp4?updatedAt=1751882977252',
      type: 'video/mp4'
    },
  ],
  poster:"https://ik.imagekit.io/ouh9u1vh8/sample-video.mp4?updatedAt=1751882977252/ik-thumbnail.jpg?tr=w-1200,h-680,so-5",
 tracks: [
      {
        kind: "captions",
        src: "/english.vtt",
        srclang: "en",
        label: "English",
        default: true, 
      },
      {
        kind: "captions",
        src: "/hindi.vtt",
        srclang: "en",
        label: "Hindi",
        default: true,
      },
       {
        kind: "chapters",
        src: "/chapters.vtt",
        srclang: "en",
        label: "Chapters",
        default: true,
      }
    ],
};
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
    console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };
  return (
    <div style={{ maxWidth: "800px" }}>
      <VideoJSPlayer options={videoJsOptions} onReady={handlePlayerReady}/>
    </div>
  );
}

export default App;