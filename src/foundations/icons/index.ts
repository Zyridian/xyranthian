import { SvgCaretDown } from "./caret-down";
import { SvgCaretLeft } from "./caret-left";
import { SvgCaretRight } from "./caret-right";
import { SvgCaretUp } from "./caret-up";
import { SvgCheckmarkCircle } from "./checkmark-circle";
import { SvgCheckmarkCircleOutline } from "./checkmark-circle-outline";
import { SvgChevronRight } from "./chevron-right";
import { SvgClock } from "./clock";
import { SvgExclamationTriangle } from "./exclamation-triangle";
import { SvgExclamationTriangleOutline } from "./exclamation-triangle-outline";
import { SvgHome } from "./home";
import { SvgInfoCircle } from "./info-circle";
import { SvgInfoCircleOutline } from "./info-circle-outline";
import { SvgLock } from "./lock";
import { SvgUnlock } from "./unlock";
import { SvgXCircle } from "./x-circle";
import { SvgXCircleOutline } from "./x-circle-outline";
import { SvgXMark } from "./x-mark";

export const Icons = {
    "caret-down": SvgCaretDown,
    "caret-left": SvgCaretLeft,
    "caret-right": SvgCaretRight,
    "caret-up": SvgCaretUp,
    "checkmark-circle": SvgCheckmarkCircle,
    "checkmark-circle-outline": SvgCheckmarkCircleOutline,
    "chevron-right": SvgChevronRight,
    "clock": SvgClock,
    "exclamation-triangle": SvgExclamationTriangle,
    "exclamation-triangle-outline": SvgExclamationTriangleOutline,
    "home": SvgHome,
    "info-circle": SvgInfoCircle,
    "info-circle-outline": SvgInfoCircleOutline,
    "lock": SvgLock,
    "unlock": SvgUnlock,
    "x-circle": SvgXCircle,
    "x-circle-outline": SvgXCircleOutline,
    "x-mark": SvgXMark,
};

export type IconVariant = keyof typeof Icons;
