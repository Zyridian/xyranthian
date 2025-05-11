"use server"

import React, { JSX } from "react";
import { Spacing } from "../../foundations/spacing";
import { GridProps } from "./types";

/**
 * A layout primitive with equally sized columns in
 * a grid. Automatically capped at 12 columns.
 */
function Grid({
  children,
  columns = 1,
  gap = "spacing5",
  alignItems,
  justifyContent,
  id,
}: GridProps): JSX.Element {
  const $rootStyles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: Spacing[gap],
    alignItems,
    justifyContent,
  };

  return (
    <div data-testid={id} id={id} style={$rootStyles}>
      {children}
    </div>
  );
}

export default Grid;
