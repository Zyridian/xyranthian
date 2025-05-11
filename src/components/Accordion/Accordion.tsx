"use server"

import { JSX } from "react";
import ExpandableDropdown from "../ExpandableDropdown";
import Spacer from "../Spacer";
import { AccordionProps } from "./types";

/**
 * Accordion organizes multiple expandable sections into a stacked layout,
 * allowing users to reveal or hide content progressively.
 */
function Accordion({
    gap = "spacing5",
    id,
    items = [],
}: AccordionProps): JSX.Element {
    return (
        <Spacer id={id} size={gap}>
            {items.map((dropdownProps, index) => {
                return (
                    <ExpandableDropdown
                        key={dropdownProps.id ?? index}
                        {...dropdownProps}
                    />
                )
            })}
        </Spacer>
    );
}

export default Accordion;
