import Icon from "../Icon";
import Text from "../Text";
import { TextVariants } from "../Text/types";
import { palette } from "../../foundations/palette";
import { Spacing, Typography } from "../../foundations";
import { HeaderProps, HeaderSizes } from "./types";

/**
 * A layout component for displaying large titles with optional
 * subtext and icon, used across pages and empty states.
 */
function Header({
    align = "left",
    baseElement = "h1",
    size="LG",
    subtext,
    startIcon,
    startIconColor="#111827",
    title,
}: HeaderProps) {
    const titleVariant = titleVariantMap[size];
    return (
        <div style={{lineHeight: 1}}>
            {
                typeof title === "string"
                    ? (
                        <Text
                            align={align}
                            baseElement={baseElement}
                            variant={titleVariant}
                        >
                            {startIcon && (
                                <span style={{paddingRight: Spacing.spacing3}}>
                                    <Icon
                                        color={startIconColor}
                                        size={Typography[titleVariant].fontSize}
                                        variant={startIcon}
                                    />
                                </span>
                            )}
                            {title}
                        </Text>
                    )
                    : title

            }
            {subtext && (
                typeof subtext === "string"
                    ? (
                        <Text
                            align={align}
                            variant={subtextVariantMap[size]}
                            color={palette.neutral500}
                        >
                            {subtext}
                        </Text>
                    )
                    : subtext
            )}
        </div>
    );
}

export default Header;

const titleVariantMap: Record<HeaderSizes, TextVariants> = {
    "SM": "h2",
    "MD": "h1",
    "LG": "displayS",
    "XL": "displayXL",
}

const subtextVariantMap: Record<HeaderSizes, TextVariants> = {
    "SM": "bodyS",
    "MD": "bodyL",
    "LG": "h3",
    "XL": "h2",
}
