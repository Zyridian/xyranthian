import { JSX } from "react";
import { IconVariant } from "../../foundations/icons";

export type ModuleCardStatusVariants = "completed" | "in-progress";
export type ModuleCardAvailabilityVariants = "locked" | "unlocked";

export interface ModuleCardCornerSlotProps {
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

export interface ModuleCardProps {
    /**
     * Optional href, if the card should behave as a link.
     */
    href?: string;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
    /**
     * Whether the module is locked.
     */
    locked?: boolean;
    /**
     * The maximum width of the card
     * @default "360px"
     */
    maxWidth?: string;
    /**
     * The minimum height of the card
     * @default "180px"
     */
    minHeight?: string;
    /**
     * Callback function called when the Lesson Card is clicked.
     */
    onClick?: () => void;
    /**
     * Percentage of module completion.
     * @example "0%"
     * @example "95%"
     * 
     * If you do not want progress bar shown, leave undefined.
     */
    progress?: `${number}%`;
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
    statusLabel?: ModuleCardCornerSlotProps & { status: ModuleCardStatusVariants};    
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
    timeLabel?: ModuleCardCornerSlotProps;
    /**
     * Title of the lesson.
     * @example "1.1 What is ChatGPT?"
     */
    title: string;
}

export interface ModuleCardProgressBarProps extends Pick<ModuleCardProps,
    | "locked"
    | "progress"
    >{
    /**
     * Background color of the progress bar
     * @example "gray"
     */
    status?: ModuleCardStatusVariants;
}

export interface ModuleProgressbarColors {
    /**
     * The background color of the progress bar
     */
    backgroundColor?: string;
    /**
     * The color of the progress bar. This is overlaid over
     * the background color.
     */
    fillColor?: string;
}
