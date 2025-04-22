import { Radii, Spacing } from "../../foundations";
import { palette } from "../../foundations/palette";
import { typeScale } from "../../foundations/typography";

export const $badgeStyles: React.CSSProperties = {
    backgroundColor: palette.indigo600,
    borderRadius: Radii.md,
    color: palette.neutral000,
    fontSize: typeScale.sizeLabel,
    fontWeight: typeScale.weightMedium,
    padding: "4px 12px",
};

export const $contentStyles: React.CSSProperties = {
    color: palette.neutral000,
    fontSize: typeScale.sizeBodyS,
    fontWeight: typeScale.weightRegular,
    lineHeight: 1.5,
};

export const $headerStyles: React.CSSProperties = {
    color: palette.neutral000,
    fontSize: typeScale.sizeH2,
    fontWeight: typeScale.weightBold,
    margin: "0 0 4px 0"
};

export const $iconstyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    width: "auto",
    minWidth: "80px",
};

export const $rootStyles: React.CSSProperties = {
    alignItems: "flex-start",
    backgroundColor: palette.indigo900,
    borderRadius: Radii.lg,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    color: palette.neutral000,
    display: "flex",
    flexDirection: "column",
    gap: Spacing.spacing2,
    padding: Spacing.spacing6,
    position: "relative",
};