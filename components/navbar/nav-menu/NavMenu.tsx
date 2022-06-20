import NextLink from "next/link";
import { ChevronDownIcon } from "@heroicons/react/solid";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import s from "./NavMenu.module.css";
import { useState } from "react";
import Button from "@components/button";

type NavMenuProps = {
  items: { label: string; href: string }[];
};

const NavMenu = ({ items }: NavMenuProps) => {
  const [isOpen, setOpen] = useState(false);

  const onClick = () => {
    /* Force close Menu when it's a Nextjs Link */
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
  };

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setOpen}>
      <DropdownMenu.DropdownMenuTrigger asChild>
        <Button variant="subtle" endIcon={<ChevronDownIcon />}>
          Help For...
        </Button>
      </DropdownMenu.DropdownMenuTrigger>
      <DropdownMenu.Content align="start" sideOffset={4} className={s.content}>
        {items.map((item, idx) => (
          <DropdownMenu.Item key={idx} className="outline-none">
            <NextLink href={item.href}>
              <a onClick={onClick} className={s.link}>
                {item.label}
              </a>
            </NextLink>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default NavMenu;
