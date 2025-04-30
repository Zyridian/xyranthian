import { JSX, useCallback, useId, useState } from "react";
import Spacer from "../Spacer";
import Icon from "../Icon";
import { palette } from "../../foundations/palette";
import { typeScale } from "../../foundations/typography";
import { TextfieldProps } from "./types";
import {
    $constraintTextStyles,
    $inputRowIconColorVariants,
    $inputRowStylesVariants,
    $labelStylesVariants,
    $rootInputRowStyles,
    $rootInputStyles,
    $rootLabelStyles,
} from "./styles";
import { getVisualState } from "./utils";

function Textfield({
    constraintText,
    disabled = false,
    endIcon,
    error = false,
    id,
    label,
    labelIcon,
    maxWidth,
    onBlur,
    onChange,
    onClick,
    onDoubleClick,
    onFocus,
    placeholder,
    readonly = false,
    ref,
    startIcon,
    value,
    variant = "text",
    width,
}: TextfieldProps): JSX.Element {
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);
    const handleMouseLeave= useCallback(() => {
        setIsHover(false);
    }, []);

    const internalId = useId();

    const visualState = getVisualState({disabled, error, isHover, readonly});

    const $inputRowStyles = $inputRowStylesVariants[visualState];
    const $inputRowIconColor = $inputRowIconColorVariants[visualState];
    const $labelStyles = $labelStylesVariants[visualState];

    return (
        <div data-testid={id} id={id} style={{maxWidth, width}}>
            <Spacer size="spacing1">
                <Spacer
                    alignItems="center"
                    direction="row"
                    justifyContent="flex-start"
                    size="spacing2"
                >
                    { labelIcon && (
                        <Icon
                            color={$labelStyles.iconColor}
                            size={typeScale.sizeLabel}
                            variant={labelIcon}
                        />
                    )}
                    <label
                        htmlFor={internalId}
                        style={{
                            color: $labelStyles.color,
                            ...$rootLabelStyles,
                        }}
                    >
                        {label}
                    </label>
                </Spacer>
                <div
                    style={{
                        ...$rootInputRowStyles,
                        ...$inputRowStyles,
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {
                        startIcon && (
                            <Icon
                                color={$inputRowIconColor}
                                size="14px"
                                variant={startIcon}
                            />
                        )
                    }
                    <input
                        aria-disabled={disabled}
                        aria-invalid={error}
                        disabled={disabled}
                        placeholder={placeholder}
                        id={internalId}
                        type={variant}
                        onBlur={onBlur}
                        onClick={onClick}
                        onDoubleClick={onDoubleClick}
                        onFocus={onFocus}
                        onChange={onChange}
                        value={value}
                        readOnly={readonly}
                        style={$rootInputStyles}
                        ref={ref}
                    />
                    {
                        endIcon && (
                            <Icon
                                color={$inputRowIconColor}
                                size="14px"
                                variant={endIcon}
                            />
                        )
                    }
                </div>
                {
                    constraintText && (
                        <span
                            style={{
                                color: error ? palette.error500 : palette.neutral500,
                                ...$constraintTextStyles,
                            }}
                        >
                            {constraintText}
                        </span>
                    )
                }
            </Spacer>
        </div>
    );
}

export default Textfield;
