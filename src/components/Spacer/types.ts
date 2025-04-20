import { SpacingVariants } from "../../foundations/spacing";
import { BaseElementWrappers } from "./constants";

export type BaseElementTypes = keyof typeof BaseElementWrappers;

export interface SpacerProps {
    /**
     * Controls the alignment of items on the cross axis
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
     */
    alignItems?:  "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start";
    /**
     * HTML tag to render
     * @default <div>
     * If Spacer has no children, Spacer uses `div`
     */
    baseElement?: BaseElementTypes;
    /**
     * Content displayed within the Spacer
     */
    children?: Array<React.ReactNode> | React.ReactNode;
    /**
     * The direction determines how children items are placed in the container.
     * The default "column" assumes content flows vertically.
     * @default "column"
     */
    direction?: "row" | "column" | "row-reverse" | "column-reverse",
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
    /**
     * Controls how the browser distributes space between and around content items along the main axis
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
     */
    justifyContent?: "space-around" | "space-between" | "space-evenly" | "stretch" |  "center" | "end" | "flex-end" | "flex-start" | "start";
    /**
    /**
     * The space between items
     * @default "spacing5"
     */
    size?: SpacingVariants;
}
