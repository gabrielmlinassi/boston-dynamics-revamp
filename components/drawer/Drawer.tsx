import React, { useState } from "react";
import NextLink from "next/link";
import { XIcon } from "@heroicons/react/solid";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import s from "./Drawer.module.css";

const Drawer = ({ trigger }: { trigger: React.ReactNode }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Overlay className={s.overlay} />
      <DialogPrimitive.Content className={s.content}>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <DialogPrimitive.Title asChild>
              <h3 className="bg-blue-500 text-white">
                Let&apos;s start the conversation here...
              </h3>
            </DialogPrimitive.Title>
            <DialogPrimitive.Close asChild>
              <button className="hover:bg-black-400 rounded-md p-1 text-white hover:bg-opacity-25">
                <XIcon className="h-6 w-6" />
              </button>
            </DialogPrimitive.Close>
          </div>
          <div>
            <h4 className="mt-8 text-white">Succeeding is an active process</h4>
            <p className="text-white text-opacity-70">
              I&apos;m best at helping clients who are ready to actively
              participate in getting their success. You&apos;ll likely be a good
              fit if
            </p>
            <ul className="mt-4 ml-8 list-disc space-y-2 text-white text-opacity-70">
              <li>
                You&apos;re up to actively participate in succeeding with your
                issue
              </li>
              <li>
                You&apos;re ok with the idea that the work can be pretty
                emotional sometimes
              </li>
              <li>You&apos;re willing to do some work between sessions</li>
              <li>
                You like the idea that the approaches I take are very different
                and I&apos;m not a traditional therapist or psychologist.
              </li>
              <li>
                You&apos;d like to have an in-depth phone conversation to talk
                about your issue
              </li>
            </ul>
            <h4 className="mt-8 text-white">Fees</h4>
            <p className="text-white text-opacity-70">
              If we work together, you&apos;d pay a single fee for success.
              It&apos;s one price, regardless of how many sessions it takes to
              solve the problem (with you defining and judging success). If you
              reached the ten sessions and you were making good progress,
              we&apos;d continue until the work is finished. If you&apos;d done
              that much work and you didn&apos;t feel like you&apos;d made
              progress, I&apos;d guarantee the work by refunding half the fee.
            </p>
            <p className="mt-4 text-white text-opacity-70">
              Fees depending on the client and the issue. Usually they fall
              somewhere in the $3-7k range.
            </p>
          </div>
        </div>
        <div className="ml-auto">
          <span className="font-Inter text-white text-opacity-70">
            OK with you?
          </span>
          <NextLink href="/test" passHref>
            <a className="ml-5 rounded-lg bg-blue-400 px-5 py-3 font-Inter font-bold text-blue-500">
              Continue
            </a>
          </NextLink>
        </div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Root>
  );
};

export default Drawer;
