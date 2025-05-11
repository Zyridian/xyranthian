"use client"

import { JSX } from "react";
import Spacer from "../Spacer/Spacer";
import Icon from "../Icon";
import {
    $badgeStyles,
    $contentStyles,
    $headerStyles,
    $iconstyles,
    $rootStyles,
} from "./styles";
import { ChallengePromptProps } from "./types";

/**
 * Displays a bold instructional callout to guide learners through a challenge.
 */
function ChallengePrompt({
    badgeText = "CHALLENGE",
    content,
    header,
    id,
    width = "100%",
    ...rest
}: ChallengePromptProps): JSX.Element {

    return (
        <div
            {...rest}
            data-testid={id}
            id={id}
            style={{
                ...$rootStyles,
                width,
            }}
        >
            <div style={$badgeStyles}>
                <span>{badgeText}</span>
            </div>
            <Spacer
                alignItems="center"
                direction="row"
            >
                <span style={$iconstyles}>
                    <Icon color="#fa1f4a" size="70px" variant="target"/>
                </span>
                <Spacer size="spacing2" direction="column">
                    <span style={$headerStyles}>
                        {header}
                    </span>
                    <span style={$contentStyles}>
                        {content}
                    </span>
                </Spacer>
            </Spacer>
        </div>
    );
}

export default ChallengePrompt;
