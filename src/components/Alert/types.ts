import React from "react";

/**
 * Variants supported by Xyranthian Alerts
 */
export type AlertVariants = "info" | "success" | "warning" | "error"

export interface AlertProps extends React.AriaAttributes {
    /**
     * Description text in the alert
     * @default ""
     */
    content?: React.ReactNode;
    /**
     * Bold header text in the alert
     * @default ""
     */
    header?: React.ReactNode;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
    /**
     * Communicates the purpose of a component for
     * assistive technologies.
     * @default "alert"
     */
    role?: React.AriaRole;
    /**
     * The variant of the alert
     * @default "info"
     */
    variant?: AlertVariants;
    /**
     * The width of the alert
     * @default "100%"
     */
    width?: string | number;
}
