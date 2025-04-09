import React from "react";
import Icon from "../Icon/Icon";
import { AlertProps } from "./types";
import {
    $baseStyles,
    $contentStyle,
    $headerStyle,
    $iconColorStyles,
    $iconVariants,
    $rootVariantStyles,
} from "./styles";

/**
 * Alerts are used to display contextual feedback messages—such as
 * errors, warnings, or confirmations—to guide or inform users within the UI.
 */
function Alert({
    "aria-live": ariaLive = "assertive",
    content,
    header,
    id,
    role = 'alert',
    variant = 'info',
    width = "100%",
    ...rest
}: AlertProps) {
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
                alignItems: !(showHeader && showContent) ? "center" : 'flex-start',
            }}
        >
           <div><Icon color={$iconColorStyles[variant]} variant={$iconVariants[variant]}/></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: "8px"}}>
                {showHeader && <p style={$headerStyle}>{header}</p>}
                {showContent && <p style={$contentStyle}>{content}</p>}
            </div>
        </div>
    );
}

export default React.memo(Alert);
