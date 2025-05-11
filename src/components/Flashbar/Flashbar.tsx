"use client"

import { JSX } from "react";
import { $iconVariants } from "./styles";
import Icon from "../Icon";
import { palette } from "../../foundations/palette";
import Spacer from "../Spacer/Spacer";
import { FlashbarProps } from "./types";
import "../../foundations/global.css";
import styles from "./styles.module.css";
import IconButton from "../IconButton";

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
            className={[
                styles.rootDiv,
                styles[variant]
            ].join(" ")}
            data-testid={id}
            id={id}
            aria-live={ariaLive}
            role={role}
            style={{
                width,
                alignItems: !(showHeader && showContent)
                    ? "center"
                    : 'flex-start',
            }}
        >
           <div>
                <Icon
                    color={palette.neutral000}
                    variant={$iconVariants[variant]}
                />
            </div>
            <Spacer size="spacing1">
                {showHeader && <p className={styles.header}>{header}</p>}
                {showContent && <p className={styles.content}>{content}</p>}
            </Spacer>
            {dismissable && (
                <IconButton
                    color={palette.neutral050}
                    icon="x-mark"
                    onClick={onDismiss}
                    size="16px"
                />
            )}
        </div>
    );
}

export default Flashbar;
