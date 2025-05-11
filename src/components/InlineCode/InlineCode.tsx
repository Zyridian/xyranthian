import { JSX } from "react";
import { palette } from "../../foundations/palette";
import { typeScale } from "../../foundations/typography";
import { Radii, Spacing } from "../../foundations";
import { InlineCodeProps } from "./types";

/**
 * Displays short inline code snippets with monospaced font and subtle styling.
 */
function InlineCode({
    children,
    color = palette.neutral800,
    backgroundColor = palette.neutral100,
    id,
    ...rest
}: InlineCodeProps): JSX.Element {
    return (
      <code
        data-testid={id}
        id={id}
        {...rest}
        style={{
            backgroundColor,
            color,
          ...$inlineCodeStyles,
        }}
      >
        {children}
      </code>
    );
}

export default InlineCode;

const $inlineCodeStyles: React.CSSProperties = {
    fontFamily: typeScale.fontMono,
    fontWeight: typeScale.weightRegular,
    borderRadius: Radii.sm,
    padding: `0 ${Spacing.spacing1}`,
    whiteSpace: "pre-wrap",
};
  