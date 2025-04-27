import { JSX, useCallback, useState } from "react";
import { ButtonProps } from "./types";
import { getButtonStyles } from "./styles";

/**
 * Buttons allow users to initiate actions in the user
 * interface. 
 */
function Button ({
    disabled = false,
    id,
    onClick,
    text,
    variant = 'primary',
    ...rest
}: ButtonProps): JSX.Element {
    const [isHover, setIsHover] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const handleMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);
    const handleMouseLeave= useCallback(() => {
        setIsHover(false);
    }, []);
    const handleMouseDown = useCallback(() => {
        setIsPressed(true);
    }, []);
    const handleMouseUp= useCallback(() => {
        setIsPressed(false);
    }, []);
    const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick?.(event);
    }, [onClick]);

    return (
        <span>
            <button
                data-testid={id}
                id={id}
                disabled={disabled}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                style={getButtonStyles({
                    isDisabled: disabled,
                    isHover,
                    isPressed,
                    variant,
                })}
                type="button"
                {...rest}
            >
                {text}
            </button>
        </span>
    );
}

export default Button;
