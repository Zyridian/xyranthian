export interface ChallengePromptProps extends React.AriaAttributes {
    /**
     * Text used in the badge
     * @default "CHALLENGE"
     */
    badgeText?: string;
    /**
     * Description text
     * @default ""
     */
    content?: React.ReactNode;
    /**
     * Bold header text
     * @default ""
     */
    header?: React.ReactNode;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
    /**
     * The width of the alert
     * @default "100%"
     */
    width?: React.CSSProperties["width"];
}
