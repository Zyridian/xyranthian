import { IconVariant } from "../../foundations/icons";
import { BaseElementTypes } from "../Text/types";

export type HeaderSizes = "SM" | "MD" | "LG" | "XL";

export interface HeaderProps {
    /**
     * Optional text alignment. 
     * 
     * `align` only works with block-level or flex-friendly tags like `p`, `div`, `h1`, etc.
     * It will not affect inline elements like span or code.
     * @default "left"
     */
    align?: "left" | "center";
    /**
     * HTML tag to render for the title
     * @default <h1> 
     */
    baseElement?: BaseElementTypes;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
    /**
     * The size of the header component. This
     * affects the title and subtext.
     * @default "LG"
     */
    size?: HeaderSizes;
    /**
     * Optional icon pre-fixed before title
     * @default "undefined"
     */
    startIcon?: IconVariant;
    /**
     * Optional start icon color. Accept any valid CSS color value
     * @default "#111827"
     */
    startIconColor?: string;
    /**
     * Optional supplementary text below the title.
     * @default ""
     * @example "Header subtext"
     */
    subtext?: React.ReactNode;
    /**
     * The header text. Plain text is recommend.
     * @default ""
     * @example "Header title"
     */
    title: React.ReactNode;
}
