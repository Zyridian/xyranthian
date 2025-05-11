"use server"

import { JSX } from "react";
import Icon, { IconSizes } from "../Icon";
import { palette } from "../../foundations/palette";
import { IconVariant } from "../../foundations/icons";
import { ToastProps, ToastVariants } from "./types";
import "../../foundations/global.css"
import styles from "./styles.module.css";

/**
 * Displays brief, ephemeral messages that confirm an action,
 * notify of an error, or alert the user to a status — without disrupting the flow.
 */
function Toast({
    "aria-live": ariaLive = "polite",
    content,
    id,
    role = 'alert',
    variant = "info",
    ...rest
}: ToastProps): JSX.Element {
    return (
        <div
            data-testid={id}
            id={id}
            aria-live={ariaLive}
            role={role}
            className={[
                styles.rootDiv,
                styles[variant]

            ].join(" ")}
            {...rest}
        >
            <span>
                <Icon
                    color={palette.neutral000}
                    size={IconSizes.MD}
                    variant={variantIconMap[variant]}
                />
            </span>
            <span className={styles.content}>
                {content}
            </span>
        </div>
    );
}

export default Toast;

export const variantIconMap: Record<ToastVariants, IconVariant> = {
    "error": "exclamation-circle",
    "info": "info-circle",
    "success": "checkmark-circle"
};
