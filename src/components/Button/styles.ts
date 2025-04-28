import React from "react";
import { typeScale } from "../../foundations/typography";
import { Radii, Spacing } from "../../foundations";
import { palette } from "../../foundations/palette";
import { GetButtonStylesProps, ButtonVariants } from "./types";

const $baseButtonStyles: React.CSSProperties = {
    fontFamily: typeScale.fontInter,
    fontWeight: typeScale.weightMedium,
    fontSize: typeScale.sizeLabel,
    padding: `${Spacing.spacing2} ${Spacing.spacing4}`
};

const $destructiveButtonStyle: React.CSSProperties = {
    borderColor: 'transparent',
    backgroundColor: palette.red600,
    borderRadius: Radii.md,
    color: palette.neutral000,
    cursor: "pointer",
    ...$baseButtonStyles,
};

const $destructiveButtonHoverStyle: React.CSSProperties = {
    backgroundColor: palette.red700,
};

const $destructiveButtonPressedStyle: React.CSSProperties = {
    backgroundColor: palette.red800,
};

const $primaryButtonStyles: React.CSSProperties = {
    backgroundColor: palette.primary600,
    borderColor: "transparent",
    borderRadius: Radii.md,
    color: palette.neutral000,
    cursor: "pointer",
    ...$baseButtonStyles,
}

const $primaryButtonHoverStyles: React.CSSProperties = {
    backgroundColor: palette.primary700
}

const $primaryButtonPressedStyles: React.CSSProperties = {
    backgroundColor: palette.primary800
}

const $secondaryButtonStyles: React.CSSProperties = {
    backgroundColor: palette.neutral000,
    borderColor: palette.neutral300,
    borderRadius: Radii.md,
    borderWidth: "1px",
    color: palette.neutral900,
    cursor: "pointer",
    ...$baseButtonStyles,
};

const $secondaryButtonHoverStyle: React.CSSProperties = {
    backgroundColor: palette.neutral050,
}

const $secondaryButtonPressedStyle: React.CSSProperties = {
    backgroundColor: palette.neutral100,
}

const $disabledStyles: React.CSSProperties = {
    backgroundColor:  palette.neutral200,
    color: palette.neutral400,
}

const BUTTON_STYLES_MAP: Record<ButtonVariants, (props: Omit<GetButtonStylesProps, 'variant'>) => React.CSSProperties> = {
    'primary': ({isDisabled, isHover, isPressed}) => ({
        ...$primaryButtonStyles,
        ...(isHover ? $primaryButtonHoverStyles : {}),
        ...(isPressed ? $primaryButtonPressedStyles : {}),
        ...(isDisabled ? $disabledStyles : {})
    }),
    'secondary': ({isDisabled, isHover, isPressed}) => ({
        ...$secondaryButtonStyles,
        ...(isHover ? $secondaryButtonHoverStyle : {}),
        ...(isPressed ? $secondaryButtonPressedStyle : {}),
        ...(isDisabled ? $disabledStyles : {})
    }),
    'destructive': ({isDisabled, isHover, isPressed}) => ({
        ...$destructiveButtonStyle,
        ...(isHover ? $destructiveButtonHoverStyle : {}),
        ...(isPressed ? $destructiveButtonPressedStyle : {}),
        ...(isDisabled ? $disabledStyles : {})
    }),
}

/**
 * Fetches styling for button
 */
export function getButtonStyles ({
    variant,
    ...rest
}: GetButtonStylesProps) {
   return BUTTON_STYLES_MAP[variant](rest)
}
