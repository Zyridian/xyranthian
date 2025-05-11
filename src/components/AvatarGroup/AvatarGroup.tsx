"use server"

import { JSX } from "react";
import Avatar from "../Avatar";
import { Spacing } from "../../foundations/spacing";
import Spacer from "../Spacer";
import { AvatarGroupProps } from "./types";

/**
 * Visually groups multiple user avatars with consistent
 * sizing and slight overlap for compact display.
 */
function AvatarGroup({
    gap = "spacing9",
    id,
    items = [],
    size = "24px",
}: AvatarGroupProps): JSX.Element {
    return (
        <Spacer
            id={id}
            alignItems="center"
            direction="row"
        >
            {
                items.map((props, index) => (
                    <span
                        key={props.id ?? index}
                        style={{
                            marginLeft: index === 0 ? 0 : `-${Spacing[gap]}`,
                        }}
                    >
                        <Avatar
                            size={size}
                            {...props}
                        />
                    </span>
                ))
            }
        </Spacer>
    );
}

export default AvatarGroup;
