import { IconVariant } from "../../foundations/icons";

export interface BreadcrumbItemProps extends React.AriaAttributes {
    /**
     * The label shown in the Breadcrumb that represents
     * a page.
     * @example Home Icon
     * @example "Home"
     */
    content: React.ReactNode;
    /**
     * The link to the page to navigate to
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/href
     */
    href?: string;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
    /**
     * Callback function called when the breadcrumb item is clicked.
     */
    onClick?: () => void;
    /**
     * Indicates where to display the linked resource
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/target
     * @default "_self"
     */
    target?: React.HTMLAttributeAnchorTarget
}

export interface BreadcrumbsProps extends React.AriaAttributes {
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
    /**
     * The items in the breadcrumbs group.
     * The last item in the breadcrumb group will be considered active page.
     */
    items?: BreadcrumbItemProps[];
    /**
     * Icon or text used to separate the breadcrumb items.
     * @default "chevron-right"
     */
    separator?: IconVariant;
}
