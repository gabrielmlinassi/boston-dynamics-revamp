import dynamic from "next/dynamic";
import { PlayIcon } from "@heroicons/react/solid";
import { useState } from "react";
const ReactPlayer = dynamic(() => import("react-player/file"), { ssr: false });

const Player = ({ url, cover }: { url: string; cover: string }) => {
  const [isPlaying, setPlay] = useState(false);

  const play = () => setPlay(true);

  return (
    <ReactPlayer
      url={url}
      light={cover}
      playing={isPlaying}
      playIcon={
        <PlayIcon className="w-20 h-20 text-black opacity-20" onClick={play} />
      }
      height={"100%"}
      width={"100%"}
      style={{ objectFit: "cover" }}
    />
  );
};

export default Player;
