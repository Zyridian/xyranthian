import { SpacingVariants } from "../../foundations/spacing";
import { AvatarProps } from "../Avatar/types";

export interface AvatarGroupProps extends Pick<AvatarProps, "id" | "size"> {
    /**
     * The gap between avatars
     * @default "spacing9"
     */
    gap?: SpacingVariants;
    /**
     * The avatars in the Avatar Group
     */
    items: Array<Omit<AvatarProps, "size">>
}
