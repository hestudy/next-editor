import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { SlashNode } from "./nodes/SlashNode";
import DevPlugin from "./plugins/DevPlugin";
import SlashPlugin from "./plugins/SlashPlugin";

function NextEditor() {
  return (
    <LexicalComposer
      initialConfig={{
        namespace: "NextEditor",
        onError(error) {
          console.error(error);
        },
        nodes: [SlashNode],
      }}
    >
      <RichTextPlugin
        contentEditable={
          <ContentEditable className="focus-visible:outline-none relative" />
        }
        placeholder={
          <div className="absolute top-4 text-gray-500">输入/插入块</div>
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <AutoFocusPlugin />
      <DevPlugin></DevPlugin>
      <SlashPlugin></SlashPlugin>
    </LexicalComposer>
  );
}

export default NextEditor;
