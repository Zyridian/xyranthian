import { IconVariant } from "../../foundations/icons";
import { FlashbarVariants } from "./types";

export const $iconVariants: Record<FlashbarVariants, IconVariant> = {
    error: 'x-circle-outline',
    info: 'info-circle-outline',
    success: 'checkmark-circle-outline',
    warning: 'exclamation-triangle-outline',
};
