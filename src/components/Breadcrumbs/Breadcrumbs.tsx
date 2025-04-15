import React, { CSSProperties, JSX, useCallback, useState } from "react";
import { typeScale } from "../../foundations/typography";
import { palette } from "../../foundations/palette";
import {
    BreadcrumbItemProps as XyranthianBreadcrumbItemProps,
    BreadcrumbsProps,
    GetBreadcrumbItemStyleProps,
} from "./types";
import Icon, { IconSizes } from "../Icon";
import { $breadcrumbGroupStyles, $breadcrumbListItemStyles } from "./styles";
import { Colors } from "../../foundations";

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
            <ol role="list" style={$breadcrumbGroupStyles}>
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

type BreadcrumbItemProps = XyranthianBreadcrumbItemProps & {isCurrentPage?: boolean}

function BreadcrumbItem({
    isCurrentPage = false,
    content,
    href,
    id,
    onClick,
    ...rest
}: BreadcrumbItemProps): JSX.Element {
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);
    const handleMouseLeave= useCallback(() => {
        setIsHover(false);
    }, []);

    return (
        <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            role="listitem"
            style={$breadcrumbListItemStyles}
        >
            <a
                aria-current="page"
                href={href}
                id={id}
                onClick={onClick}
                style={{
                    
                    ...getBreadcrumbItemStyle({isCurrentPage, isHover})
                }}
                {...rest}
            >
                {content}
            </a> 
        </li>
    );
}

export default Breadcrumbs;

function getBreadcrumbItemStyle({
    isCurrentPage,
    isHover,
}: GetBreadcrumbItemStyleProps): React.CSSProperties {
    const baseStyles: CSSProperties = {
        fontFamily: typeScale.fontInter,
        fontWeight: typeScale.weightMedium,
        fontSize: typeScale.sizeBodyS,
    };

    if (isCurrentPage) {
        return {
            ...baseStyles,
            color: Colors.textStrong,
            cursor: "default"
        };
    }

    return isHover
        ? {
            ...baseStyles,
            color: Colors.textDefault,
            cursor: "pointer",
        }
        : {
            ...baseStyles,
            color: Colors.textMuted,
        };
}
