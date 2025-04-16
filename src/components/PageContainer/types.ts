import { BaseElementWrappers } from "./constants";

export type BaseElementTypes = keyof typeof BaseElementWrappers;

export interface PageContainerProps {
    /**
     * HTML tag to render
     * @default <div>
     */
    baseElement?: BaseElementTypes;
    /**
     * 
     */
    children?: React.ReactNode;
    /**
     * Sets the horizontal padding (left and right)
     * @default "24px"
     */
    horizontalPadding?: string;
    /**
     * The maximum width of the page
     * @default "960px"
     */
    maxWidth?: string;
}
