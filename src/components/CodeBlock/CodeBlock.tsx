import { JSX, useCallback, useState } from "react";
import Editor from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import Spacer from "../Spacer";
import { $headerStyles, $labelStyles, $rootStyles } from "./styles";
import { CodeBlockProps } from "./types";

const codeLineHeight = 2;
const codeFontSize = 14;
const editorConfigurations: editor.IStandaloneEditorConstructionOptions = {
    readOnly: true,
    lineHeight: codeLineHeight,
    lineNumbers: 'on',
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    fontSize: codeFontSize,
    wordWrap: 'on',
    automaticLayout: true,
}

function CodeBlock({
    actions,
    code,
    label,
    language,
    maxWidth = "800px",
    minWidth = "320px",
    width = "100%",
}: CodeBlockProps): JSX.Element {
    const [height, setHeight] = useState<number>(0);

    const handleCodeBlockOnMount = useCallback(( editor: editor.IStandaloneCodeEditor) => {
        const lineCount = editor.getModel()?.getLineCount() ?? 0;
        const padding = 15;
        const height = lineCount * ( codeLineHeight + codeFontSize + padding );

        setHeight(height);

        editor.layout({
            width: editor.getContainerDomNode().clientWidth,
            height,
        });
    }, []);

    return (
        <div
            style={{
                ...$rootStyles,
                maxWidth,
                minWidth,
                width,
            }}
        >
            <div style={$headerStyles}>
                <span style={$labelStyles}>{label}</span>
                <Spacer
                    alignItems="center"
                    direction="row"
                    size="spacing3"
                >
                    {actions}
                </Spacer>
            </div>
            <div
                style={{
                    width: "100%",
                    height: height,
                }}
            >
                <Editor
                    value={code}
                    defaultLanguage={language}
                    theme="vs-light"
                    onMount={handleCodeBlockOnMount}
                    options={editorConfigurations}
                />
            </div>
        </div>
      );
}

export default CodeBlock;
