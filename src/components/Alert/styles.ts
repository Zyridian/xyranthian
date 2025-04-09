import { Spacing } from "../../foundations"
import { IconVariant } from "../../foundations/icons"
import { palette } from "../../foundations/palette"
import { typeScale } from "../../foundations/typography"
import { AlertVariants } from "./types"

export const $iconColorStyles: Record<AlertVariants, string> = {
    error: palette.error500,
    info: palette.primary600,
    success: palette.success500,
    warning: palette.warning500,
}

export const $iconVariants: Record<AlertVariants, IconVariant> = {
    error: 'x-circle',
    info: 'info-circle',
    success: 'checkmark-circle',
    warning: 'exclamation-triangle',
}

export const $baseStyles: React.CSSProperties = {
    boxSizing: "content-box",
    borderColor: 'transparent',
    color: palette.neutral700,
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    justifyContent: "flex-start",
    fontFamily: typeScale.fontInter,
    fontSize: typeScale.sizeLabel,
    padding: Spacing.spacing4,
}

export const $headerStyle: React.CSSProperties = {
    fontSize: typeScale.sizeBodyS,
    fontWeight: typeScale.weightSemiBold,
    marginTop: 0,
    marginBottom: 0,
}

export const $contentStyle: React.CSSProperties = {
    fontSize: typeScale.sizeLabel,
    fontWeight: typeScale.weightRegular,
    marginTop: 0,
    marginBottom: 0,
}

export const $infoStyles: React.CSSProperties = {
    backgroundColor: palette.primary500,
    borderColor: palette.primary600,
    borderWidth: "1px",
    borderRadius: "12px",
    borderStyle: "solid",
};

export const $successStyles: React.CSSProperties = {
    backgroundColor: palette.success400,
    borderColor: palette.success500,
    borderWidth: "1px",
    borderRadius: "12px",
    borderStyle: "solid",
};

export const $warningStyles: React.CSSProperties = {
    backgroundColor: palette.warning400,
    borderColor: palette.warning500,
    borderWidth: "1px",
    borderRadius: "12px",
    borderStyle: "solid",
};


export const $errorStyles: React.CSSProperties = {
    backgroundColor: palette.error400,
    borderColor: palette.error500,
    borderWidth: "1px",
    borderRadius: "12px",
    borderStyle: "solid",
};

export const $rootVariantStyles: Record<AlertVariants, React.CSSProperties> = {
    error: $errorStyles,
    info: $infoStyles,
    success: $successStyles,
    warning: $warningStyles,
}
