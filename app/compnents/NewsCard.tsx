"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const NewsCard = () => {
  return (
    <Link href="">
      <Card className="max-w-xs">
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
