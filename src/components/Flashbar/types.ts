import React from "react";

export type FlashbarVariants = "error" | "info" | "success" | "warning";
export interface FlashbarDismissButtonProps extends React.Attributes {};

export interface FlashbarProps extends React.AriaAttributes {
    /**
     * Description text in the flashbar
     * @default ""
     */
    content?: React.ReactNode;
    /**
     * Whether the flashbar can be dismissed.
     * @default false
     */
    dismissable?: boolean;
    /**
     * Props to pass to the dismiss button.
     * Only accessiiblity attributes (aria-*) are supported.
     */
    dismissButtonProps?: FlashbarDismissButtonProps
    /**
     * Bold header text in the flashbar
     * @default ""
     */
    header?: React.ReactNode;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
    /**
     * Callback function called when dismiss button is clicked.
     */
    onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
    /**
     * Communicates the purpose of a component for
     * assistive technologies.
     * @default "alert"
     */
    role?: React.AriaRole;
    /**
     * The variant of the flashbar
     * @default "info"
     */
    variant?: FlashbarVariants;
    /**
     * The width of the flashbar
     * @default "100%"
     */
    width?: string | number;
}
