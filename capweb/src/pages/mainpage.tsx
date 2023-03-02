import { useState, useEffect } from "react";
import React from "react";
import RTCVideo from "../components/cam";

export default function Mainpage() {
  const [localStream, setLocalStream] = useState<MediaStream>();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      setLocalStream(stream);
    });
  }, []);

  // <RTCVideo mediaStream={localStream} />
  const onClick = (e: any) => {};

  return (
    <div className="flex flex-row  w-max h-max gap-10">
      <img
        className="w-2/6"
        src="http://127.0.0.1:8000/video_feed"
        alt="Video"
      />
      <div className="flex items-center justify-items-center">
        <button className="w-32 h-14 bg-red-600 rounded-xl">Press</button>
      </div>
    </div>
  );
}
