import NextLink from "next/link";

import NavMenu from "./nav-menu";
import Logo from "@components/logo";
import Drawer from "@components/drawer";
import Button from "@components/button";
import MobileNav from "@components/mobile-nav";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="flex h-[80px] items-center justify-between pl-5 pr-3 md:pl-0 md:pr-0">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          <NavMenu
            items={[
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
            ]}
          />
          <NextLink href="/test" passHref>
            <Button variant="subtle" asChild>
              <a>Reviews</a>
            </Button>
          </NextLink>
          <NextLink href="/test" passHref>
            <Button variant="subtle" asChild>
              <a>About</a>
            </Button>
          </NextLink>
          <Drawer trigger={<Button variant="filled">Contact</Button>} />
        </nav>
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
