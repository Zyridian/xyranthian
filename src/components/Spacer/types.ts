import { SpacingVariants } from "../../foundations/spacing";
import { BaseElementWrappers } from "./constants";

export type BaseElementTypes = keyof typeof BaseElementWrappers;

export interface SpacerProps {
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
    /**
     * The space between items
     * @default "spacing5"
     */
    size?: SpacingVariants;
}
