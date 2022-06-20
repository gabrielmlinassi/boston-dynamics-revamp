import { PlayIcon } from "@heroicons/react/solid";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const ReactPlayer = dynamic(() => import("react-player/file"), { ssr: false });

const Player = ({
  light = false,
  url,
  cover,
}: {
  light?: boolean;
  url: string;
  cover: string;
}) => {
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    setShouldPlay(true);
  }, []);

  return (
    <ReactPlayer
      playing={shouldPlay}
      light={light ? cover : false}
      playIcon={
        <PlayIcon className=" z-20 h-20 w-20 cursor-pointer text-black opacity-50 duration-200 hover:scale-110" />
      }
      url={url}
      config={{
        attributes: {
          poster: cover,
        },
      }}
      height={"100%"}
      width={"100%"}
      style={{ objectFit: "cover" }}
      controls
    />
  );
};

export default Player;
