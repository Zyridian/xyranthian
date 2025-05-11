"use server"

import React from "react";
import { Icons } from "../../foundations/icons/index";
import { palette } from "../../foundations/palette"
import { IconProps } from "./types";

/**
 * Icon sizes supported by Xyranthian
 */
export enum IconSizes {
    SM= "16px",
    MD= "24px",
    LG= "32px",
    XL= "48px",
};

/**
 * Icons are used to visually represent actions, objects, or statuses across the interface.
 */
function Icon ({
    color= palette.neutral900,
    size = IconSizes.MD,
    variant,
}: IconProps) {
    const Icon = Icons[variant];

    return (
        <Icon color={color} size={size} />
    )

}

export default React.memo(Icon);
