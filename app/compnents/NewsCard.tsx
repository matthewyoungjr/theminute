"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useTheme } from "next-themes";
import clsx from "clsx";

interface CardProps {
  title: string;
  author: string;
  url: string;
  date: string;
}

const NewsCard = ({
  title,
  author,
  url,
  date
}: CardProps) => {
  const { resolvedTheme } = useTheme();

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={url} target="_blank">
      <Card
        className={clsx(
          "max-w-x",
          resolvedTheme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-900"
        )}
      >
        <Card.Header className={clsx(
          resolvedTheme === "light" ? "text-gray-500" : "text-gray-300"
        )}>{author}</Card.Header>
        <Card.Content>{title}</Card.Content>
        <Card.Footer>
          <Card.Description>{formattedDate}</Card.Description>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default NewsCard;
