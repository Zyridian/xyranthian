"use client"

import { JSX, useEffect, useRef } from "react";
import { $getSkeletonStyles, $rootVariantStyles } from "./styles";
import { palette } from "../../foundations/palette";
import { LoadingSkeletonProps } from "./types";

/**
 * Displays a visual placeholder with a shimmering animation to indicate content is loading
 */
function LoadingSkeleton({
    "aria-hidden": ariaHidden = true,
    borderRadius,
    color = palette.neutral300,
    height,
    id,
    variant = "rectangle",
    width,
    ...rest
}: LoadingSkeletonProps): JSX.Element {
    const ref = useRef<HTMLDivElement>(null);
    const defaultValues = $rootVariantStyles[variant];

    useEffect(() => {
        if (ref.current) {
          const top = ref.current.getBoundingClientRect().top;
          const delay = `${top / 1000}s`;
          ref.current.style.setProperty("--shimmer-delay", delay);
        }
      }, [ref]);

    return (
        <div
            aria-hidden={ariaHidden}
            className="loading-skeleton"
            data-testid={id}
            id={id}
            ref={ref}
            style={{
                borderRadius: borderRadius ?? defaultValues.borderRadius,
                height: height ?? defaultValues.height,
                width: width ?? defaultValues.width,
            }}
            {...rest}
        >
            <style>{$getSkeletonStyles(color)}</style>
        </div>
    )
}

export default LoadingSkeleton;
