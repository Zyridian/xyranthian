export type LoadingSkeletonVariants = "text" | "inline-text" | "avatar" | "rectangle";

export interface LoadingSkeletonProps extends React.AriaAttributes {
    /**
     * Border radius of the skeleton
     * 
     * The default borderRadius depends on the variant.
     */
    borderRadius?: React.CSSProperties["borderRadius"];
    /**
     * The color of the skeleton
     * @default "#D1D5DB"
     */
    color?: React.CSSProperties["color"];
    /**
     * Height of the skeleton
     * 
     * The default height depends on the variant.
     */
    height?: React.CSSProperties["height"];  
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
    /**
     * Variant of Loading Skeleton
     * @default "rectangle"
     */
    variant?: LoadingSkeletonVariants;
    /**
     * Width of the skeleton
     * 
     * The default width depends on the variant.
     */
    width?: React.CSSProperties["width"];
}
