"use client"

import { JSX, useCallback, useState } from "react";
import { typeScale } from "../../foundations/typography";
import Icon from "../Icon";
import { palette } from "../../foundations/palette";
import { ExpandableDropdownProps } from "./types";
import "../../foundations/global.css";
import styles from "./styles.module.css";

/**
 * ExpandableDropdown reveals or hides secondary content inline with smooth transitions,\
 * supporting inline and block variants for flexible layout embedding.
 */
function ExpandableDropdown({
    "aria-expanded": ariaExpanded,
    content,
    expanded = false,
    header,
    id,
    variant = "inline",
    ...rest
}: ExpandableDropdownProps): JSX.Element {
    const [isOpen, setIsOpen] = useState(expanded);

    const handleToggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, [])

    return (
        <div
            className={[
                styles.rootDiv,
                styles[variant]
            ].join(" ")}
        >
            <button
                aria-expanded={ariaExpanded ?? isOpen}
                className={styles.header}
                data-testid={id}
                id={id}
                onClick={handleToggle}
                {...rest}
            >
                <span>{header}</span>
                <span
                    className={[
                        styles.icon,
                        styles[`icon-isOpen-${isOpen}`]
                    ].join(" ")}
                >
                    <Icon
                        color={palette.neutral500}
                        size={typeScale.sizeBodyS}
                        variant="chevron-right"
                    />
                </span>
            </button>
            <div
                className={[
                    styles.content,
                    styles[`content-isOpen-${isOpen}`]
                ].join(" ")}
            >
                {content}
            </div>
        </div>
    );
}

export default ExpandableDropdown;
