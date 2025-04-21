import { BaseElementWrappers } from "./constants";

export type BaseElementTypes = keyof typeof BaseElementWrappers;

export type SectionVariants = "box" | "inline";

export interface SectionProps {
    /**
     * HTML tag to render
     * @default <div>
     */
    baseElement?: BaseElementTypes;
    /**
     * Content displayed with the section
     */
    children?: Array<React.ReactNode> | React.ReactNode;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
    /**
     * Communicates the purpose of a component for
     * assistive technologies.
     * @default "alert"
     */
    role?: React.AriaRole;    /**
     * The variant of the section.
     * @default "inline"
     */
    variant?:  SectionVariants;
    /**
     * The width of the Section
     * @default "100%"
     */
    width?: React.CSSProperties["width"];
}
