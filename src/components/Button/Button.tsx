"use client"
import { JSX } from "react";
import { ButtonProps } from "./types";
import "../../foundations/global.css"
import styles from "./styles.module.css";

/**
 * Buttons allow users to initiate actions in the user
 * interface.
 *
 * For server-side button, use `FormButton`
 */
function Button ({
    background,
    backgroundColor,
    borderColor,
    borderWidth,
    children,
    color,
    disabled = false,
    id,
    size = "SM",
    text,
    type = "button",
    variant = 'primary',
    ...rest
}: ButtonProps): JSX.Element {
    return (
        <span>
            <button
                data-testid={id}
                id={id}
                disabled={disabled}
                className={[
                    styles[`size-${size}`],
                    styles.button,
                    styles[`${variant}-button`],
                    disabled ? styles.disabled : ""
                ].join(" ")}
                style={{
                    background,
                    backgroundColor,
                    borderColor,
                    borderWidth,
                    color,
                }}
                type={type}
                {...rest}
            >
                {children ?? text}
            </button>
        </span>
    );
}

export default Button;
