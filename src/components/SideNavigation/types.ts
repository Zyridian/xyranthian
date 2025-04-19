export interface NavigationItem {
    /**
     * The text for the navigation item.
     * @example Home Icon
     * @example "Get started"
     */
    content: React.ReactNode;
    /**
     * Navigation items nested in the current navigation item.
     */
    children?: NavigationItem[];
    /**
     * The path associated with navigation item.
     */
    href?: string;
}

export interface SideNavigationProps extends React.AriaAttributes{
    /**
     * The path of the current page.
     */
    activePath?: string;
    /**
     * Whether the side navigation can be collapsed.
     */
    collapsible?: boolean;
    /**
     * Whether the side navigation is closed on render.
     */
    collapsedByDefault?: boolean;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
    /**
     * Items in the side navigation menu.
     */
    items?: NavigationItem[];
    /**
     * Callback function called when navigation item is clicked.
     */
    onNavigate?: (href: string) => void;
}

export interface NavigationItemRendererProps{
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
    /**
     * Side navigation item.
     */
    item: NavigationItem;
    /**
     * Depth within side navigation.
     */
    depth: number;
    /**
     * The path of the current page. When it matches the href
     * of a side navigation item, it will be marked as active.
     * @example "/home"
     */
    activePath?: string
    /**
     * Callback function called with a navigation item with an href
     * is clicked.
     * 
     * Note: If an item has children, `onNavigate` will not be
     * called.
     */
    onNavigate?: (href: string) => void;
    /**
     * Whether a navigation item with children can be
     * expanded and collapsed.
     * @default true
     */
    collapsible?: boolean;
}
