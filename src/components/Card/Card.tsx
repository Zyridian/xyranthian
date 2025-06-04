import { JSX } from "react";
import { CardProps } from "./types";
import "../../foundations/global.css"
import styles from "./styles.module.css";

/**
 * A Card is a compact container for displaying content with a consistent design,
 * featuring a customizable background color and maximum width, and a subtle border for separation.
 */
function Card({
    backgroundColor = "#FFFFFF",
    borderColor,
    borderWidth,
    children,
    id,
    maxWidth = "200px",
    minHeight,
}: CardProps): JSX.Element {
    return (
        <div
            data-testid={id}
            id={id}
            className={styles.rootDiv}
            style={{
                backgroundColor,
                borderColor,
                borderWidth,
                maxWidth,
                minHeight,
            }}
        >
            {children}
        </div>
    );

}

export default Card;
