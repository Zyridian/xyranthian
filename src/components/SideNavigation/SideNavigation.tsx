import { useCallback, useState } from "react";
import { palette } from "../../foundations/palette";
import Spacer from "../Spacer/Spacer";
import Icon, { IconSizes } from "../Icon";
import { NavigationItemRendererProps, SideNavigationProps } from "./types";
import { $navigationStyles, $sideNavigationItemStyles } from "./styles";
import { Spacing } from "../../foundations";

/**
 * A persistent left-hand navigation component. It supports
 * collapsible nesting and responsive behavior.
 */
function SideNavigation({
    activePath,
    collapsible,
    id,
    items = [],
    onNavigate,
    ...rest
}: SideNavigationProps) {
    return (
        <nav
            data-testid={id}
            id={id}
            role="navigation"
            style={$navigationStyles}
            {...rest}
        >
            <Spacer size="spacing4">
                {items.map((item, index) => (
                    <NavigationItemRenderer
                        key={index}
                        item={item}
                        depth={0}
                        activePath={activePath}
                        onNavigate={onNavigate}
                        collapsible={collapsible}
                    />
                ))}
            </Spacer>
        </nav>
    );
}

function NavigationItemRenderer({
    item,
    depth,
    activePath,
    onNavigate,
    collapsible = true,
}: NavigationItemRendererProps) {
    const [expanded, setExpanded] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const isActive = item.href === activePath && activePath?.length > 0;
    const hasChildren = item.children?.length;

    const handleMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);
    const handleMouseLeave= useCallback(() => {
        setIsHover(false);
    }, []);
    const handleClick = useCallback(() => {
        if (hasChildren && collapsible) {
            setExpanded(!expanded)
        }
        else if (item.href) {
            if (onNavigate) {
                onNavigate(item.href)
            } else {
                window.location.href=item.href;
            }
        };
    }, [
        collapsible,
        expanded,
        hasChildren,
        item.href,
        onNavigate,
    ]);

    return (
        <div style={{ paddingLeft: `calc(${Spacing.spacing2} * ${depth})` }}>
            <button
                aria-label={typeof item.content === "string" ? item.content : undefined}
                aria-expanded={hasChildren ? expanded : undefined}
                aria-current={isActive ? "page" : undefined}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    ...$sideNavigationItemStyles,
                    backgroundColor: isHover ? palette.neutral100 : "transparent",
                    cursor: isHover ? "pointer" : undefined,
                    fontWeight: isActive ? "bold" : "normal",
                    borderLeft: isActive ? `4px solid ${palette.primary600}` : "4px solid transparent",
                }}
            >
                {hasChildren && collapsible
                    ? (
                    <Icon
                        size={IconSizes.SM}
                        variant={expanded ? "caret-down" : "caret-right"}
                    />
                    )
                    : (
                        <span style={{width: IconSizes.SM}}/>
                    )
                }
                {item.content}
                
            </button>

            {expanded && hasChildren && (
                <div>
                    {item.children!.map((child, index) => (
                        <NavigationItemRenderer
                            key={`${depth}-${index}-${item.href || item.content?.toString()}`}
                            item={child}
                            depth={depth + 1}
                            activePath={activePath}
                            onNavigate={onNavigate}
                            collapsible={collapsible}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default SideNavigation;
