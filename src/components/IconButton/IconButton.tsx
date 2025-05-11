"use client"

import { JSX } from "react";
import Icon, { IconSizes } from "../Icon/Icon";
import { palette } from "../../foundations/palette";
import { IconButtonProps } from "./types";
import "../../foundations/global.css";
import styles from "./styles.module.css";

/**
 * A clickable button that contains only an icon,
 * with a consistent size, padding, and hover behavior.
 */
function IconButton ({
    color = palette.neutral700,
    icon,
    id,
    onClick,
    size = IconSizes.SM,
    ...rest
}: IconButtonProps): JSX.Element {
    return (
        <button
            className={styles.button}
            data-testid={id}
            id={id}
            onClick={onClick}
            type="button"
            {...rest}
        >
            <Icon
                color={color}
                size={size}
                variant={icon}
            />
        </button>
    );
}

export default IconButton;
