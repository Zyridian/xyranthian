"use client"
import { JSX } from "react";
import {
    BreadcrumbItemProps as XyranthianBreadcrumbItemProps,
} from "./types";
import "../../foundations/global.css"
import styles from "./styles.module.css";

type BreadcrumbItemProps = XyranthianBreadcrumbItemProps & {isCurrentPage?: boolean}

function BreadcrumbItem({
    isCurrentPage = false,
    content,
    href,
    id,
    onClick,
    ...rest
}: BreadcrumbItemProps): JSX.Element {
    return (
        <li
            className={styles.listItem}
            role="listitem"
        >
            <a
                aria-current="page"
                href={href}
                id={id}
                onClick={onClick}
                className={[
                    styles.listItemLink,
                    isCurrentPage ? styles.currentPage : ""
                ].join(" ")}
                {...rest}
            >
                {content}
            </a> 
        </li>
    );
}

export default BreadcrumbItem;
