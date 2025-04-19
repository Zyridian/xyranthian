import { JSX } from "react";
import { SectionProps } from "./types";
import { BaseElementWrappers } from "./constants";
import { $boxWrapperStyles } from "./styles";

/**
 * A layout primitive to define visually and semantically distinct content
 * sections within a page.
 */
function Section({
    baseElement = "div",
    children,
    id,
    role,
    variant = "inline",
    width = "100%",
}: SectionProps): JSX.Element {
    const Wrapper = BaseElementWrappers[baseElement];

    return (
        <Wrapper
            data-testid={id}
            id={id}
            role={role}
            style={{
                width,
                ...(variant === "box" ? $boxWrapperStyles : {})
            }}
        >
            {children}
        </Wrapper>
    );
}

export default Section;
