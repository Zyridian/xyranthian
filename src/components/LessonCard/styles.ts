import { Radii, Spacing } from "../../foundations";
import { palette } from "../../foundations/palette";
import { typeScale, Typography } from "../../foundations/typography";
import { LessonCardStatusVariants } from "./types";

export const $footerStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
};

export const $rootCardStyles: React.CSSProperties = {
    backgroundColor: palette.neutral000,
    borderColor: palette.neutral200,
    borderRadius: Radii.lg,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    borderStyle: "solid",
    borderWidth: "1px",
    display: "block",
    padding: Spacing.spacing5,
    width: "100%",
};

export const $statusColorMap: Record<LessonCardStatusVariants, string | undefined> = {
    "completed": palette.success500,
    "in-progress": palette.primary600,
    "locked": palette.neutral500,
    "not-started": palette.neutral500,
};

export const $statusLabelStyles: React.CSSProperties = {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: "4px",
    ...Typography.label,
};

export const $summaryStyles: React.CSSProperties = {
    fontSize: typeScale.sizeLabel,
    margin: 0,
};

export const $timeLabelStyles: React.CSSProperties = {
    alignItems: "center",
    color: palette.neutral500,
    display: "flex",
    flexDirection: "row",
    fontSize: typeScale.sizeLabel,
    gap: "5px"
};

export const $titleStyles: React.CSSProperties = {
    fontSize: typeScale.sizeBodyS,
    fontWeight: typeScale.weightBold,
};