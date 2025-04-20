import { SpacingVariants } from "../../foundations/spacing";
import { SpacerProps } from "../Spacer/types";

export interface GridProps extends Pick<SpacerProps, "alignItems" | "justifyContent"> {
    /**
     * Children of the Grid
     */
    children?: Array<React.ReactNode> | React.ReactNode;
    /**
     * The number of columns in the grid. The maximum number
     * of columns is 12.
     * @default 1
     */
    columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    /**
     * Sets the gaps (gutters) between rows and columns
     * @default "spacing5"
     */
    gap?: SpacingVariants;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;    
}
