import { Spacing } from "../../foundations";
import { palette } from "../../foundations/palette";
import { typeScale } from "../../foundations/typography";
import { ExpandableDropdownVariants } from "./types";

export const $rootBaseStyles: React.CSSProperties = {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    margin: 0,
    width: "100%",
};

export const $rootVariantStyles: Record<ExpandableDropdownVariants, React.CSSProperties> = {
    "block": {
        ...$rootBaseStyles,
        borderColor: palette.neutral200,
        borderRadius: "12px",
        borderStyle: "solid",
        borderWidth: "1px"
    },
    "inline": {
        ...$rootBaseStyles,
        border: "none",
    }
};

export const $contentStyles: React.CSSProperties = {
    backgroundColor: "transparent",
    borderColor: "transparent",
    color: palette.neutral600,
    cursor: "default",
    fontFamily: typeScale.fontInter,
    fontSize: typeScale.sizeBodyS,
    fontWeight: typeScale.weightRegular,
    overflow: "hidden",
    transition: "max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease",
};

export const $headerStyles: React.CSSProperties = {
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "transparent",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    fontFamily: typeScale.fontInter,
    fontSize: typeScale.sizeBodyS,
    fontWeight: typeScale.weightRegular,
    justifyContent: "space-between",
    padding: Spacing.spacing4,
};
