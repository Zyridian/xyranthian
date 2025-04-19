import React, { JSX } from "react";

/**
 * Supported base element tags for Spacer component
 */
export const baseElementTags = ["div", "span"] as const;

/**
 * Factory util to generate Text wrapper given an HTML tag
 */
export const BaseElementWrappers = Object.fromEntries(
    baseElementTags.map(tag => [
        tag,
        (props: any) => React.createElement(tag, props),
    ])
) as unknown as Record<typeof baseElementTags[number], (props: any) => JSX.Element>;
