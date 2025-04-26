import { JSX, useMemo } from "react";
import Icon from "../Icon";
import { palette } from "../../foundations/palette";
import { AvatarProps } from "./types";

/**
 * Displays a user's profile image inside a perfectly clipped
 * circle with automatic cropping and sizing.
 */
function Avatar({
    alt = "",
    id,
    placeholderImage: placeholder,
    size = 24,
    src,
    ...rest
}: AvatarProps): JSX.Element {
    const placeholderImage = placeholder ?? (
        <div style={{backgroundColor: palette.neutral050}}>
            <Icon
                color={palette.neutral400}
                variant="avatar"
                size={String(size)}
            />
        </div>
    );

    const $rootDivStyles: React.CSSProperties = useMemo(() => ({
        borderRadius: "50%",
        height: size,
        width: size,
        overflow: "hidden",
    }), [size]);

    const $imageStyles: React.CSSProperties = useMemo(() => ({
        objectFit: "cover",
        height: size,
        width: size,
    }), [size]);

    return (
        <div
            data-testid={id}
            id={id}
            role={src ? undefined : "presentation"}
            aria-hidden={src ? undefined : "true"}
            style={$rootDivStyles}
            {...rest}
        >
           { src
            ? (
                <img
                    alt={alt}
                    style={$imageStyles}
                    src={src}
                />
            )
            : placeholderImage
        }

        </div>
    )
}

export default Avatar;
