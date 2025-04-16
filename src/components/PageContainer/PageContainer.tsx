import { JSX } from "react";
import { BaseElementWrappers } from "./constants";
import { PageContainerProps } from "./types";
import { $baseStyles } from "./styles";

/**
 * A layout utility that enforces consistent horizontal padding
 * and max width across pages and major views. It helps maintain clean alignment
 * and responsiveness across screen sizes.
 */
function PageContainer({
    baseElement = "div",
    children,
    horizontalPadding = "24px",
    id,
    maxWidth = "960px",
}:PageContainerProps): JSX.Element {
    const Wrapper = BaseElementWrappers[baseElement];
    const style: React.CSSProperties = {
        ...$baseStyles,
        maxWidth,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
    };

    return (
        <Wrapper
            data-testid={id}
            id={id}
            style={style}
        >
            {children}
        </Wrapper>
    );
}

export default PageContainer;
