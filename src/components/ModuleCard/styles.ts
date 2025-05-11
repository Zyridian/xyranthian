import { palette } from "../../foundations/palette";
import { Typography } from "../../foundations/typography";
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

export const $statusLabelStyles: React.CSSProperties = {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: "4px",
    ...Typography.label,
};
