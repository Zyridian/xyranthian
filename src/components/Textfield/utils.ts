import { GetVisualStateInput, TextfieldVisualStates } from "./types";

export function getVisualState({
        disabled,
        error,
        isHover,
        readonly,
}: GetVisualStateInput): TextfieldVisualStates {
    if (disabled) {
        return "disabled";
    }
    if (readonly) {
        return "readonly";
    }

    if (error) {
        return "error";
    }

    if (isHover) {
        return "hover";
    }

    return "default";
}
