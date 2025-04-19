import { JSX } from "react";
import { IconVariant } from "../../foundations/icons";

export type LessonCardVariants = "dashboard" | "module";
export type LessonCardStatusVariants = "locked" | "completed" | "in-progress" | "not-started";

export interface LessonCardCornerSlotProps {
    /**
     * Icon to the left of the label
     * @example "clock"
     */
    icon?: IconVariant | JSX.Element
    /**
     * The text displayed to the right of the icon.
     * @example "15 mins"
     */
    content?: string | JSX.Element;
}

export interface LessonCardProps {
    /**
     * Optional flag to render the card in compact mode (for smaller
     * screen or condensed UIs).
     * @default false
     */
    compact?: boolean;
    /**
     * Optional href, if the card should behave as a link.
     */
    href?: string;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
    /**
     * Callback function called when the Lesson Card is clicked.
     */
    onClick?: () => void;
    /**
     * Optional label for status of the lesson
     * @example
     * ```typescript
     * {
     *  icon: "locked",
     *  content: "Locked",
     *  status: "locked"
     * }
     * ```
     * By default, icon and text content are provided by the component. Consumer only
     * is required to provide `status`. `icon` and `content` properties are made available
     * to allow consumer to override default values.
     * 
     */
    statusLabel?: LessonCardCornerSlotProps & { status: LessonCardStatusVariants};
    /**
     * Optional short description of the lesson.
     * @example "Craft effective prompts that yield better ChatGPT responses."
     */
    summary?: string;
    /**
     * Optional label for estimated lesson time
     * @example
     * ```typescript
     * {
     *  icon: "clock",
     *  content: "15 mins",
     * }
     * ```
     * 
     * By default, the Icon is "clock"
     */
    timeLabel?: LessonCardCornerSlotProps;
    /**
     * Title of the lesson.
     * @example "1.1 What is ChatGPT?"
     */
    title: string;
    /**
     * The variant of the Lesson Card
     * @default "dashboard"
     */
    variant?: LessonCardVariants;
}
