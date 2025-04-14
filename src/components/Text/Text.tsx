import { Typography } from "../../foundations";
import { palette } from "../../foundations/palette";
import { BaseElementWrappers } from "./constants";
import { TextProps } from "./types";

/**
 * Texts are used to display contextual feedback messages—such as errors, warnings,
 * or confirmations—to guide or inform users within the UI.
 */
function Text({
    align = "left",
    baseElement= "p",
    color = palette.neutral700,
    content,
    children,
    variant = "bodyS",
}: TextProps) {
    const Wrapper = BaseElementWrappers[baseElement];

    return (
        <Wrapper style={{
            color,
            textAlign: align,
            ...Typography[variant],
            margin: 0,
        }}>
            {children ?? content}
        </Wrapper>
    );
}

export default Text;
