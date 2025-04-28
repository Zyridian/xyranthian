
import { JSX } from "react";
import { SvgIconProps } from "./types";

export function SvgChevronLeft (props: SvgIconProps): JSX.Element{
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={props.size}
            width={props.size}
            fill="none"
            stroke={props.color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m15 18-6-6 6-6"/>
        </svg>
    );
}
