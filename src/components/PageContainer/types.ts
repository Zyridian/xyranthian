import { BaseElementWrappers } from "./constants";

export type BaseElementTypes = keyof typeof BaseElementWrappers;

export interface PageContainerProps {
    /**
     * HTML tag to render
     * @default <div>
     */
    baseElement?: BaseElementTypes;
    /**
     * Content displayed within the page
     */
    children?: Array<React.ReactNode> | React.ReactNode;
    /**
     * Sets the horizontal padding (left and right)
     * @default "24px"
     */
    horizontalPadding?: string;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
    /**
     * The maximum width of the page
     * @default "960px"
     */
    maxWidth?: React.CSSProperties["maxWidth"];
}
