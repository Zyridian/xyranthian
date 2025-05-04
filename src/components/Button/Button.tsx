import { JSX, useCallback, useState } from "react";
import { ButtonProps, ButtonSizes } from "./types";
import { getButtonStyles } from "./styles";
import { typeScale } from "../../foundations";

/**
 * Buttons allow users to initiate actions in the user
 * interface. 
 */
function Button ({
    disabled = false,
    id,
    onClick,
    size = "SM",
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
                style={{
                    ...getButtonStyles({
                        isDisabled: disabled,
                        isHover,
                        isPressed,
                        variant,
                    }),
                    fontSize: buttonSizesMap[size]
                }}
                type="button"
                {...rest}
            >
                {text}
            </button>
        </span>
    );
}

export default Button;

const buttonSizesMap: Record<ButtonSizes, string> = {
    SM: typeScale.sizeLabel,
    MD: typeScale.sizeBodyS,
    LG: typeScale.sizeBodyL,
};
