import { Radii, Spacing } from "../../foundations";
import { palette } from "../../foundations/palette";
import { typeScale } from "../../foundations/typography";
import { TextfieldVisualStates } from "./types";

export const $constraintTextStyles: React.CSSProperties = {
    fontSize: typeScale.sizeLabel,
    marginTop: 1.5,
    maxWidth: "100%",
    wordBreak: "break-word",
};

export const $inputRowIconColorVariants: Record<TextfieldVisualStates, string> = {
    default: palette.neutral500,
    disabled: palette.neutral300,
    error: palette.error500,
    hover: palette.neutral600,
    readonly: palette.neutral500,
};

export const $inputRowStylesVariants: Record<TextfieldVisualStates, React.CSSProperties> = {
    default: {},
    disabled: {
        backgroundColor: palette.neutral050,
        borderColor: palette.neutral200,
        boxShadow: "none",
        color: palette.neutral400,
        pointerEvents: "none",
        cursor: "not-allowed",
    },
    error: {
        backgroundColor: palette.neutral000,
        borderColor: palette.error500,
        color: palette.neutral900,
    },
    hover: {
        borderColor: palette.neutral400,
    },
    readonly: {
        backgroundColor: palette.neutral050,
        borderColor: palette.neutral200,
        color: 	palette.neutral700,
        cursor: "default",
        pointerEvents: "auto",
    },
}

export const $labelStylesVariants: Record<TextfieldVisualStates, any> = {
    default: {
        color: palette.neutral700,
        iconColor: palette.neutral500,
    },
    disabled: {
        color: palette.neutral500,
        iconColor: palette.neutral300,
    },
    hover: {
        iconColor: palette.neutral500,
    },
    error: {
        color: palette.error500,
        iconColor: palette.error500,
    },
    readonly: {
        color: palette.neutral600,
        iconColor: palette.neutral500,
    }
};

export const $rootLabelStyles: React.CSSProperties = {
    cursor: "default",
    fontFamily: typeScale.fontInter,
    fontSize: typeScale.sizeLabel,
    fontWeight: typeScale.weightMedium,
    lineHeight: 1.5,
    marginTop: 0,
    marginBottom: Spacing.spacing1,
};

export const $rootInputRowStyles: React.CSSProperties = {
    alignItems: "center",
    backgroundColor: palette.neutral000,
    borderColor: palette.neutral300,
    borderRadius: Radii.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: "none",
    color: palette.neutral900,
    cursor: "text",
    display: "flex",
    columnGap: Spacing.spacing2,
    height: "40px",
    fontSize: typeScale.sizeBodyS,
    paddingLeft: Spacing.spacing4,
    paddingRight: Spacing.spacing4,
};

export const $rootInputStyles: React.CSSProperties = {
    backgroundColor: "transparent",
    border: "none",
    fontFamily: typeScale.fontInter,
    fontSize: typeScale.sizeBodyS,
    fontWeight: typeScale.weightRegular,
    outline: "none",
    width: "100%",
};