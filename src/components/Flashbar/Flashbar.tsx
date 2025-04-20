import { JSX } from "react";
import {
    $baseStyles,
    $contentStyle,
    $dismissButtonStyles,
    $headerStyle,
    $iconVariants,
    $rootVariantStyles,
} from "./styles";
import Icon from "../Icon";
import { palette } from "../../foundations/palette";
import Spacer from "../Spacer/Spacer";
import { FlashbarProps } from "./types";

/**
 * A persistent, full-width banner for global system
 * messages—distinct from inline alerts.
 * */
function Flashbar({
    "aria-live": ariaLive = "assertive",
    content,
    dismissable = false,
    dismissButtonProps,
    header,
    id,
    onDismiss,
    role = 'alert',
    variant = 'info',
    width = "100%",
    ...rest
}: FlashbarProps): JSX.Element {
    const showHeader = Boolean(header) && (
        typeof header === 'string' ? header.trim().length > 0 : true
    );
    const showContent = Boolean(content) && (
        typeof content === 'string' ? content.trim().length > 0 : true
    );

    return (
        <div
            {...rest}
            data-testid={id}
            id={id}
            aria-live={ariaLive}
            role={role}
            style={{
                width,
                ...$baseStyles,
                ...$rootVariantStyles[variant],
                alignItems: !(showHeader && showContent)
                    ? "center"
                    : 'flex-start',
            }}
        >
            {dismissable && (
                <button
                    onClick={onDismiss}
                    style={$dismissButtonStyles}
                    {...dismissButtonProps}
                >
                    <Icon
                        color={palette.neutral050}
                        size="16px"
                        variant="x-mark"
                    />
                </button>
            )}
           <div>
                <Icon
                    color={palette.neutral000}
                    variant={$iconVariants[variant]}
                />
            </div>
            <Spacer size="spacing1">
                {showHeader && <p style={$headerStyle}>{header}</p>}
                {showContent && <p style={$contentStyle}>{content}</p>}
            </Spacer>
        </div>
    );
}

export default Flashbar;
