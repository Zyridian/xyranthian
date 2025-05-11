"use client"

import { JSX, useCallback, useEffect, useMemo, useState } from "react";
import Spacer from "../Spacer/Spacer";
import { typeScale } from "../../foundations/typography";
import { IconVariant } from "../../foundations/icons";
import { palette } from "../../foundations/palette";
import Icon from "../Icon";
import {
    ModuleCardProgressBarProps,
    ModuleCardProps,
    ModuleCardStatusVariants,
    ModuleProgressbarColors,
} from "./types";
import {
    $progressbarKeyframes,
    $statusColorMap,
    $statusLabelStyles,
} from "./styles";
import "../../foundations/global.css";
import styles from "./styles.module.css";

/**
 * A vertical card representing a course module. Displays a title,
 * lock/unlock status, time estimate, lesson count, and optional
 * completion status. Clicking the card navigates to the module
 * overview page.
 */
function ModuleCard({
    href,
    id,
    locked = true,
    maxWidth = "360px",
    minHeight = "180px",
    onClick,
    progress,
    statusLabel,
    summary,
    timeLabel,
    title,
}: ModuleCardProps): JSX.Element {
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
            className={styles.rootDiv}
            data-testid={id}
            id={id}
            onClick={handleClick}
            style={{
                cursor: onClick || href ? "pointer" : "default",
                maxWidth,
                minHeight,
            }}
        >
            <ProgressBar
                locked={locked}
                progress={progress}
                status={statusLabel?.status}
            />   
            <Spacer size="spacing2">
                <Spacer alignItems="center" direction="row" size="spacing3">
                    <Icon
                        color={palette.neutral500}
                        size={typeScale.sizeBodyS}
                        variant={locked ? "lock" : "unlock"}
                    />
                    <p className={styles.title}>{title}</p>
                </Spacer>
                <p className={styles.summary}>{summary}</p>
                    <Spacer direction="row" justifyContent="space-between">
                        <p className={styles.timeLabel}>
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
                    </Spacer>
            </Spacer>
            
        </Wrapper>
    )
}

export default ModuleCard;

export const statusDefaultIcon: Record<ModuleCardStatusVariants, IconVariant | null> = {
    "completed": "checkmark-circle",
    "in-progress": null,
};

export const statusContent: Record<ModuleCardStatusVariants, string> = {
    "completed": "Completed",
    "in-progress": "In progress",
};

const progressBarPropsMap: Record<ModuleCardStatusVariants, ModuleProgressbarColors> = {
    "completed": {
        backgroundColor: palette.success400,
        fillColor: palette.success500,
    },
    "in-progress": {
        backgroundColor: palette.primary500,
        fillColor: palette.primary600,
    }
}

function ProgressBar({
    locked,
    progress,
    status,
}: ModuleCardProgressBarProps): JSX.Element {
    const [animatedProgress, setAnimatedProgress] = useState("0%");

      useEffect(() => {
        if (!locked && progress) {
          const timeout = setTimeout(() => setAnimatedProgress(progress), 100);
          return () => clearTimeout(timeout);
        }
        return;
      }, [locked, progress]);

      const progressBarProps = useMemo(() => {
        if (status) {
            return progressBarPropsMap[status];
        }
        if (locked) {
            return {
                backgroundColor: palette.neutral200,
            };
        }

        return {};
      }, [locked, status]);

    if (!progressBarProps) {
        return <></>;
    }

    return (
        <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress ? Number(progress.slice(0, -1)) : 0}
        >
            <style>{$progressbarKeyframes}</style>
            <span
                className={styles.progressBar}
                style={{
                    backgroundColor: progressBarProps.backgroundColor,
                }
            }/>
            <span
                className={[
                    styles.progressBar,
                    styles.progressBarOverlay
                ].join(" ")}
                style={{
                    width: animatedProgress,
                    backgroundColor: progressBarProps.fillColor,
                }
            }/>
        </div>
    )
}
