import { JSX } from "react";
import { BaseElementWrappers } from "./constants";
import { PageContainerProps } from "./types";
import "../../foundations/global.css"
import styles from "./styles.module.css";

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
        maxWidth,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
    };

    return (
        <Wrapper
            className={styles.rootDiv}
            data-testid={id}
            id={id}
            style={style}
        >
            {children}
        </Wrapper>
    );
}

export default PageContainer;
