import { JSX, useCallback, useState } from "react";
import { typeScale } from "../../foundations/typography";
import Icon from "../Icon";
import { Spacing } from "../../foundations";
import { palette } from "../../foundations/palette";
import { ExpandableDropdownProps } from "./types";
import { $contentStyles, $headerStyles, $rootVariantStyles } from "./styles";

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
        <div style={$rootVariantStyles[variant]}>
            <button
                aria-expanded={ariaExpanded ?? isOpen}
                data-testid={id}
                id={id}
                style={$headerStyles}
                onClick={handleToggle}
                {...rest}
            >
                <span>{header}</span>
                <span
                    style={{
                        transition: "transform 0.3s ease",
                        transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                >
                    <Icon
                        color={palette.neutral500}
                        size={typeScale.sizeBodyS}
                        variant="chevron-right"
                    />
                </span>
            </button>
            <div
                style={{
                    ...$contentStyles,
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    padding: isOpen ? Spacing.spacing5 : undefined,
                }}
            >
                {content}
            </div>
        </div>
    );
}

export default ExpandableDropdown;

