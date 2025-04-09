import { IconVariant } from "../../foundations/icons";
import { SvgIconProps } from "../../foundations/icons/types";
import { IconSizes } from "./Icon";

export interface IconProps extends SvgIconProps {
    /**
     * The color of the icon
     * @default "#111827"
     */
    color?: string;
    /**
     * The height and width of the icon
     * @default '24px'
     */
    size?: string | IconSizes;
    /**
     * The icon variant
     */
    variant: IconVariant;
}
