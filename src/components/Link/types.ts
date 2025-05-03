import React from "react";
import { TextProps } from "../Text";
import { BaseElementWrappers } from "./constants";

export type BaseElementTypes = keyof typeof BaseElementWrappers;

export interface LinkProps extends Omit<TextProps, "baseElement" | "content">{
    /**
     * HTML tag to render
     * @default <span>
     */
    baseElement?: BaseElementTypes;
    /**
     * The color of the text when the link is hovered over.
     * @default "#2563EB"
     */
    hoverColor?: React.CSSProperties["color"];
    /**
     * The URL that the hyperlink points to.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#href
     */
    href?: HTMLAnchorElement["href"];
    /**
     * Callback function called when the text has lost focus
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
     */
    onBlur?: React.FocusEventHandler<HTMLElement>;
    /**
     * Callback function when the text has been clicked
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
     */
    onClick?: React.MouseEventHandler<HTMLElement>;
    /**
     * Callback function when the text has been double clicked; that is,
     * when it's rapidly clicked twice within a very short span of time.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
     */
    onDoubleClick?: React.MouseEventHandler<HTMLElement>;
    /**
     * Callback function when an element has received focus
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event
     */
    onFocus?: React.FocusEventHandler<HTMLElement>
};
