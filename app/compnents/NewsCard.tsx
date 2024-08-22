"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useTheme } from "next-themes";
import clsx from "clsx";

const NewsCard = ({
  title,
  author,
  url,
}: {
  title: string;
  author: string;
  url: string;
}) => {
  const { resolvedTheme } = useTheme();

  return (
    <Link href={url} target="_blank">
      <Card
        className={clsx(
          "max-w-x",
          resolvedTheme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-900"
        )}
      >
        <Card.Header>
          <Card.Title> :Business </Card.Title>
        </Card.Header>
        <Card.Content>{title}</Card.Content>
        <Card.Footer>
          <Card.Description>{author}</Card.Description>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default NewsCard;
