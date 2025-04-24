import { SvgArrowUpRight } from "./arrow-up-right";
import { SvgCaretDown } from "./caret-down";
import { SvgCaretLeft } from "./caret-left";
import { SvgCaretRight } from "./caret-right";
import { SvgCaretUp } from "./caret-up";
import { SvgCheckmarkCircle } from "./checkmark-circle";
import { SvgCheckmarkCircleOutline } from "./checkmark-circle-outline";
import { SvgChevronRight } from "./chevron-right";
import { SvgClipboard } from "./copy";
import { SvgClock } from "./clock";
import { SvgExclamationCircle } from "./exclamation-circle";
import { SvgExclamationTriangle } from "./exclamation-triangle";
import { SvgExclamationTriangleOutline } from "./exclamation-triangle-outline";
import { SvgHome } from "./home";
import { SvgInfoCircle } from "./info-circle";
import { SvgInfoCircleOutline } from "./info-circle-outline";
import { SvgLock } from "./lock";
import { SvgTarget } from "./target";
import { SvgUnlock } from "./unlock";
import { SvgXCircle } from "./x-circle";
import { SvgXCircleOutline } from "./x-circle-outline";
import { SvgXMark } from "./x-mark";

export const Icons = {
    "arrow-up-right": SvgArrowUpRight,
    "caret-down": SvgCaretDown,
    "caret-left": SvgCaretLeft,
    "caret-right": SvgCaretRight,
    "caret-up": SvgCaretUp,
    "checkmark-circle": SvgCheckmarkCircle,
    "checkmark-circle-outline": SvgCheckmarkCircleOutline,
    "chevron-right": SvgChevronRight,
    "copy": SvgClipboard,
    "clock": SvgClock,
    "exclamation-circle": SvgExclamationCircle,
    "exclamation-triangle": SvgExclamationTriangle,
    "exclamation-triangle-outline": SvgExclamationTriangleOutline,
    "home": SvgHome,
    "info-circle": SvgInfoCircle,
    "info-circle-outline": SvgInfoCircleOutline,
    "lock": SvgLock,
    "target": SvgTarget,
    "unlock": SvgUnlock,
    "x-circle": SvgXCircle,
    "x-circle-outline": SvgXCircleOutline,
    "x-mark": SvgXMark,
};

export type IconVariant = keyof typeof Icons;
