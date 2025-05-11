export type ButtonSizes = "SM" | "MD" | "LG";

export interface ButtonProps {
    /**
     * Whether the button is disabled. When enabled, it prevents clicks.
     * @default false
     */
    disabled?: boolean;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
    /**
     * The callback function triggered when the button is clicked and is embedded within an HTML
     * form. It can also be a URL of the program that is executed on the server when the form is submitted.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement/formAction
     */
    formAction?: React.ButtonHTMLAttributes<HTMLButtonElement>["formAction"];
    /**
     * Callback function when element is clicked
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /**
     * The size of the button
     * @default "SM"
     */
    size?: ButtonSizes;
    /**
     * The text displayed in the button element
     * @default ''
     */
    text?: React.ReactNode;
    /**
     * The behavior type of the button
     *
     * @default "button"
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement/type
     */
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
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
