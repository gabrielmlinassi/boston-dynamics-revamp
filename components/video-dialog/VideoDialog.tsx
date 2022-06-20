import dynamic from "next/dynamic";
import { PlayIcon } from "@heroicons/react/solid";
import * as Dialog from "@radix-ui/react-dialog";

const Player = dynamic(() => import("@components/player"));

const VideoDialog = ({ src, cover }: { src: string; cover: string }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <PlayIcon className=" z-20 h-20 w-20 cursor-pointer text-black opacity-50 duration-200 hover:scale-110" />
        </div>
      </Dialog.Trigger>
      <Dialog.Overlay className="fixed inset-0 z-20 bg-black opacity-50" />
      <Dialog.Content className="fixed left-1/2 top-1/2 z-30 w-3/4 -translate-x-1/2 -translate-y-1/2 shadow-lg outline-none rdx-state-open:animate-fade-in rdx-state-closed:animate-fade-out">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg bg-white">
          <Player url={src} cover={cover} />
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default VideoDialog;
