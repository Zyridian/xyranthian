import React from "react";
import { palette } from "../../foundations/palette";
import { typeScale } from "../../foundations/typography";
import { Radii, Spacing } from "../../foundations";
import { ToastVariants } from "./types";

export const $contentStyles: React.CSSProperties = {
    color: palette.neutral000,
    fontSize: typeScale.sizeLabel,
    fontWeight: typeScale.weightMedium,
    lineHeight: 1.5,
    margin: 0,
};

export const $rootStyles: React.CSSProperties = {
    alignItems: "center",
    borderRadius: Radii.lg,
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "row",
    gap: Spacing.spacing3,
    height: "auto",
    marginLeft: "16px",
    marginRight: "16px",
    maxHeight: "80px",
    maxWidth: "250px",
    minHeight: "48px",
    minWidth: "250px",
    padding: Spacing.spacing4,
    transition: "opacity 0.3s ease, transform 0.3s ease",
};

export const $toastContainerStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "24px",
    left: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    zIndex: 9999,
};

export const $variantStyles: Record<ToastVariants, React.CSSProperties["backgroundColor"]> = {
    "error": palette.error500,
    "info": palette.primary600,
    "success": palette.success500,
};

