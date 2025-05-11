import { IconVariant } from "../../foundations/icons"
import { palette } from "../../foundations/palette"
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
