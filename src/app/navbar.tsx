"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import React from "react";

export default function CustomNavbar() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link className="text-inherit" href="/">
          Invoicer
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            color="foreground"
            href="https://github.com/ShrootBuck/Invoicer"
            isExternal
            showAnchorIcon
          >
            Github
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/api/auth/signout">Sign Out</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
