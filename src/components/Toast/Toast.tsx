import { JSX } from "react";
import Icon, { IconSizes } from "../Icon";
import { palette } from "../../foundations/palette";
import { IconVariant } from "../../foundations/icons";
import { $contentStyles, $rootStyles, $variantStyles } from "./styles";
import { ToastProps, ToastVariants } from "./types";

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
            style={{
                ...$rootStyles,
                backgroundColor: $variantStyles[variant],
            }}
            {...rest}
        >
            <span>
                <Icon
                    color={palette.neutral000}
                    size={IconSizes.MD}
                    variant={variantIconMap[variant]}
                />
            </span>
            <span style={$contentStyles}>
                {content}
            </span>

        </div>
    )
}

export default Toast;

export const variantIconMap: Record<ToastVariants, IconVariant> = {
    "error": "exclamation-circle",
    "info": "info-circle",
    "success": "checkmark-circle"
};
