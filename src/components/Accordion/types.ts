import { SpacingVariants } from "../../foundations/spacing";
import { ExpandableDropdownProps } from "../ExpandableDropdown";

export interface AccordionProps {
    /**
     * The spacing between accordion items.
     * @default spacing5
     */
    gap?: SpacingVariants;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
    /**
     * The accordion items within the Accordion
     */
    items: Array<Omit<ExpandableDropdownProps, "variant">>
}
