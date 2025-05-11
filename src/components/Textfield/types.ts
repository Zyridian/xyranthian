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
     * A name for the input control. This name is submitted along with the control's value
     * when the form data is submitted.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#name
     */
    name?: React.InputHTMLAttributes<HTMLInputElement>["name"]
    /**
     * Callback function called when the input has lost focus
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
     */
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    /**
     * Callback function called as the user types into the Textfield
     */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /**
     * Callback function when the input has been clicked
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
     */
    onClick?: React.MouseEventHandler<HTMLInputElement>;
    /**
     * Callback function when the input has been double clicked; that is,
     * when it's rapidly clicked twice within a very short span of time.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
     */
    onDoubleClick?: React.MouseEventHandler<HTMLInputElement>;
    /**
     * Callback function when an element has received focus
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event
     */
    onFocus?: React.FocusEventHandler<HTMLInputElement>
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
     * Allows getting a ref to the component instance. Once the component unmounts, React will set
     * ref.current to null (or call the ref with null if you passed a callback ref).
     */
    ref?: React.Ref<HTMLInputElement>
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
