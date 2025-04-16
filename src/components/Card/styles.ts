import { Radii, Spacing } from "../../foundations";
import { palette } from "../../foundations/palette";

export const $baseStyles: React.CSSProperties = {
    borderColor: palette.neutral200,
    borderRadius: Radii.lg,
    borderStyle: "solid",
    borderWidth: "2px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    padding: Spacing.spacing6,
    width: "100%",
};
