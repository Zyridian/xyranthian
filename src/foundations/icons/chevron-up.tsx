
import { JSX } from "react";
import { SvgIconProps } from "./types";

export function SvgChevronUp (props: SvgIconProps): JSX.Element{
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={props.size}
            width={props.size}
            fill="none"
            stroke={props.color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path d="m18 15-6-6-6 6"/>
        </svg>
    );
}
