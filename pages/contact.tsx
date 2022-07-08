import { PhoneIcon } from "@heroicons/react/outline";
import { PaperAirplaneIcon } from "@heroicons/react/solid";

import Button from "@components/button";

function ContactPage() {
  return (
    <div className="mx-auto mt-12 max-w-[1000px]">
      <div className="flex items-center justify-between">
        <div>
          <h1>
            <span className="fancy-underline">Let&apos;s talk...</span>
          </h1>
          <h5 className="font-NewYork text-lg font-medium">
            The best place to start is with a phone conversation
          </h5>
          <Button variant="filled" className="mt-5">
            <PhoneIcon className="h-5 w-5" /> 617-542-4444
          </Button>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/baseballscout.jpg" alt="" />
      </div>
      <div className="my-16 flex items-center gap-6">
        <div className="h-[1px] w-full bg-[#C1DDEE]" />
        <span className="text-sm text-[#717373]">Or</span>
        <div className="h-[1px] w-full bg-[#C1DDEE]" />
      </div>
      <div>
        <h5 className="font-NewYork text-lg font-medium">
          You can also reach me by e-mail
        </h5>
        <div className="mt-6 flex gap-8">
          <div className="w-1/2">
            <div className="flex flex-col">
              <label className="" htmlFor="">
                First Name<span className="text-[#2382DB]">*</span>
              </label>
              <input
                type="text"
                className="mt-1 rounded py-2 px-2 outline-none ring-1 ring-black ring-opacity-30 hover:ring-opacity-50 focus:ring-2 focus:ring-[#2382DB]"
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label className="" htmlFor="">
                Last Name<span className="text-[#2382DB]">*</span>
              </label>
              <input
                type="text"
                className="mt-1 rounded py-2 px-2 outline-none ring-1 ring-black ring-opacity-30 hover:ring-opacity-50 focus:ring-2 focus:ring-[#2382DB]"
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label className="" htmlFor="">
                Email<span className="text-[#2382DB]">*</span>
              </label>
              <input
                type="email"
                className="mt-1 rounded py-2 px-2 outline-none ring-1 ring-black ring-opacity-30 hover:ring-opacity-50 focus:ring-2 focus:ring-[#2382DB]"
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label className="" htmlFor="">
                Phone Number
              </label>
              <input
                type="text"
                className="mt-1 rounded py-2 px-2 outline-none ring-1 ring-black ring-opacity-30 hover:ring-opacity-50 focus:ring-2 focus:ring-[#2382DB]"
              />
            </div>
          </div>
          <div className="mt-7 w-1/2">
            <textarea className="h-[295px] w-full rounded py-2 px-2 outline-none ring-1 ring-black ring-opacity-30 hover:ring-opacity-50 focus:ring-2 focus:ring-[#2382DB]" />
            <div className="mt-3 flex items-start justify-between">
              <span className="w-2/3 text-xs text-black text-opacity-70">
                All information on this form is confidential. I don&apos;t sell
                or give away data. Any mail I may send in return is specifically
                issue-related (no spamming).
              </span>
              <Button variant="filled">
                Send <PaperAirplaneIcon className="h-5 w-5 rotate-90" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
