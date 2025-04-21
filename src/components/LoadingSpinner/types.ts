import React from "react";

export interface LoadingSpinnerProps extends React.AriaAttributes {
    /**
     * The color of the icon
     * @default "#2563EB"
     */
    color?: string;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;    
    /**
     * The height and width of the icon
     * @default '24px'
     */
    size?: string;
}
