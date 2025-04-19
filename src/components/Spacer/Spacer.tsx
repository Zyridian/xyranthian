import React, { JSX } from "react";
import { BaseElementWrappers } from "./constants";
import { Spacing } from "../../foundations/spacing";
import { SpacerProps } from "./types";

/**
 * A wrapper component that adds consistent spacing between
 * elements within containers.
 */
function Spacer({
    baseElement = "div",
    children,
    direction = "column",
    id,
    size = "spacing5"
}: SpacerProps): JSX.Element {
    const Wrapper = BaseElementWrappers[baseElement];

    if (!children) {
        return (
            <div
                aria-hidden
                data-testid={id}
                id={id}
                style={{height: Spacing[size]}}
            />
        );
    }

    const $baseStyles: React.CSSProperties = {
        display: "flex",
        flexDirection: direction,
        gap: Spacing[size],
    };

    return (
        <Wrapper
            data-testid={id}
            id={id}
            style={$baseStyles}
        >
            {children}
        </Wrapper>
    );
}

export default Spacer;
