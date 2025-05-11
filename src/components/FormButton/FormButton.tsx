import { JSX } from "react";
import "../../foundations/global.css"
import styles from "../Button/styles.module.css";
import { FormButtonProps } from "./types";

/**
 * Buttons allow users to initiate actions in the user
 * interface. 
 */
function FormButton ({
    disabled = false,
    id,
    size = "SM",
    text,
    type = "button",
    variant = 'primary',
    ...rest
}: FormButtonProps): JSX.Element {
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
                type={type}
                {...rest}
            >
                {text}
            </button>
        </span>
    );
}

export default FormButton;
