import { Spacing } from "../../foundations"
import { IconVariant } from "../../foundations/icons"
import { palette } from "../../foundations/palette"
import { typeScale } from "../../foundations/typography"
import { FlashbarVariants } from "./types";

export const $iconVariants: Record<FlashbarVariants, IconVariant> = {
    error: 'x-circle-outline',
    info: 'info-circle-outline',
    success: 'checkmark-circle-outline',
    warning: 'exclamation-triangle-outline',
};

export const $baseStyles: React.CSSProperties = {
    boxSizing: "content-box",
    borderColor: 'transparent',
    color: palette.neutral000,
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    justifyContent: "flex-start",
    fontFamily: typeScale.fontInter,
    fontSize: typeScale.sizeLabel,
    padding: Spacing.spacing3,
    position: "relative",
};

export const $dismissButtonStyles: React.CSSProperties = {
    backgroundColor: "transparent",
    borderColor: "transparent",
    position: "absolute",
    padding: "4px",
    top: "4px",
    right: "4px",
};

export const $headerStyle: React.CSSProperties = {
    fontSize: typeScale.sizeBodyS,
    fontWeight: typeScale.weightSemiBold,
    marginTop: 0,
    marginBottom: 0,
    width: "100%"
};

export const $contentStyle: React.CSSProperties = {
    fontSize: typeScale.sizeLabel,
    fontWeight: typeScale.weightRegular,
    marginTop: 0,
    marginBottom: 0,
};

export const $infoStyles: React.CSSProperties = {
    backgroundColor: palette.primary600,
    borderRadius: "12px",
    borderStyle: "solid",
};

export const $successStyles: React.CSSProperties = {
    backgroundColor: palette.success500,
    borderRadius: "12px",
    borderStyle: "solid",
};

export const $warningStyles: React.CSSProperties = {
    backgroundColor: palette.warning500,
    borderRadius: "12px",
    borderStyle: "solid",
};


export const $errorStyles: React.CSSProperties = {
    backgroundColor: palette.error500,
    borderRadius: "12px",
    borderStyle: "solid",
};

export const $rootVariantStyles: Record<FlashbarVariants, React.CSSProperties> = {
    error: $errorStyles,
    info: $infoStyles,
    success: $successStyles,
    warning: $warningStyles,
};
