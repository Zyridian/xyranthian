import { JSX, useCallback } from "react";
import { palette } from "../../foundations/palette";
import { typeScale } from "../../foundations/typography";
import { IconVariant } from "../../foundations/icons";
import Icon from "../Icon";
import { LessonCardProps, LessonCardStatusVariants } from "./types";
import {
    $footerStyles,
    $rootCardStyles,
    $statusColorMap,
    $statusLabelStyles,
    $summaryStyles,
    $timeLabelStyles,
    $titleStyles,
} from "./styles";
import Spacer from "../Spacer/Spacer";

/**
 * Displays a lesson preview card, used in dashboard views, module pages, and
 * anywhere a user needs to scan or navigate lessons. It shows lesson
 * title, summary, estimated time, and completion state.
 */
function LessonCard({
    compact,
    href,
    id,
    onClick,
    statusLabel,
    summary,
    timeLabel,
    title,
    variant = "dashboard",
}: LessonCardProps): JSX.Element {
    const Wrapper = href ? "a" : "div";

    const handleClick = useCallback(() => {
        if (onClick) {
            onClick();
        }
        if (href) {
            window.location.href = href;
        }

    }, [href, onClick]);

    return (
        <Wrapper
            data-testid={id}
            id={id}
            onClick={handleClick}
            style={{
                ...$rootCardStyles,
                maxWidth: variant === "dashboard" ? "400px" : "100%",
                cursor: onClick || href ? "pointer" : "default",
            }}
        >
            <Spacer direction="column" size={compact ? "spacing0" : "spacing7"}>
                <p style={$titleStyles}>{title}</p>
                <p style={$summaryStyles}>{summary}</p>
                <div style={$footerStyles}>
                    <p style={$timeLabelStyles}>
                        {timeLabel?.content &&
                            (typeof timeLabel.icon === "string" ? (
                                <Icon
                                    color={palette.neutral500}
                                    size={typeScale.sizeLabel}
                                    variant={timeLabel.icon}
                                />
                            ) : (
                                timeLabel.icon ?? null
                            ))
                        }
                        {timeLabel?.content}
                    </p>
                    <p
                        style={{
                            ...$statusLabelStyles,
                            color: statusLabel?.status
                                ? $statusColorMap[statusLabel?.status]
                                : palette.neutral600,
                        }}
                    >
                        {statusLabel?.status &&
                            ( typeof statusLabel.icon === "string" ||
                                (
                                    statusLabel.icon === undefined
                                    && statusDefaultIcon[statusLabel.status]
                                )
                            ? (
                                <Icon
                                    color={$statusColorMap[statusLabel.status]}
                                    size={typeScale.sizeMetadata}
                                    variant={
                                        statusLabel.icon ??
                                        statusDefaultIcon[statusLabel.status]!
                                    }
                                />
                            ) : (
                                statusLabel.icon ?? null
                            ))}
                        {statusLabel?.content ??
                            (statusLabel?.status && statusContent[statusLabel.status])
                        }
                    </p>
                </div>
            </Spacer>
        </Wrapper>
    )
}

export default LessonCard;

export const statusDefaultIcon: Record<LessonCardStatusVariants, IconVariant | null> = {
    "completed": "checkmark-circle",
    "in-progress": null,
    "locked": "lock",
    "not-started": "unlock",
};

export const statusContent: Record<LessonCardStatusVariants, string> = {
    "completed": "Completed",
    "in-progress": "In progress",
    "locked": "Locked",
    "not-started": "Not started"
};
