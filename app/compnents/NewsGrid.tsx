"use client";
import type { ReactNode } from "react";
import { Grid } from "@/components/ui/grid";
import { GridListItem } from "react-aria-components";

interface GridProp {
  children: ReactNode;
}

const NewsGrid = ({ children }: GridProp) => {
  return (
    <Grid
      columns={{ initial: 1, sm: 2, md: 3, xl: 4 }}
      gapX={5}
      gapY={7}
      className="justify-items-center p-7"
    >
      {children}
    </Grid>
  );
};

export default NewsGrid;
