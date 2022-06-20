import NextLink from "next/link";
import Logo from "@components/logo";
import Button from "@components/button";
import { PhoneIcon } from "@heroicons/react/outline";
import Drawer from "@components/drawer";

const Footer = () => {
  return (
    <footer className="mt-40 bg-blue-500 pb-2">
      <div className="mx-auto max-w-[1200px] px-5 md:px-0">
        <div className="grid grid-cols-2 gap-x-12 gap-y-16 py-16 md:grid-cols-[350px,1fr,1fr,1fr] md:gap-x-24 md:gap-y-0">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <h3 className="mt-8 text-white">
              Could I <span className="fancy-underline">help you?</span>
            </h3>
            <p className="mt-2 text-white opacity-70">
              Nine out of ten Boston Hypnosis clients are successful because I
              limit my practice. Would you be a good fit?
            </p>
            <div className="mt-6">
              <Drawer
                trigger={
                  <Button variant="filled" startIcon={<PhoneIcon />}>
                    Let&apos;s talk
                  </Button>
                }
              />
            </div>
          </div>
          <div>
            <h4 className="text-white">Help For</h4>
            <div className="mt-4 flex flex-col gap-1">
              <Link href="/">Anxiety</Link>
              <Link href="/">Weight Loss</Link>
              <Link href="/">ED</Link>
              <Link href="/">Fear of flying</Link>
              <Link href="/">Fear of Public Speaking</Link>
              <Link href="/">Driving anxiety</Link>
            </div>
          </div>
          <div>
            <h4 className="opacity-0">.</h4>
            <div className="mt-4 flex flex-col gap-1">
              <Link href="/">Phobias & Panic Attacks</Link>
              <Link href="/">Sleep</Link>
              <Link href="/">Habits & Compulsions</Link>
              <Link href="/">Other Issus</Link>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white">Other</h4>
            <div className="mt-4 flex flex-col">
              <Link href="/reviews">Reviews</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-1 text-xs text-white opacity-70 md:flex-row md:gap-0 md:text-sm">
          <span>© 2022 Boston Hypnosis - Designed by THIEBAUD Matis</span>
          <div className="flex gap-2 md:gap-5">
            <span>617-542-4444</span>
            <span>-</span>
            <span>82 Marlborough Street, Boston, MA 02116</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <NextLink href={href}>
      <a className="text-white opacity-70 hover:opacity-100">{children}</a>
    </NextLink>
  );
};

export default Footer;
