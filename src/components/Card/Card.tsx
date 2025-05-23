import { JSX } from "react";
import { CardProps } from "./types";
import { $baseStyles } from "./styles";

/**
 * A Card is a compact container for displaying content with a consistent design,
 * featuring a customizable background color and maximum width, and a subtle border for separation.
 */
function Card({
    backgroundColor = "#FFFFFF",
    children,
    id,
    maxWidth = "200px",
}: CardProps): JSX.Element {
    return (
        <div
            data-testid={id}
            id={id}
            style={{
                backgroundColor,
                maxWidth,
                ...$baseStyles,
            }}
        >
            {children}
        </div>
    );

}

export default Card;
