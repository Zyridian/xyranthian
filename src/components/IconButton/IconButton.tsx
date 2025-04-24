import { JSX, useCallback, useState } from "react";
import Icon, { IconSizes } from "../Icon/Icon";
import { palette } from "../../foundations/palette";
import { IconButtonProps } from "./types";
import { $inlineButtonStyles } from "./styles";

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
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);
    const handleMouseLeave= useCallback(() => {
        setIsHover(false);
    }, []);

    return (
        <button
            data-testid={id}
            id={id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{
                ...$inlineButtonStyles,
                opacity: isHover ? 0.85 : 1,
            }}
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
