import { Typography } from "../../foundations";
import { palette } from "../../foundations/palette";
import { BaseElementWrappers } from "./constants";
import { TextProps } from "./types";

/**
 * Texts are used to display text elements like paragraphs
 * and headers.
 */
function Text({
    align = "left",
    baseElement= "p",
    color = palette.neutral700,
    content,
    children,
    cursor = "default",
    fontSize,
    id,
    variant = "bodyS",
}: TextProps) {
    const Wrapper = BaseElementWrappers[baseElement];
    const styles = Typography[variant];

    return (
        <Wrapper
            data-testid={id}
            id={id}
            style={{
                color,
                textAlign: align,
                ...styles,
                fontSize: fontSize ?? styles.fontSize,
                margin: 0,
                cursor,
            }}
        >
            {children ?? content}
        </Wrapper>
    );
}

export default Text;
