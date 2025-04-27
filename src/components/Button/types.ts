
export interface ButtonProps {
    /**
     * Whether the button is disabled. When enabled, it prevents clicks.
     * @default false
     */
    disabled?: boolean;
    /**
     * A unique identifier for an HTML element
     */
    id?: string
    /**
     * Callback function when element is clicked
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /**
     * The text displayed in the button element
     * @default ''
     */
    text?: React.ReactNode;
    /**
     * The variant determines the styling of the button.
     * @default 'primary'
     */
    variant?: ButtonVariants;
}

export interface GetButtonStylesProps {
    /**
     * The variant of the button
     */
    variant: ButtonVariants;
    /**
     * Whether the button has hover state
     */
    isHover: boolean;
    /**
     * Whether the button has pressed state
     */
    isPressed: boolean;
    /**
     * Whether the button is disabled
     */
    isDisabled: boolean;
}

/**
 * Variants supported by Xyranthian Button
 */
export type ButtonVariants =
    | "primary"
    | "secondary"
    | "destructive"
