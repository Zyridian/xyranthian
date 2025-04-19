import { SvgCaretDown } from "./caret-down";
import { SvgCaretLeft } from "./caret-left";
import { SvgCaretRight } from "./caret-right";
import { SvgCaretUp } from "./caret-up";
import { SvgCheckmarkCircle } from "./checkmark-circle";
import { SvgChevronRight } from "./chevron-right";
import { SvgExclamationTriangle } from "./exclamation-triangle";
import { SvgHome } from "./home";
import { SvgInfoCircle } from "./info-circle";
import { SvgXCircle } from "./x-circle";

export const Icons = {
    "caret-down": SvgCaretDown,
    "caret-left": SvgCaretLeft,
    "caret-right": SvgCaretRight,
    "caret-up": SvgCaretUp,
    "checkmark-circle": SvgCheckmarkCircle,
    "chevron-right": SvgChevronRight,
    "exclamation-triangle": SvgExclamationTriangle,
    "home": SvgHome,
    "info-circle": SvgInfoCircle,
    "x-circle": SvgXCircle,
};

export type IconVariant = keyof typeof Icons;
