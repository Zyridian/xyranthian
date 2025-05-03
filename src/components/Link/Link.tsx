import { useCallback, useState } from "react";
import { Typography } from "../../foundations";
import { palette } from "../../foundations/palette";
import { BaseElementWrappers } from "./constants";
import { LinkProps } from "./types";

/**
 * Links are used to links
 */
function Link({
    align = "left",
    baseElement= "span",
    color = palette.neutral100,
    hoverColor = palette.primary600,
    children,
    cursor = "pointer",
    fontSize,
    href,
    id,
    onBlur,
    onClick,
    onDoubleClick,
    onFocus,
    variant = "bodyS",
}: LinkProps) {
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);
    const handleMouseLeave= useCallback(() => {
        setIsHover(false);
    }, []);

    const Wrapper = BaseElementWrappers[baseElement];
    const styles = Typography[variant];

    return (
        <Wrapper
            data-testid={id}
            id={id}
            href={href}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onBlur={onBlur}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
            onFocus={onFocus}
            role="link"
            style={{
                color: isHover ? hoverColor : color,
                textAlign: align,
                ...styles,
                fontSize: fontSize ?? styles.fontSize,
                margin: 0,
                cursor,
                textDecoration: "none",
            }}
            tabIndex={0}
        >
            {children}
        </Wrapper>
    );
}

export default Link;
