export interface CodeBlockProps {
    /**
     * Action buttons in the right-side of the code block header.
     * 
     * @example
     * ```
     * actions={[
     *  <IconButton icon="copy" size={IconSizes.SM} />,
     *  <IconButton icon="arrow-up-right" size={IconSizes.SM} />
     * ]}
     * ```
     */
    actions?: React.ReactNode | Array<React.ReactNode>;
    /**
     * Code to render
     */
    code: string;
    /**
     * Label for the code block
     */
    label?:string;
    /**
     * The minimum width for the code block.
     * @default "800px"
     */
    maxWidth?: React.CSSProperties["maxWidth"];
    /**
     * The minimum width for the code block.
     * @default "320px"
     */
    minWidth?: React.CSSProperties["minWidth"];
    /**
     * The coding language used by the
     * code editor
     */
    language?: "html" | "javascript";
    /**
     * The width of the code block.
     * @default "100%"
     */
    width?: React.CSSProperties["width"];
}
