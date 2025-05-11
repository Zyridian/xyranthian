import React from "react";
import Icon from "../Icon/Icon";
import { AlertProps } from "./types";
import {
    $iconColorStyles,
    $iconVariants,
} from "./styles";
import "../../foundations/global.css"
import styles from "./styles.module.css";
import Spacer from "../Spacer";

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
            className={[
                styles.rootDiv,
                styles[variant]
            ].join(" ")}
            style={{
                width,
                alignItems: !(showHeader && showContent) ? "center" : 'flex-start',
            }}
        >
           <div>
                <Icon color={$iconColorStyles[variant]} variant={$iconVariants[variant]}/>
            </div>
            <Spacer
                direction="column"
                size="spacing2"
            >
                {showHeader && <p className={styles.header}>{header}</p>}
                {showContent && <p className={styles.content}>{content}</p>}
            </Spacer>
        </div>
    );
}

export default React.memo(Alert);
