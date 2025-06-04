export interface CardProps {
    /**
     * Background color of the card
     * @default "#FFFFFF"
     */
    backgroundColor?: string;
    /**
     * The boder color of the card
     */
    borderColor?: React.CSSProperties["borderColor"];
    /**
     * The boder width of the card
     */
    borderWidth?: React.CSSProperties["borderWidth"];
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
    /**
     * The minimum height of the card
     */
    minHeight?: React.CSSProperties["minHeight"];
}
