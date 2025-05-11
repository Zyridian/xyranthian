import React, { JSX } from "react";
import { palette } from "../../foundations/palette";
import { BreadcrumbsProps } from "./types";
import Icon, { IconSizes } from "../Icon";
import "../../foundations/global.css"
import styles from "./styles.module.css";
import BreadcrumbItem from "./BreadcrumbItem";

/**
 * Breadcrumbs provide a navigational trail, showing users where they are and how they got there
 */
function Breadcrumbs ({
    id,
    items= [],
    separator = "chevron-right",
    ...rest
}: BreadcrumbsProps): JSX.Element {
    return (
        <nav
            id={id}
            data-testid={id}
            {...rest}
        >
            <ol role="list" className={styles.list}>
                {
                    items.map((itemProps, index) => {
                        const isLastBreadcrumbItem = index === items.length - 1;
                        return (
                            <React.Fragment key={itemProps.id ?? index}>
                                <BreadcrumbItem
                                    isCurrentPage={isLastBreadcrumbItem}
                                    {...itemProps}
                                />
                                {!isLastBreadcrumbItem && (
                                    <Icon
                                        color={palette.neutral400}
                                        size={IconSizes.SM}
                                        variant={separator}
                                    />
                                )}
                            </React.Fragment>
                        );
                    })
                }
            </ol>
        </nav>
    );
}

export default Breadcrumbs;
