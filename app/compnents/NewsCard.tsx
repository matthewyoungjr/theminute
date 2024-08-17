"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useTheme } from "next-themes";
import clsx from "clsx";

const NewsCard = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Link href="">
      <Card
        className={clsx(
          "max-w-x",
          resolvedTheme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-900"
        )}
      >
        <Card.Header>
          <Card.Title> :Business </Card.Title>
        </Card.Header>
        <Card.Content>
          Elenas: The Ouest to Become LatAm's Social Commerce Leader And Plans
          On Becoming A Dictator.
        </Card.Content>
        <Card.Footer>
          <Card.Description>January 11, 2024</Card.Description>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default NewsCard;
