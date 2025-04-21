import { Radii } from "../../foundations";
import { LoadingSkeletonVariants } from "./types";

export const $getSkeletonStyles = (color: string) => `
  .loading-skeleton {
    position: relative;
    background-color: ${color};
    overflow: hidden;
  }

  .loading-skeleton::after {
    content: "";
    position: absolute;
    top: 0;
    left: -150%;
    width: 250%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 253, 253, 0.37) 50%,
      transparent 100%
    );
    animation: shimmer 1.2s ease-in-out infinite;
    animation-delay: var(--shimmer-delay, 0s);
  }

  @keyframes shimmer {
    0% { transform: translateX(0%); }
    100% { transform: translateX(100%); }
  }
`;

export const $rootVariantStyles: Record<LoadingSkeletonVariants, React.CSSProperties> = {
  "avatar": {
      borderRadius: "50%",
      height: "40px",
      width: "40px",
  },
  "inline-text": {
      borderRadius: Radii.sm,
      height: "12px",
      width: "100px",
  },
  "rectangle": {
      borderRadius: Radii.md,
      height: "50px",
      width: "300px",
  },
  "text": {
      borderRadius: Radii.md,
      height: "16px",
      width: "100px",
  },
};
