import React from "react";

export type ExpandableDropdownVariants = "inline" | "block";

export interface ExpandableDropdownProps extends React.AriaAttributes {
    /**
     * The content hidden by the dropdown
     */
    content?: Array<React.ReactNode> | React.ReactNode;
    /**
     * Whether the expandable dropdown is open
     * @default false
     */
    expanded?: boolean;
    /**
     * Header text in the clickable header row
     */
    header?: React.ReactNode;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;    
    /**
     * The variant of Expandable Dropdown
     * @default "inline"
     */
    variant?: ExpandableDropdownVariants;
}
