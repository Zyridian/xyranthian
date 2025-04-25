import { IconVariant } from "../../foundations/icons";

export interface GetVisualStateInput extends
    Pick<TextfieldProps, "disabled" | "error" | "readonly"> {
    isHover: boolean;
}

export type TextfieldVariants = "text" | "password";
export type TextfieldVisualStates = "default" | "disabled" | "error" | "hover" | "readonly";

export interface TextfieldProps {
    /**
     * Red error text shown below the input field
     * when the Textfield used for Textfield error
     * state.
     * @example "First name is required"
     */
    constraintText?: string;
    /**
     * Whether the TextInput is in disabled state.
     * @default false
     */
    disabled?: boolean;
    /**
     * Icon displayed at the end of the input field.
     */
    endIcon?: IconVariant;
    /**
     * Whether the TextInput is in error state.
     * @default false
     */
    error?: boolean;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
    /**
     * The label associated with the Textfield
     * @example "First name"
     */
    label?: string;
    /**
     * Icon displayed at the start of the label.
     */
    labelIcon?: IconVariant;
    /**
     * The maximum width of the Textfield
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-width
     */
    maxWidth?: React.CSSProperties["maxWidth"];
    /**
     * Callback function called as the user types into the Textfield
     */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /**
     * The text displayed in a form control when the control has no value
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/placeholder
     */
    placeholder?: string;
    /**
     * Whether the TextInput is in readonly state.
     */
    readonly?: boolean;
    /**
     * Icon displayed at the start of the input field.
     */
    startIcon?: IconVariant;
    /**
     * String that contains the current value of the text entered into the
     * text field.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/text
     */
    value?: string;
    /**
     * The variant of the Textfield.
     * @default "text"
     */
    variant?: TextfieldVariants;
    /**
     * The Textfield's width
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/width
     */
    width?: React.CSSProperties["width"];
}
