import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Test = () => {
  const [isOpen, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={openDrawer}>Open Drawer</button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeDrawer}>
          <div className="fixed top-0 bottom-0 right-0 w-96 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="ease-in duration-200"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="w-full h-full bg-yellow-400">
                <h1>TEST</h1>
                {/* <button>btn</button> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Test;
