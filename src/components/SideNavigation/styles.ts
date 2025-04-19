import React from "react";
import { palette } from "../../foundations/palette";

export const $navigationStyles: React.CSSProperties = {
    borderRightColor: palette.neutral200,
    borderRightStyle: "solid",
    borderRightWidth: "1px",
    height: "100%",
    padding: "8px 16px",
    width: "240px",
};

export const $sideNavigationItemStyles: React.CSSProperties = {
    alignItems: "center",
    border: "none",
    display: "flex",
    gap: "2px",
    justifyContent: "flex-start",
    padding: "8px 12px",
    width: "100%",
};
