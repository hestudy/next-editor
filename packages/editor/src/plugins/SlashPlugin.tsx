import { $createSlashNode } from "@/nodes/SlashNode";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $insertNodes, TextNode } from "lexical";
import { useEffect } from "react";

const SlashPlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerNodeTransform(TextNode, (node) => {
      const textContent = node.getTextContent();
      if (textContent.endsWith("/")) {
        node.setTextContent(textContent.slice(0, -1));
        $insertNodes([$createSlashNode()]);
      }
    });
  }, []);

  useEffect(() => {
    return editor.registerNodeTransform(TextNode, (node) => {});
  }, []);

  return <></>;
};

export default SlashPlugin;
