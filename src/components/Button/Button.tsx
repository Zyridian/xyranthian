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
    fullWidth,
    id,
    size = "SM",
    text,
    type = "button",
    variant = 'primary',
    ...rest
}: ButtonProps): JSX.Element {
    const width = fullWidth ? "100%" : undefined;
    const hasBackground = Boolean(background) || Boolean(backgroundColor);
    const containerProps = hasBackground
        ? {
            className: styles.container,
            style: {
                background,
                backgroundColor,
                width,
            }
        }
        : { width };
    return (
        <div {...containerProps}>
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
                    ...(
                        hasBackground
                            ? {
                                backgroundColor: 'transparent',
                            }
                            : {}
                    ),
                    borderColor,
                    borderWidth,
                    color,
                }}
                type={type}
                {...rest}
            >
                {children ?? text}
            </button>
        </div>
    );
}

export default Button;
