import React from "react";

export interface InlineCodeProps extends React.AriaAttributes {
    /**
     * The code statement(s)
     * @example "const sum = a + b;"
     */
    children: React.ReactNode;
    /**
     * The color of the text.
     * @default "#0E0E0E"
     */
    color?: string;
    /**
     * The background color of the code
     * @default "#F3F4F6"
     */
    backgroundColor?: string;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
}