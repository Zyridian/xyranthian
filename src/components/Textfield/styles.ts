import { palette } from "../../foundations/palette";
import { TextfieldVisualStates } from "./types";

export const $inputStyles = ({
    disabled,
    readonly,
    error,
}: {
    disabled?: boolean;
    readonly?: boolean
    error?: boolean;
}) => {
    if (disabled || readonly) {
        return palette.neutral500;
    }
    if (error) {
        return palette.error500;
    }

    return palette.neutral600;
}
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

export const $labelStylesVariants: Record<
    TextfieldVisualStates,
    (darkmode: boolean) => {color: string; iconColor: string}
> = {
    default: (darkmode: boolean) => darkmode
        ? {
            color: palette.neutral000,
            iconColor: palette.neutral000,
        }
        : {
            color: palette.neutral600,
            iconColor: palette.neutral600,
        },
    disabled: () => ({
        color: palette.neutral500,
        iconColor: palette.neutral300,
    }),
    hover: (darkmode) => darkmode
        ? {
            color: palette.neutral050,
            iconColor: palette.neutral050,
        }
        : {
        color: palette.neutral900,
        iconColor: palette.neutral900,
    }   ,
    error: () => ({
        color: palette.error500,
        iconColor: palette.error500,
    }),
    readonly: () => ({
        color: palette.neutral600,
        iconColor: palette.neutral500,
    })
};

export const $constraintTextStyle: (darkmode: boolean) => string = (darkmode) => {
    return darkmode
        ? palette.neutral200
        : palette.neutral500
}
