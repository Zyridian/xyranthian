import React from "react";

export interface AvatarProps extends React.AriaAttributes {
    /**
     * Alternate text to display when avatar's image
     * is not loaded.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt
     */
    alt?: string;
    /**
     * Placeholder SVG, Xyranthian Icon, or Image shown when avatar
     * source is not specified.
     * @default <Icon variant="avatar" size={size} />
     *
     * @example
     * ```
     * <img
     *  style={{
     *      objectFit: "cover",
     *      height: size,
     *      width: size,
     *  }}
     *  src="#"
     * />
     * ```
     */
    placeholderImage?: React.ReactNode;
     /**
     * The height and width of the avatar
     * @default '24px'
     */
    size?: number | string;
    /**
     * The image source.
     * 
     * For customer-provided images, the service should crop
     * the images to have 1:1 aspect ratio.
     */
    src?: string;
}
