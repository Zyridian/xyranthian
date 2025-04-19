
import { JSX } from "react";
import { SvgIconProps } from "./types";

export function SvgCaretLeft (props: SvgIconProps): JSX.Element{
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
            height={props.size}
            width={props.size}
        >
            <path
                fill={props.color}
                d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"
            />
        </svg>
    );
}
