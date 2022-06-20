import NextLink from "next/link";
import { MenuIcon } from "@heroicons/react/solid";
import { ChevronRightIcon, XIcon } from "@heroicons/react/outline";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "@components/button";
import Logo from "@components/logo";

const MobileNav = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="active:bg-gray-300 block rounded-lg p-1 md:hidden">
          <MenuIcon className="text-black-400 h-7 w-7" />
        </button>
      </Dialog.Trigger>
      <Dialog.Content className="fixed inset-0 z-30 bg-white p-8 rdx-state-open:animate-drawer-slide-in rdx-state-closed:animate-drawer-hide">
        <div className="flex items-center justify-between">
          <Dialog.Title>
            <Logo />
          </Dialog.Title>
          <Dialog.Close>
            <XIcon className="h-6 w-6" />
          </Dialog.Close>
        </div>
        <h5 className="mb-3 mt-8 font-bold uppercase text-[#78757a]">
          help for...
        </h5>
        <div className="space-y-2">
          {[
            {
              label: "Anxiety",
              href: "/help/anxiety",
            },
            {
              label: "Weight Loss",
              href: "/help/weight-loss",
            },
            {
              label: "Erectile Dysfunction",
              href: "/help/erectile-dysfunction",
            },
            {
              label: "Driving Anxiety",
              href: "/help/driving-anxiety",
            },
            {
              label: "Fear of Public Speaking",
              href: "/help/fear-of-public-speaking",
            },
            {
              label: "Fear of Flying",
              href: "/help/fear-of-flying",
            },
          ].map((x, i) => (
            <NextLink href={x.href} key={i}>
              <a className="flex items-center gap-1 text-black text-opacity-75">
                {x.label}
                <ChevronRightIcon className="mt-1 h-[10px] w-[10px]" />
              </a>
            </NextLink>
          ))}
        </div>
        <hr className="mt-8 border-black border-opacity-25" />
        <div>
          <h5 className="m-0 mb-3 mt-8 p-0 font-bold uppercase leading-none text-[#78757a]">
            Company
          </h5>
          <div className="space-y-2">
            {[
              {
                label: "Reviews",
                href: "/help/anxiety",
              },
              {
                label: "About",
                href: "/help/weight-loss",
              },
            ].map((x, i) => (
              <NextLink href={x.href} key={i}>
                <a className="flex items-center gap-1 text-black text-opacity-75">
                  {x.label}
                  <ChevronRightIcon className="mt-1 h-[10px] w-[10px]" />
                </a>
              </NextLink>
            ))}
          </div>
        </div>
        <Button className="mt-8 px-0 py-0" variant="filled" size="xs">
          Contact
        </Button>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default MobileNav;
