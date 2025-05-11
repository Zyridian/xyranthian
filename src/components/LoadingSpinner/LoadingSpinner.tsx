import { JSX } from "react";
import { palette } from "../../foundations/palette";
import { $getSpinnerStyles } from "./styles";
import { LoadingSpinnerProps } from "./types";

/**
 * A visual loading indicator used to communicate that
 * content is being fetched or processed asynchronously.
 */
function LoadingSpinner ({
    color = palette.primary600,
    id,
    size = "24px",
    ...rest
}: LoadingSpinnerProps): JSX.Element {
    return (
        <div
            className="loader"
            data-testid={id}
            id={id}
            {...rest}
        >
            <style>{$getSpinnerStyles(size, color)} </style>
        </div>
    )
}

export default LoadingSpinner;
