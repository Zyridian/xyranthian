import { typeScale } from "../../foundations/typography";
import { palette } from "../../foundations/palette";
import { Radii, Spacing } from "../../foundations";

export const $headerStyles: React.CSSProperties = {
    alignItems: "center",
    borderBottomColor: palette.neutral200,
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: "48px",
};

export const $labelStyles: React.CSSProperties = {
    fontFamily: typeScale.fontInter,
    fontWeight: typeScale.weightSemiBold,
    fontSize: typeScale.sizeBodyS,
    color: palette.neutral900,
    lineHeight: 1.4,
    paddingLeft: Spacing.spacing5,
    paddingRight: Spacing.spacing5,
    paddingTop: Spacing.spacing4,
    paddingBottom: Spacing.spacing4,
}

export const $rootStyles: React.CSSProperties = {
    backgroundColor: palette.neutral000,
    borderColor: palette.neutral200,
    borderRadius: Radii.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
};
