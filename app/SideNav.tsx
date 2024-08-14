"use client";

import { Sheet } from "@/components/ui/sheet";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchField } from "@/components/ui/search-field";
import { navLinks } from "./routes/nav-links";
import { IconBarsThree3 } from "justd-icons";
import Link from "next/link";

type Side = "left" | "right" | "top" | "bottom";

export default function SideNav() {
  const [sheetSide, setSheetSide] = useState<Side>("left");
  const [isOpen, setIsOpen] = useState(false);

  const sides: Side[] = ["left"];

  const pressHandler = (side: Side, open: boolean) => {
    setSheetSide(side);
    setIsOpen(open);
  };

  const links = navLinks.map((link, idx) => (
    <li key={idx}>
      <Link href={link.href}>{link.label}</Link>
    </li>
  ));

  return (
    <>
      <div className="">
        {sides.map((side, idx) => (
          <Button
            appearance="outline"
            size="square-petite"
            onPress={() => pressHandler(side, true)}
            key={idx}
          >
            <IconBarsThree3 />
          </Button>
        ))}
      </div>
      <Sheet.Content isOpen={isOpen} onOpenChange={setIsOpen} side={sheetSide}>
        <Sheet.Header>
          <Sheet.Title>
            <SearchField aria-label="Search" />
          </Sheet.Title>
          <Sheet.Description></Sheet.Description>
        </Sheet.Header>
        <ul className="block space-y-4 pt-5 pr-5 container">{links}</ul>
      </Sheet.Content>
    </>
  );
}
