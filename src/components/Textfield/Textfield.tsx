"use client"

import { JSX, useCallback, useId, useState } from "react";
import Spacer from "../Spacer";
import Icon from "../Icon";
import { palette } from "../../foundations/palette";
import { typeScale } from "../../foundations/typography";
import { TextfieldProps } from "./types";
import {
    $inputRowIconColorVariants,
    $inputRowStylesVariants,
    $labelStylesVariants,
    $rootInputStyles,
} from "./styles";
import { getVisualState } from "./utils";
import "../../foundations/global.css"
import styles from "./styles.module.css";

function Textfield({
    constraintText,
    disabled = false,
    endIcon,
    error = false,
    id,
    label,
    labelIcon,
    maxWidth,
    name,
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

    const internalId = id ?? useId();

    const visualState = getVisualState({disabled, error, isHover, readonly});

    const $inputRowStyles = $inputRowStylesVariants[visualState];
    const $inputRowIconColor = $inputRowIconColorVariants[visualState];
    const $labelStyles = $labelStylesVariants[visualState];

    return (
        <div style={{maxWidth, width}}>
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
                        className={styles.label}
                        style={{
                            color: $labelStyles.color,
                        }}
                    >
                        {label}
                    </label>
                </Spacer>
                <div
                    className={styles.inputRow}
                    style={{
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
                        data-testid={internalId}
                        disabled={disabled}
                        placeholder={placeholder}
                        id={internalId}
                        type={variant}
                        name={name}
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
                            className={styles.constraintText}
                            style={{
                                color: error ? palette.error500 : palette.neutral500,
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
