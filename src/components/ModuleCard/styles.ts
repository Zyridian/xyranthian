import { Radii, Spacing } from "../../foundations";
import { palette } from "../../foundations/palette";
import { typeScale, Typography } from "../../foundations/typography";
import { ModuleCardStatusVariants } from "./types";

export const $progressbarKeyframes =
`
@keyframes pulse {
0% { opacity: 1; }
50% { opacity: 0.75; }
100% { opacity: 1; }
}
`;

export const $progressbarStyles: React.CSSProperties = {
    height: "12px",
    left: 0,
    margin: 0,
    position: "absolute",
    top: 0,
    width: "100%",
};

export const $statusColorMap: Record<ModuleCardStatusVariants, string | undefined> = {
    "completed": palette.success500,
    "in-progress": palette.primary600,
};

export const $summaryStyles: React.CSSProperties = {
    color: palette.neutral600,
    fontSize: typeScale.sizeLabel,
    fontWeight: typeScale.weightRegular,
};

export const $statusLabelStyles: React.CSSProperties = {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: "4px",
    ...Typography.label,
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
    fontWeight: typeScale.weightSemiBold,
};

export const $rootWrapperStyle: React.CSSProperties = {
    borderColor: palette.neutral200,
    borderRadius: Radii.lg,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    borderStyle: "solid",
    borderWidth: "1px",
    display: "block",
    padding: Spacing.spacing4,
    overflow: "hidden",
    position: "relative",
};
