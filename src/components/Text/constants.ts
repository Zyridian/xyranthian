import React, { JSX } from "react";

/**
 * Supported base element tags for Text component
 */
export const baseElementTags = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "code"] as const;

/**
 * Factory util to generate Text wrapper given an HTML tag
 */
export const BaseElementWrappers = Object.fromEntries(
    baseElementTags.map(tag => [
        tag,
        (props: any) => React.createElement(tag, props),
    ])
) as unknown as Record<typeof baseElementTags[number], (props: any) => JSX.Element>;
