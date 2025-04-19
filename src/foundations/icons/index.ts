import { SvgCaretDown } from "./caret-down";
import { SvgCaretLeft } from "./caret-left";
import { SvgCaretRight } from "./caret-right";
import { SvgCaretUp } from "./caret-up";
import { SvgCheckmarkCircle } from "./checkmark-circle";
import { SvgChevronRight } from "./chevron-right";
import { SvgClock } from "./clock";
import { SvgExclamationTriangle } from "./exclamation-triangle";
import { SvgHome } from "./home";
import { SvgInfoCircle } from "./info-circle";
import { SvgLock } from "./lock";
import { SvgUnlock } from "./unlock";
import { SvgXCircle } from "./x-circle";

export const Icons = {
    "caret-down": SvgCaretDown,
    "caret-left": SvgCaretLeft,
    "caret-right": SvgCaretRight,
    "caret-up": SvgCaretUp,
    "checkmark-circle": SvgCheckmarkCircle,
    "chevron-right": SvgChevronRight,
    "clock": SvgClock,
    "exclamation-triangle": SvgExclamationTriangle,
    "home": SvgHome,
    "info-circle": SvgInfoCircle,
    "lock": SvgLock,
    "unlock": SvgUnlock,
    "x-circle": SvgXCircle,
};

export type IconVariant = keyof typeof Icons;
