import { Typography } from "../../foundations";
import { BaseElementWrappers } from "./constants";

export type BaseElementTypes = keyof typeof BaseElementWrappers;

export type TextVariants = keyof typeof Typography;

export interface TextProps {
    /**
     * Optional text alignment. 
     * 
     * `align` only works with block-level or flex-friendly tags like `p`, `div`, `h1`, etc.
     * It will not affect inline elements like span or code.
     * @default "left"
     */
    align?: "left" | "center" | "right" | "justify";
    /**
     * HTML tag to render
     * @default <p>
     */
    baseElement?: BaseElementTypes;
    /**
     * The text rendered to the screen.
     * @default ""
     */
    children?: React.ReactNode;
    /**
     * Optional text color
     * @default "#1C1C1C"
     */
    color?: string;
    /**
     * The text rendered to the screen.
     * If `children` are defined, the children will have priority.
     * @default ""
     */
    content?: React.ReactNode;
    /**
     * The variant of the Text
     * @default "bodyS"
     */
    variant?: TextVariants;
}
