export interface CardProps {
    /**
     * Background color of the card
     * @default "#FFFFFF"
     */
    backgroundColor?: string;
    /**
     * Content displayed within the card
     */
    children?: React.ReactNode;
    /**
     * The maximum width of the card
     * @default "200px"
     */
    maxWidth?: string;
}
