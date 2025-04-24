import React from "react";
import { IconVariant } from "../../foundations/icons";
import { IconSizes } from "../Icon/Icon";

export interface IconButtonProps extends React.AriaAttributes {
    /**
     * The icon color
     * @default "#1C1C1C"
     */
    color?: React.CSSProperties["color"];
    /**
     * The icon in the button
     */
    icon: IconVariant;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;    
    /**
     * Callback function called when Icon Button is clicked.
     */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /**
     * The size of the icon
     * @default "16px"
     */
    size: string | IconSizes;
}
