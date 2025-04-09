import { SvgCheckmarkCircle } from "./checkmark-circle";
import { SvgExclamationTriangle } from "./exclamation-triangle";
import { SvgInfoCircle } from "./info-circle";
import { SvgXCircle } from "./x-circle";

export const Icons = {
    "checkmark-circle": SvgCheckmarkCircle,
    "exclamation-triangle": SvgExclamationTriangle,
    "info-circle": SvgInfoCircle,
    "x-circle": SvgXCircle,
}

export type IconVariant = keyof typeof Icons;
