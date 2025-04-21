export interface CardProps {
    /**
     * Background color of the card
     * @default "#FFFFFF"
     */
    backgroundColor?: string;
    /**
     * Content displayed within the card
     */
    children?: Array<React.ReactNode> | React.ReactNode;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
    /**
     * The maximum width of the card
     * @default "200px"
     */
    maxWidth?: React.CSSProperties["maxWidth"];
}
